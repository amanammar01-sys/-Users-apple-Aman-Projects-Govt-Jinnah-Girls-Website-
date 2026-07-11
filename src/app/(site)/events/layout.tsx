import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events & Activities Gallery",
  description:
    "Photo gallery of campus events, cultural celebrations, sports, and national day observances at GJGCW Mozang.",
};

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
