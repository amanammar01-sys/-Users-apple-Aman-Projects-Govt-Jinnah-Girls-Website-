export type EventCategory =
  | "cultural"
  | "sports"
  | "academic"
  | "national"
  | "religious"
  | "awareness"
  | "ceremony";

export interface CollegeEvent {
  id: string;
  title: string;
  description: string;
  date?: string;
  category: EventCategory;
  images: string[];
}

function imgs(page: number, start: number, end: number, ext = "jpeg"): string[] {
  return Array.from({ length: end - start + 1 }, (_, i) => {
    const num = start + i;
    const e = page === 1 ? (num <= 4 || num === 9 || num === 11 || num === 12 ? "png" : "jpeg") : ext;
    return `/images/page${page}_img${num}.${e}`;
  });
}

export const events: CollegeEvent[] = [
  {
    id: "kashmir-solidarity",
    title: "Kashmir Solidarity Day",
    description:
      "Staff members and students walked to express solidarity with the Kashmiri brethren. A seminar highlighted the atrocities being inflicted upon the Kashmiri nation and the violation of human rights by the Indian forces.",
    date: "February 5, 2025",
    category: "national",
    images: imgs(2, 1, 7),
  },
  {
    id: "fine-arts-exhibition",
    title: "Annual Fine Arts Exhibition",
    description:
      "The Annual Fine Arts Exhibition showcased students' creative artwork. Rana Sikandar Hayat, Education Minister of Punjab, attended as chief guest and appreciated the students' efforts.",
    date: "2025",
    category: "cultural",
    images: imgs(2, 8, 17),
  },
  {
    id: "punjab-cultural-day",
    title: "Punjab Cultural Day",
    description:
      "Punjab Culture Day was celebrated with great enthusiasm. Students showcased Punjab's rich traditions through cultural dresses, performances, and vibrant displays of heritage.",
    date: "2025",
    category: "cultural",
    images: imgs(2, 18, 28),
  },
  {
    id: "annual-sports-gala",
    title: "Annual Sports Gala",
    description:
      "Annual sports day was inaugurated by Mr. Mian Muhammad Nouman, Advisor to CM Punjab. Students participated in various athletic competitions demonstrating teamwork and sportsmanship.",
    date: "2025",
    category: "sports",
    images: imgs(3, 1, 8),
  },
  {
    id: "tree-plantation",
    title: "Tree Plantation",
    description:
      "A tree plantation drive was held at the college campus. Students planted saplings and created posters to promote a healthy environment and greener future.",
    date: "2025",
    category: "awareness",
    images: imgs(3, 9, 14),
  },
  {
    id: "student-council",
    title: "Student Council Formation Ceremony",
    description:
      "The Student Council Formation Ceremony was held to empower student leadership. Elected representatives took oath to serve their fellow students.",
    date: "2025",
    category: "ceremony",
    images: imgs(3, 15, 20),
  },
  {
    id: "flag-hoisting",
    title: "Flag Hoisting Ceremony",
    description:
      "A dignified flag hoisting ceremony was organized at the college, instilling patriotism and national pride among students and staff members.",
    date: "2025",
    category: "ceremony",
    images: imgs(4, 1, 10),
  },
  {
    id: "mehfil-milad",
    title: "Mehfil-e-Milad-e-Mustafa",
    description:
      "Mehfil-e-Milad-e-Mustafa was organized with great devotion. Students recited Naat-e-Pak and melodious hymns, paying tribute to the Holy Prophet (PBUH).",
    date: "2025",
    category: "religious",
    images: imgs(4, 11, 20),
  },
  {
    id: "debate-speech",
    title: "Debate & Speech Competition",
    description:
      "Students showcased their oratory skills in debate and speech competitions, articulating thoughtful arguments on contemporary topics with confidence.",
    date: "2025",
    category: "academic",
    images: imgs(4, 21, 30),
  },
  {
    id: "posters-painting",
    title: "Posters & Painting Competition",
    description:
      "A vibrant posters and painting competition allowed students to express their creativity through visual art on various themes.",
    date: "2025",
    category: "cultural",
    images: imgs(4, 31, 40),
  },
  {
    id: "anti-begging",
    title: "Anti-Begging Seminar",
    description:
      "An awareness seminar on Anti-Begging was held. Teachers and students participated wholeheartedly, condemning begging and expressing thoughts on a dignified society.",
    date: "August 20, 2025",
    category: "awareness",
    images: imgs(5, 1, 6),
  },
  {
    id: "gender-violence",
    title: "Gender Violence Awareness Seminar",
    description:
      "A seminar on gender violence awareness was organized. Students prepared meaningful posters to highlight prevention of this social issue.",
    date: "2025",
    category: "awareness",
    images: imgs(5, 7, 12),
  },
  {
    id: "independence-day",
    title: "Independence Day Celebrations",
    description:
      "Independence Day celebrations began from August 9. Students participated in Urdu speech competitions, poster art, and national songs with great enthusiasm.",
    date: "August 9–14, 2025",
    category: "national",
    images: imgs(6, 1, 14),
  },
  {
    id: "youm-tashakur",
    title: "Youm-e-Tashakur",
    description:
      "Youm-e-Tashakur was celebrated on May 16, 2025, commemorating Operation Bunyan-um-Marsoos with gratitude to the Pakistan Army.",
    date: "May 16, 2025",
    category: "national",
    images: imgs(7, 1, 4),
  },
  {
    id: "youm-takbeer",
    title: "Youm-e-Takbeer",
    description:
      "Youm-e-Takbeer was celebrated on May 28. Students performed after Naat-e-Pak, and Dr. Abdul Qadeer Khan was paid tribute.",
    date: "May 28, 2025",
    category: "national",
    images: imgs(7, 5, 8),
  },
  {
    id: "youm-istehsal",
    title: "Youm-e-Istehsal",
    description:
      "Youm-e-Istehsal was observed on August 5, 2025, marking the revocation of Kashmir's special status. Prayers were offered for the freedom of Kashmiris.",
    date: "August 5, 2025",
    category: "national",
    images: imgs(7, 9, 12),
  },
];

