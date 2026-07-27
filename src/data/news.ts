export type NewsCategory = "infrastructure" | "academic" | "digital" | "campus";

export interface NewsItem {
  id: string;
  title: string;
  description: string;
  category: NewsCategory;
  icon: string;
  year: string;
}

export const newsItems: NewsItem[] = [
  {
    id: "nomenclature",
    title: "Change of College Nomenclature",
    description:
      "The college has been officially renamed to reflect its graduate status and commitment to higher education for women in the Mozang area of Lahore.",
    category: "academic",
    icon: "award",
    year: "2025",
  },
  {
    id: "solar",
    title: "Solar System Installation",
    description:
      "A modern solar power system has been installed in the Administration Block, promoting sustainable energy and reducing the college's carbon footprint.",
    category: "infrastructure",
    icon: "sun",
    year: "2025",
  },
  {
    id: "led",
    title: "LED Lights Installation",
    description:
      "Energy-efficient LED lighting has been installed across the campus, enhancing visibility while significantly reducing electricity consumption.",
    category: "infrastructure",
    icon: "lightbulb",
    year: "2025",
  },
  {
    id: "renovation",
    title: "Campus Renovation",
    description:
      "Comprehensive renovation of the college campus including pavement of college road, leveling of grounds, and beautification of the lush green hill surroundings.",
    category: "campus",
    icon: "building",
    year: "2025",
  },
  {
    id: "computer-lab",
    title: "Computer Lab Upgrade",
    description:
      "The college computer lab has been upgraded with modern equipment and facilities, providing students with cutting-edge technology for learning and research.",
    category: "infrastructure",
    icon: "monitor",
    year: "2025",
  },
  {
    id: "social-media",
    title: "Official Social Media Launch",
    description:
      "The college has launched its official social media pages, creating a digital bridge between the institution, students, parents, and the wider community.",
    category: "digital",
    icon: "share",
    year: "2025",
  },
  {
    id: "adp-programs",
    title: "ADP English & ADP Computer Science",
    description:
      "Two new undergraduate programs — ADP English and ADP Computer Science — have been launched under a 2-year semester system, expanding academic opportunities for female students in higher education.",
    category: "academic",
    icon: "graduation",
    year: "2025",
  },
  {
    id: "jogging-track",
    title: "Jogging Track",
    description:
      "A modern jogging track has been constructed on campus with the inauguration by the Secretary Education and Director Colleges, promoting physical fitness and healthy lifestyle among students and staff.",
    category: "campus",
    icon: "activity",
    year: "2025",
  },
];

export const categoryLabels: Record<NewsCategory, string> = {
  infrastructure: "Infrastructure",
  academic: "Academic",
  digital: "Digital",
  campus: "Campus",
};
