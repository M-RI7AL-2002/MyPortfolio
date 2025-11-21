export type Certification = {
  title: string;
  issuer: string;
  issueDate: string;        // "YYYY-MM"
  expiryDate?: string;      // "YYYY-MM"
  credentialId?: string;
  credentialUrl?: string;
  skills?: string[];
  tags?: string[];
  image?: string;           // "/certs/aws-saa.webp"
  imageAlt?: string;        // "Badge AWS SAA"
  status?: "active" | "expired" | "revoked";
};

export const certifications: Certification[] = [
  {
    title: "Heartist Certification",
    issuer: "ALL - Accor Live Limitless",
    issueDate: "2023-08", 
 
    skills: ["Customer Service", "Hospitality", "Professional Conduct"],
    tags: ["Hospitality", "Professional Development", "Training"],
    image: "/certificats/attesHeartist.jpg",
    imageAlt: "ALL Accor Heartist Certification Badge",
    status: "active"
  },
 
  {
  title: "C Intermediate",
  issuer: "SoloLearn",
  issueDate: "2023-07",
  credentialUrl: "https://www.sololearn.com/certificates/CC-IESYQMEB",
  skills: ["C Programming", "Intermediate Programming", "Memory Management", "Pointers", "Data Structures"],
  tags: ["Programming", "C Language", "Intermediate"],
  image: "/certificats/cert2.png",
  imageAlt: "SoloLearn C Intermediate Certificate",
  status: "active"
},
{
  title: "JavaScript Intermediate",
  issuer: "SoloLearn",
  issueDate: "2023-07", 
  credentialUrl: "https://www.sololearn.com/certificates/CC-8B3CBSPE",
  skills: ["JavaScript", "Intermediate Programming", "DOM Manipulation", "ES6 Features", "Async Programming"],
  tags: ["Programming", "JavaScript", "Web Development", "Intermediate"],
  image: "/certificats/cert3.png", 
  imageAlt: "SoloLearn JavaScript Intermediate Certificate",
  status: "active"
},
{
  title: "Python Developer",
  issuer: "SoloLearn",
  issueDate: "2023-07", 
  credentialUrl: "https://www.sololearn.com/certificates/CC-2C5GZ0VR",
  skills: ["Python", "Object-Oriented Programming", "Data Structures", "Algorithms", "File Handling", "Error Handling"],
  tags: ["Programming", "Python", "Developer", "Backend"],
  image: "/certificats/cert4.png",
  imageAlt: "SoloLearn Python Developer Certificate",
  status: "active"
},
{
  title: "Coding for Data",
  issuer: "SoloLearn",
  issueDate: "2025-11", 
  credentialUrl: "https://www.sololearn.com/certificates/CC-XJNFX8UM",
  skills: ["Data Analysis", "Data Processing", "Python", "Sql", "Data Visualization", "Data Cleaning"],
  tags: ["Data Science", "Python", "Data Analysis", "Programming"],
  image: "/certificats/cert5.jpg",
  imageAlt: "SoloLearn Coding for Data Certificate",
  status: "active"
},
{
  title: "Python",
  issuer: "Kaggle",
  issueDate: "2025-1", 
  credentialUrl: "https://www.kaggle.com/learn/certification/mohamedrihal/python",
  skills: ["Python", "Data Science", "Kaggle Environment", "Data Analysis", "Programming Fundamentals"],
  tags: ["Python", "Data Science", "Kaggle", "Programming"],
  image: "/certificats/Mohamed RIHAL - Python.png", 
  imageAlt: "Kaggle Python Certificate",
  status: "active"
}
];