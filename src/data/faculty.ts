import facultyData from "./faculty.json";

export interface FacultyMember {
  name: string;
  designation: string;
  department: string;
  qualification: string | null;
  contact: string | null;
  type: "teaching" | "non-teaching";
}

export const teachingStaff: FacultyMember[] = facultyData.teaching.filter(
  (m) => m.name !== "Name of the Officer"
) as FacultyMember[];

export const nonTeachingStaff: FacultyMember[] = facultyData.nonTeaching.filter(
  (m) => m.name !== "Name of the Officer"
) as FacultyMember[];

export const allStaff: FacultyMember[] = [...teachingStaff, ...nonTeachingStaff];

export const facultyStats = {
  students: 1806,
  programs: 5,
  faculty: teachingStaff.length,
  events: 16,
  totalStaff: allStaff.length,
};
