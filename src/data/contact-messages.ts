export type ContactSubject =
  | "admissions"
  | "academics"
  | "faculty"
  | "events"
  | "general";

export type SenderType = "student" | "parent" | "alumni" | "other";

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone: string;
  senderType: SenderType;
  subject: ContactSubject;
  message: string;
  createdAt: string;
  read: boolean;
}

export const subjectLabels: Record<ContactSubject, string> = {
  admissions: "Admissions Inquiry",
  academics: "Academic Information",
  faculty: "Faculty / Staff",
  events: "Events & Activities",
  general: "General Inquiry",
};

export const senderTypeLabels: Record<SenderType, string> = {
  student: "Student",
  parent: "Parent",
  alumni: "Alumni",
  other: "Other",
};
