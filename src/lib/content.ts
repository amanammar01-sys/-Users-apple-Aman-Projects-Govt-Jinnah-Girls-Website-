import facultySeed from "@/data/faculty.json";
import { scheduledEvents as scheduledEventsSeed } from "@/data/events";
import { newsItems as newsSeed } from "@/data/news";
import { campusActivities as activitiesSeed } from "@/data/activities";
import type { FacultyMember } from "@/data/faculty";
import type { ScheduledEvent } from "@/data/events";
import type { NewsItem } from "@/data/news";
import type { CampusActivity } from "@/data/activities";
import { galleryImages as gallerySeed } from "@/data/gallery";
import type { GalleryImage } from "@/data/gallery";
import type { ContactMessage } from "@/data/contact-messages";
import { magazines as magazinesSeed, type Magazine } from "@/data/magazines";
import { readContentFile, writeContentFile } from "./content-storage";

export interface FacultyData {
  teaching: FacultyMember[];
  nonTeaching: FacultyMember[];
}

const FACULTY_FILE = "faculty.json";
const EVENTS_FILE = "scheduled-events.json";
const NEWS_FILE = "news.json";
const ACTIVITIES_FILE = "activities.json";
const GALLERY_FILE = "gallery.json";
const MESSAGES_FILE = "messages.json";
const MAGAZINES_FILE = "magazines.json";

function filterPlaceholderStaff(data: FacultyData): FacultyMember[] {
  return [...data.teaching, ...data.nonTeaching].filter(
    (m) => m.name !== "Name of the Officer"
  );
}

export async function getFacultyContent(): Promise<FacultyData> {
  return readContentFile<FacultyData>(FACULTY_FILE, facultySeed as FacultyData);
}

export async function saveFacultyContent(data: FacultyData) {
  await writeContentFile(FACULTY_FILE, data);
}

export async function getAllStaff(): Promise<FacultyMember[]> {
  const data = await getFacultyContent();
  return filterPlaceholderStaff(data);
}

export async function getScheduledEventsContent(): Promise<ScheduledEvent[]> {
  return readContentFile<ScheduledEvent[]>(EVENTS_FILE, scheduledEventsSeed);
}

export async function saveScheduledEventsContent(data: ScheduledEvent[]) {
  await writeContentFile(EVENTS_FILE, data);
}

export async function getNewsContent(): Promise<NewsItem[]> {
  return readContentFile<NewsItem[]>(NEWS_FILE, newsSeed);
}

export async function saveNewsContent(data: NewsItem[]) {
  await writeContentFile(NEWS_FILE, data);
}

export async function getActivitiesContent(): Promise<CampusActivity[]> {
  return readContentFile<CampusActivity[]>(ACTIVITIES_FILE, activitiesSeed);
}

export async function saveActivitiesContent(data: CampusActivity[]) {
  await writeContentFile(ACTIVITIES_FILE, data);
}

export async function getGalleryContent(): Promise<GalleryImage[]> {
  return readContentFile<GalleryImage[]>(GALLERY_FILE, gallerySeed);
}

export async function saveGalleryContent(data: GalleryImage[]) {
  await writeContentFile(GALLERY_FILE, data);
}

export async function getContactMessages(): Promise<ContactMessage[]> {
  return readContentFile<ContactMessage[]>(MESSAGES_FILE, []);
}

export async function saveContactMessages(data: ContactMessage[]) {
  await writeContentFile(MESSAGES_FILE, data);
}

export async function getMagazinesContent(): Promise<Magazine[]> {
  return readContentFile<Magazine[]>(MAGAZINES_FILE, magazinesSeed);
}

export async function saveMagazinesContent(data: Magazine[]) {
  await writeContentFile(MAGAZINES_FILE, data);
}

export async function appendContactMessage(
  input: Omit<ContactMessage, "id" | "createdAt" | "read">
) {
  const messages = await getContactMessages();
  const entry: ContactMessage = {
    ...input,
    id: `msg-${Date.now()}`,
    createdAt: new Date().toISOString(),
    read: false,
  };
  await saveContactMessages([entry, ...messages]);
  return entry;
}
