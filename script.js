const courseFilter = document.getElementById("courseFilter");
const tutorList = document.getElementById("tutorList");
const count = document.getElementById("count");
const warning = document.getElementById("warning");

// Remind you to set your number
if (ADMIN_WHATSAPP.includes("X")) {
  warning.hidden = false;
  warning.textContent = "Admin: set your WhatsApp number in tutors.js. Requests will not work until you do.";
}

function courseLabel(c) {
  return c.title ? c.code + " - " + c.title : c.code;
}

// Fill the course dropdown
const allOption = document.createElement("option");
allOption.value = "";
allOption.textContent = "All courses";
courseFilter.appendChild(allOption);

COURSES.forEach(function (c) {
  const option = document.createElement("option");
  option.value = c.code;
  option.textContent = courseLabel(c);
  courseFilter.appendChild(option);
});

function requestLink(tutor, chosen) {
  const course = chosen && tutor.courses.includes(chosen)
    ? chosen
    : tutor.courses.join(" / ");
  const message = "Hello, I would like to book " + tutor.name + " for " + course + ". My preferred day and time: ";
  return "https://wa.me/" + ADMIN_WHATSAPP + "?text=" + encodeURIComponent(message);
}

function addLine(parent, text) {
  const p = document.createElement("p");
  p.textContent = text;
  parent.appendChild(p);
}

function showTutors() {
  const chosen = courseFilter.value;
  tutorList.replaceChildren();

  const list = TUTORS.filter(function (t) {
    return chosen === "" || t.courses.includes(chosen);
  });

  count.textContent = list.length + (list.length === 1 ? " tutor found" : " tutors found");

  if (list.length === 0) {
    addLine(tutorList, "No tutors for this course yet. Check back soon.");
    return;
  }

  list.forEach(function (t) {
    const card = document.createElement("div");
    card.className = "tutor";

    const name = document.createElement("h3");
    name.textContent = t.name;
    if (t.sample) {
      const badge = document.createElement("span");
      badge.className = "badge";
      badge.textContent = "Sample listing";
      name.appendChild(badge);
    }
    card.appendChild(name);

    addLine(card, "Courses: " + t.courses.join(", "));
    addLine(card, "Price: K" + t.price + " per hour");
    addLine(card, "Available: " + t.availability);
    addLine(card, t.bio);

    const link = document.createElement("a");
    link.className = "btn";
    link.textContent = "Request this tutor";
    link.href = requestLink(t, chosen);
    link.target = "_blank";
    link.rel = "noopener";
    card.appendChild(link);

    tutorList.appendChild(card);
  });
}

courseFilter.addEventListener("change", showTutors);
showTutors();