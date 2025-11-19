export type Education = {
  school: string; degree: string; field?: string;
  location?: string; start: string; end?: string;
  gpa?: string; courses?: string[]; highlights?: string[];
};

export const education: Education[] = [
  {
    school: "Ecole Normale Supérieure Marrakesh",
    degree: "Master",
    field: "Technologies Émergentes",
    location: "Marrakech, Morocco",
    start: "2024-09",
    end: "2026-07", 
    courses: ["Artificial Intelligence", "Emerging Technologies"],
    highlights: ["Focus on AI and cutting-edge technologies"]
  },
  {
    school: "Ecole Normale Supérieure Marrakesh", 
    degree: "Licence d'éducation",
    field: "Mathematique et informatique",
    location: "Marrakech, Morocco",
    start: "2021-09",
    end: "2024-07",
    highlights: ["Mathematics and Computer sciences  program"]
  },
  {
    school: "Faculté des Sciences Semlalia",
    degree: "Licence d'études fondamentales",
    field: "Sciences de la Matière Physique",
    location: "Marrakech, Morocco", 
    start: "2020-09",
    end: "2021-07",
    highlights: ["Fundamental studies in physical sciences"]
  }
];