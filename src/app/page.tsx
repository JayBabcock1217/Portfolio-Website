
"use client";

import { useState } from "react";
import Link from "next/link";
import { themes } from "@/data/projects";

export default function Home() {
  const [activeTheme, setActiveTheme] = useState(0);
  const theme = themes[activeTheme];

  return (
    <main className="page">
      <header className="site-header">
        <div className="site-title">
          <h1>Jay Babcock</h1>
          <span className="terminal-label">PERSONAL PORTFOLIO</span>
        </div>

        <a
          className="github-link"
          href="https://github.com/JayBabcock1217"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub ↗
        </a>
      </header>

      <div className="intro">
        <span className="prompt">&gt;</span>
        A collection of projects, experiments, and things I've built.
      </div>

      <section className="projects">
        <div className="section-heading">
          <span>PROJECT DIRECTORY</span>
          <span className="project-count">
            {String(
              themes.reduce((total, item) => total + item.projects.length, 0)
            ).padStart(2, "0")}{" "}
            PROJECTS
          </span>
        </div>

        <div className="category-tabs">
          {themes.map((item, index) => (
            <button
              key={item.name}
              className={`category-tab ${
                activeTheme === index ? "active" : ""
              }`}
              onClick={() => setActiveTheme(index)}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              {item.name}
            </button>
          ))}
        </div>

        <div className="active-category">
          <div className="active-category-heading">
            <h2>{theme.name}</h2>
            <p>{theme.description}</p>
          </div>

          <span className="category-count">
            {String(theme.projects.length).padStart(2, "0")} PROJECTS
          </span>
        </div>

        {theme.projects.length > 0 ? (
          <div className="project-grid">
            {theme.projects.map((project, index) => (
              <Link
                href={`/projects/${project.slug}/`}
                className="project-card"
                key={project.slug}
              >
                <div className="project-card-top">
                  <span className="project-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="project-arrow">↗</span>
                </div>

                <div className="project-card-content">
                  <span className="project-status">{project.status}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>

                <div className="project-tags">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="empty-category">
            <span className="prompt">&gt;</span>
            No projects listed yet.
          </div>
        )}
      </section>

      <footer className="site-footer">
        <span>JAY BABCOCK</span>
        <span>BUILT WITH CURIOSITY.</span>
      </footer>
    </main>
  );
}
