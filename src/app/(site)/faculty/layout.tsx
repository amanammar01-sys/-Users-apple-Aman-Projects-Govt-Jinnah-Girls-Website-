import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Faculty & Staff Directory",
  description:
    "Search and browse teaching and non-teaching staff at Govt. Jinnah Graduate College for Women, Mozang Lahore.",
};

export default function FacultyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
