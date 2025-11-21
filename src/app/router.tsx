import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";
import Home from "@/pages/Home";
import Project from "@/pages/Project";
import Exprience from "@/pages/Exprience";
import EducationPage from "@/pages/Education";

import Contact from "@/pages/Contact";

import CertificationsPage from "@/pages/certificationPage";
import Galerie from "@/pages/Galerie";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "projects", element: <Project /> },
      { path: "experience", element: <Exprience /> },
      { path: "education", element: <EducationPage /> },
      { path: "certifications", element: <CertificationsPage/>},
      { path: "contact", element: <Contact /> },
      { path: "galerie", element: <Galerie /> }
    ],
  },
]);