export const categoryLabels: Record<EventCategory, string> = {
  cultural: "Cultural",
  sports: "Sports",
  academic: "Academic",
  national: "National",
  religious: "Religious",
  awareness: "Awareness",
  ceremony: "Ceremony",
};

export const categoryColors: Record<EventCategory, string> = {
  cultural: "bg-navy-100 text-navy-800",
  sports: "bg-gray-200 text-navy-800",
  academic: "bg-navy-50 text-navy-700",
  national: "bg-navy-800 text-white",
  religious: "bg-gray-100 text-navy-700",
  awareness: "bg-amber-50 text-amber-800",
  ceremony: "bg-navy-100 text-navy-900",
};

export type EventStatus = "upcoming" | "ongoing" | "completed";

export interface ScheduledEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  status: EventStatus;
  category: EventCategory;
}

export const scheduledEvents: ScheduledEvent[] = [
  {
    id: "se1",
    title: "Admissions Open — Session 2026-27",
    date: "Aug 1, 2026",
    time: "8:00 AM – 2:00 PM",
    venue: "Administration Block",
    status: "upcoming",
    category: "ceremony",
  },
  {
    id: "se2",
    title: "Orientation for New Students",
    date: "Sep 5, 2026",
    time: "10:00 AM – 12:00 PM",
    venue: "Main Auditorium",
    status: "upcoming",
    category: "ceremony",
  },
  {
    id: "se3",
    title: "Annual Sports Gala",
    date: "Mar 15, 2026",
    time: "9:00 AM – 3:00 PM",
    venue: "Sports Ground",
    status: "completed",
    category: "sports",
  },
  {
    id: "se4",
    title: "Fine Arts Exhibition",
    date: "Feb 20, 2026",
    time: "11:00 AM – 4:00 PM",
    venue: "Arts Hall",
    status: "completed",
    category: "cultural",
  },
  {
    id: "se5",
    title: "Punjab Cultural Day",
    date: "Mar 14, 2026",
    time: "10:00 AM – 2:00 PM",
    venue: "College Campus",
    status: "completed",
    category: "cultural",
  },
  {
    id: "se6",
    title: "Independence Day Celebrations",
    date: "Aug 14, 2026",
    time: "8:00 AM – 12:00 PM",
    venue: "Main Ground",
    status: "upcoming",
    category: "national",
  },
  {
    id: "se7",
    title: "Debate & Speech Competition",
    date: "Apr 10, 2026",
    time: "10:00 AM – 1:00 PM",
    venue: "Seminar Hall",
    status: "ongoing",
    category: "academic",
  },
  {
    id: "se8",
    title: "Mehfil-e-Milad-e-Mustafa",
    date: "Sep 15, 2026",
    time: "2:00 PM – 5:00 PM",
    venue: "Prayer Room",
    status: "upcoming",
    category: "religious",
  },
];

export const statusLabels: Record<EventStatus, string> = {
  upcoming: "Upcoming",
  ongoing: "Ongoing",
  completed: "Completed",
};

export const statusColors: Record<EventStatus, string> = {
  upcoming: "bg-royal-50 text-royal",
  ongoing: "bg-amber-50 text-amber-700",
  completed: "bg-gray-100 text-gray-600",
};
