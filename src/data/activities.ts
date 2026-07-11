export interface CampusActivity {
  id: string;
  title: string;
  description: string;
  image: string;
  category: "sports" | "cultural" | "academic" | "national" | "religious" | "awareness";
}

export const campusActivities: CampusActivity[] = [
  {
    id: "student-council",
    title: "Student Council",
    description:
      "Formation ceremony empowering student leadership. Elected representatives took oath to serve fellow students.",
    image: "/images/page3_img1.jpeg",
    category: "academic",
  },
  {
    id: "mehfil-milad",
    title: "Mehfil-e-Milad",
    description:
      "Organized with devotion. Students recited Naat-e-Pak and melodious hymns paying tribute to the Holy Prophet (PBUH).",
    image: "/images/page2_img8.jpeg",
    category: "religious",
  },
  {
    id: "punjab-cultural",
    title: "Punjab Cultural Day",
    description:
      "Celebrated with cultural dresses, performances, and vibrant displays of Punjab's rich heritage and traditions.",
    image: "/images/page2_img18.jpeg",
    category: "cultural",
  },
  {
    id: "tree-plantation",
    title: "Tree Plantation",
    description:
      "Students planted saplings and created posters promoting a healthy environment and greener campus future.",
    image: "/images/page3_img9.jpeg",
    category: "awareness",
  },
  {
    id: "independence-day",
    title: "Independence Day",
    description:
      "Celebrations from August 9–14 with Urdu speeches, poster art, and national songs with great enthusiasm.",
    image: "/images/page6_img1.jpeg",
    category: "national",
  },
  {
    id: "kashmir-solidarity",
    title: "Kashmir Solidarity Day",
    description:
      "Staff and students walked in solidarity with Kashmiri brethren. Seminar highlighted human rights violations.",
    image: "/images/page2_img1.jpeg",
    category: "national",
  },
  {
    id: "debate-speech",
    title: "Debate & Speech Competition",
    description:
      "Students showcased oratory skills, articulating thoughtful arguments on contemporary topics with confidence.",
    image: "/images/page4_img21.jpeg",
    category: "academic",
  },
];
