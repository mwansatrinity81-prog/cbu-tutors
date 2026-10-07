// EDIT THIS FILE to change tutors and your number.
// After editing: save, then upload this file to GitHub again.

// Your WhatsApp number in international format, with no + and no spaces.
// For Zambia: 260 followed by your number without the first 0.
// Example: 260971234567
const ADMIN_WHATSAPP = "260766268379";

// Course titles are optional. Fill them in between the quotes if you want.
const COURSES = [
  { code: "MA110", title: "" },
  { code: "PH110", title: "" },
  { code: "CS150", title: "" },
  { code: "CS130", title: "" }
];

// Add a tutor by copying one block and changing the details.
// price = Kwacha per hour.
// Do NOT put tutors' phone numbers here. This file is public.
// Delete the "sample: true" part when you replace a sample with a real tutor.
const TUTORS = [
  {
    name: "Sample Tutor A",
    courses: ["CS150", "CS130"],
    price: 50,
    availability: "Weekday evenings",
    bio: "Sample listing. Replace with a real tutor.",
    sample: true
  },
  {
    name: "Sample Tutor B",
    courses: ["MA110", "PH110"],
    price: 40,
    availability: "Weekends",
    bio: "Sample listing. Replace with a real tutor.",
    sample: true
  },
  {
    name: "Sample Tutor C",
    courses: ["MA110", "CS150"],
    price: 45,
    availability: "Monday to Friday after 16:00",
    bio: "Sample listing. Replace with a real tutor.",
    sample: true
  }
];