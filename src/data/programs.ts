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
    title: "Intermediate FA / FSC",
    level: "Intermediate",
    description:
      "Foundation programs in Arts and Science streams with ICS, I.Com, and General Science options.",
    duration: "2 Years",
    icon: "book",
    highlights: ["FA / FSC", "ICS", "I.Com", "General Science"],
  },
  {
    id: "bs-english",
    title: "BS English",
    level: "Undergraduate",
    description:
      "Comprehensive English language, literature and linguistics program for advanced academic development.",
    duration: "4 Years",
    icon: "pen",
    highlights: ["Literature", "Linguistics", "Communication"],
  },
  {
    id: "bs-cs",
    title: "BS Computer Science",
    level: "Undergraduate",
    description:
      "Modern computing, programming, data structures and software engineering with upgraded lab facilities.",
    duration: "4 Years",
    icon: "monitor",
    highlights: ["Programming", "Modern Lab", "Software"],
  },
  {
    id: "bs-psychology",
    title: "BS Applied Psychology",
    level: "Undergraduate",
    description:
      "Human behaviour, counselling, research methods and applied psychology for professional careers.",
    duration: "4 Years",
    icon: "palette",
    highlights: ["Counselling", "Research", "Behaviour"],
  },
  {
    id: "bed",
    title: "B.Ed",
    level: "Professional",
    description:
      "Professional teacher education preparing graduates for the classroom under a semester system.",
    duration: "2.5 Years (Semester System)",
    icon: "book",
    highlights: ["Teaching", "Semester System", "Professional"],
  },
  {
    id: "adp",
    title: "ADP — Science & Arts",
    level: "Associate Degree",
    description:
      "Associate Degree Program covering a wide range of science and arts subjects under a semester system.",
    duration: "2 Years (Semester System)",
    icon: "flask",
    highlights: ["All Science", "All Arts", "Semester System"],
  },
];

export const admissionsInfo = {
  session: "Admissions 2026-27",
  eligibility: [
    "Matriculation or equivalent for Intermediate programs",
    "Intermediate (F.A/F.Sc) for BS and ADP programs",
    "Intermediate (F.A/F.Sc) for B.Ed program",
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
