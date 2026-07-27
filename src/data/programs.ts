export interface Program {
  id: string;
  title: string;
  level: string;
  description: string;
  duration: string;
  icon: string;
  highlights: string[];
}

export const programs: Program[] = [
  {
    id: "intermediate",
    title: "Intermediate",
    level: "F.A / F.Sc",
    description:
      "Foundation programs in Arts and Science streams with regular and second-shift options for deserving students.",
    duration: "2 Years",
    icon: "book",
    highlights: ["F.A Arts", "F.Sc Science", "Second Shift"],
  },
  {
    id: "bs-english",
    title: "ADP English",
    level: "Undergraduate",
    description:
      "A two-year semester-based undergraduate program developing critical thinking, communication skills, and literary appreciation.",
    duration: "2 Years (4 Semesters)",
    icon: "pen",
    highlights: ["Literature", "Linguistics", "Communication"],
  },
  {
    id: "bs-cs",
    title: "ADP Computer Science",
    level: "Undergraduate",
    description:
      "A two-year semester-based program with upgraded computer lab facilities, preparing students for technology-driven careers.",
    duration: "2 Years (4 Semesters)",
    icon: "monitor",
    highlights: ["Programming", "Modern Lab", "Research"],
  },
  {
    id: "arts-humanities",
    title: "Arts & Humanities",
    level: "ADP",
    description:
      "Comprehensive arts education in Urdu, English, History, Islamic Studies, and related disciplines.",
    duration: "2 Years (4 Semesters)",
    icon: "palette",
    highlights: ["Urdu", "History", "Islamic Studies"],
  },
  {
    id: "science",
    title: "Science Programs",
    level: "ADP",
    description:
      "Science block with modern laboratories for Chemistry, Zoology, Botany, Physics, and Mathematics.",
    duration: "2 Years (4 Semesters)",
    icon: "flask",
    highlights: ["Chemistry", "Zoology", "Physics"],
  },
];

export const admissionsInfo = {
  session: "Admissions 2026-27",
  eligibility: [
    "Matriculation or equivalent for Intermediate programs",
    "Intermediate (F.A/F.Sc) for ADP programs",
    "Minimum required marks as per Board of Intermediate & Secondary Education, Lahore",
    "Second-shift admission subject to seat availability",
  ],
  documents: [
    "Original Matric / Intermediate certificates",
    "Character certificate from previous institution",
    "CNIC / B-Form copy",
    "Recent passport-size photographs",
    "Migration certificate (if applicable)",
  ],
};
