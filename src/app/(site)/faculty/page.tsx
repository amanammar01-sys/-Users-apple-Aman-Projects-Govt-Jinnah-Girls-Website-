import type { Metadata } from "next";
import FacultyPageClient from "@/components/FacultyPageClient";
import { getAllStaff } from "@/lib/content";

export const metadata: Metadata = {
  title: "Faculty & Staff",
  description:
    "Faculty and staff directory of Govt. Jinnah Graduate College for Women, Mozang Lahore.",
};

export default async function FacultyPage() {
  const staff = await getAllStaff();
  return <FacultyPageClient staff={staff} />;
}
