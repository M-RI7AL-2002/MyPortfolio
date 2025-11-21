export type Project = {
  title: string;
  period?: number;
  tags: string[];
  summary: string;
  link?: string;
  repo?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    title: "Modèle de détection des émotions des étudiants",
    period: 2024,
    tags: ["Python", "CNN", "Deep Learning", "Computer Vision", "OpenCV", "TensorFlow/PyTorch"],
    summary: "Conception et entraînement d’un modèle CNN pour détecter les émotions sur des images faciales en temps réel.",
  },
  {
    title: "Système de gestion des sentiments étudiants",
    period: 2023,
    tags: ["Python", "NLP", "Machine Learning", "Sentiment Analysis", "scikit-learn", "Django"],
    summary: "Développement d’une plateforme et d’un modèle d’analyse de sentiments pour suivre les retours étudiants et améliorer les interventions pédagogiques.",
  },
  {
    title: "Plateforme de gestion des documents administratifs",
    period: 2023,
    tags: ["PHP", "MySQL", "JavaScript", "HTML", "CSS", "Web Development"],
    summary: "Centralisation et gestion des documents administratifs internes pour une institution éducative.",
  },
  {
    title: "Site web pour laboratoire de recherche",
    period: 2023,
    tags: ["PHP", "Laravel", "HTML", "CSS", "Responsive Design", "Web Development"],
    summary: "Conception, réalisation et développement d’un site web pour un laboratoire de recherche doctoral. Mise en place d’une architecture robuste et responsive.",
  },
  {
    title: "Application de gestion d’un cinéma",
    period: 2023,
    tags: ["Java", "Spring Boot", "ThymeLeaf", "MySQL", "Full Stack"],
    summary: "Développement d’une application pour la gestion des films, séances et tableaux de bord pour les gestionnaires et le personnel administratif.",
  },
  {
    title: "Club IA – Leadership et Ateliers",
    period: 2025,
    tags: ["Leadership", "Education", "Workshops", "Artificial Intelligence", "Mentoring"],
    summary: "Organisation et animation d’ateliers pratiques sur l’intelligence artificielle pour les membres du club. Tutorat et accompagnement de projets étudiants.",
  }
];
