export type Project = {
  title: string; period?: number; tags: string[];
  summary: string; link?: string; repo?: string; image?: string;
};

export const projects: Project[] = [
  {
    title: "Modèle de détection des émotions des étudiants",
    period: 2024,
    tags: ["Python", "CNN", "Deep Learning", "Computer Vision", "TensorFlow/PyTorch"],
    summary: "Implemented a CNN model for classifying student emotions from images during classes. Aimed at improving the university experience through emotion analysis.",
   // Placeholder - add your real repo
  },
  {
    title: "Système de gestion des sentiments étudiants",
    period: 2023,
    tags: ["Python", "NLP", "Machine Learning", "Sentiment Analysis"],
    summary: "Designed and developed a sentiment analysis model to track and understand student feedback. Practical application for improving service quality and educational interventions.",
   // Placeholder - add your real repo
  },
  {
    title: "Plateforme de gestion des documents administratifs",
    period: 2023,
    tags: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
    summary: "Developed an internal platform to centralize and manage administrative documents for an educational institution.",
    // Placeholder - add your real repo
  },
  {
    title: "Site web pour laboratoire de recherche",
    period: 2023,
    tags: ["Web Development", "Responsive Design", "PHP", "JavaScript"],
    summary: "Conception, realization and development of a website for a doctoral research laboratory. Implementation of a robust and responsive architecture.",
  // Placeholder - add your real repo
  },
  {
    title: "Club IA – Leadership et Ateliers",
    period: 2025,
    tags: ["Leadership", "Education", "Workshops", "AI"],
    summary: "Organized and led practical workshops on artificial intelligence for club members. Tutored and guided student projects, disseminating best development practices."
    // No repo link as this is a leadership/educational activity
  }
];