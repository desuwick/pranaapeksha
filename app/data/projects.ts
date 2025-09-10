export type Project = {
  id: number
  title: string
  slug: string
  description: string
  image: string
  status: "Completed" | "Ongoing"
  date: string
  details: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Coconuts Donation",
    slug: "coconuts-donation",
    description: "Distributed 200 coconuts to cancer patients.",
    image: "/projects/coconuts.jpg",
    status: "Completed",
    date: "Aug 2024",
    details:
      "We donated 200 coconuts to patients at Maharagama Apeksha Hospital, ensuring they receive vital nutrition support.",
  },
  {
    id: 2,
    title: "Pomegranates Drive",
    slug: "pomegranates-drive",
    description: "Donated 150 pomegranates for patient nutrition.",
    image: "/projects/pomegranates.jpg",
    status: "Completed",
    date: "Sep 2024",
    details:
      "Our foundation provided 150 fresh pomegranates to patients, supporting recovery and boosting immunity.",
  },
  {
    id: 3,
    title: "Essential Medicines Support",
    slug: "essential-medicines",
    description: "Provided medicines to 80 patients under treatment.",
    image: "/projects/medicines.jpg",
    status: "Ongoing",
    date: "Sep 2024",
    details:
      "We are currently distributing essential medicines to 80 patients. This ongoing project is critical to their treatment process.",
  },
]
