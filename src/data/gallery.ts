export type GalleryCategory =
  | "all"
  | "sports"
  | "cultural"
  | "academic"
  | "campus"
  | "national"
  | "religious";

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: Exclude<GalleryCategory, "all">;
}

export const galleryCategories: { id: GalleryCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "sports", label: "Sports" },
  { id: "cultural", label: "Cultural" },
  { id: "academic", label: "Academic" },
  { id: "campus", label: "Campus" },
  { id: "national", label: "National" },
  { id: "religious", label: "Religious" },
];

export const galleryImages: GalleryImage[] = [
  { id: "g1", src: "/images/page3_img1.jpeg", alt: "Annual Sports Gala", category: "sports" },
  { id: "g2", src: "/images/page3_img3.jpeg", alt: "Sports day activities", category: "sports" },
  { id: "g3", src: "/images/page3_img5.jpeg", alt: "Athletic competition", category: "sports" },
  { id: "g4", src: "/images/page2_img8.jpeg", alt: "Fine Arts Exhibition", category: "cultural" },
  { id: "g5", src: "/images/page2_img12.jpeg", alt: "Student artwork display", category: "cultural" },
  { id: "g6", src: "/images/page2_img18.jpeg", alt: "Punjab Cultural Day", category: "cultural" },
  { id: "g7", src: "/images/page2_img22.jpeg", alt: "Cultural performance", category: "cultural" },
  { id: "g8", src: "/images/page4_img21.jpeg", alt: "Debate competition", category: "academic" },
  { id: "g9", src: "/images/page4_img25.jpeg", alt: "Speech competition", category: "academic" },
  { id: "g10", src: "/images/page3_img15.jpeg", alt: "Student Council ceremony", category: "academic" },
  { id: "g11", src: "/images/page1_img7.jpeg", alt: "Campus view", category: "campus" },
  { id: "g12", src: "/images/page3_img9.jpeg", alt: "Tree plantation drive", category: "campus" },
  { id: "g13", src: "/images/page1_img8.jpeg", alt: "College building", category: "campus" },
  { id: "g14", src: "/images/page6_img1.jpeg", alt: "Independence Day celebrations", category: "national" },
  { id: "g15", src: "/images/page6_img5.jpeg", alt: "Independence Day poster art", category: "national" },
  { id: "g16", src: "/images/page2_img1.jpeg", alt: "Kashmir Solidarity Day", category: "national" },
  { id: "g17", src: "/images/page4_img11.jpeg", alt: "Mehfil-e-Milad", category: "religious" },
  { id: "g18", src: "/images/page4_img15.jpeg", alt: "Naat recitation", category: "religious" },
];
