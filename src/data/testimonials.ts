export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  type: "student" | "parent" | "alumni";
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "This college gave me confidence and academic excellence. The faculty is supportive and the campus environment is truly empowering for women.",
    name: "Ayesha Khan",
    role: "ADP English Student",
    type: "student",
  },
  {
    id: "t2",
    quote:
      "As a parent, I am grateful for the discipline, values, and quality education my daughter receives here. The college truly nurtures holistic development.",
    name: "Mrs. Saima Ahmed",
    role: "Parent",
    type: "parent",
  },
  {
    id: "t3",
    quote:
      "My years at Jinnah College shaped my career. The strong academic foundation and extracurricular opportunities prepared me for professional success.",
    name: "Dr. Hina Malik",
    role: "Alumni · Class of 2015",
    type: "alumni",
  },
];
