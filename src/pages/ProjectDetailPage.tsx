import React, { useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import { ProjectDetail } from "../components/work/ProjectDetail";
import { PROJECTS } from "../components/work/projects";

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const project = PROJECTS.find(
    (p) =>
      p.slug === slug ||
      (slug === "reconcraft" && p.slug === "reconpilot") ||
      (slug === "skt" && p.slug === "shree-krishna-transport")
  );

  useEffect(() => {
    if (project) {
      document.title = `${project.title} | Code by Parth`;
    }
  }, [project]);

  if (!slug || !project) {
    return <Navigate to="/work" replace />;
  }

  return <ProjectDetail slug={project.slug} />;
};

export default ProjectDetailPage;
