
import Link from "next/link";
import { notFound } from "next/navigation";
import { themes } from "@/data/projects";

export function generateStaticParams() {
  return themes.flatMap((theme) =>
    theme.projects.map((project) => ({
      slug: project.slug,
    }))
  );
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const theme = themes.find((item) =>
    item.projects.some((project) => project.slug === slug)
  );

  const project = theme?.projects.find((item) => item.slug === slug);

  if (!project || !theme) {
    notFound();
  }

  const isLocalAI = project.slug === "local-ai-workbench";
  const isITCoursework = project.slug === "it-coursework";

  return (
    <main className="page project-detail-page">
      <header className="site-header">
        <div className="site-title">
          <Link href="/">
            <h1>Jay Babcock</h1>
          </Link>
          <span className="terminal-label">PERSONAL PORTFOLIO</span>
        </div>

        <Link href="/" className="github-link">
          ← Project Directory
        </Link>
      </header>

      <div className="detail-breadcrumb">
        <Link href="/">PROJECTS</Link>
        <span>/</span>
        <span>{theme.name.toUpperCase()}</span>
      </div>

      <section className="project-detail">
        <div className="detail-label">
          PROJECT / {project.status.toUpperCase()}
        </div>

        <h2>{project.title}</h2>

        <p className="detail-description">{project.description}</p>

        <div className="detail-divider" />

        {isLocalAI ? (
          <>
            <section className="detail-section">
              <h3>01 / OVERVIEW</h3>
              <p>
                Local AI Workbench is a custom environment for running and
                managing large language models locally. The goal is to build
                a flexible setup that can run different models, take advantage
                of dedicated GPU hardware, and integrate with AI-powered
                development tools.
              </p>
            </section>

            <section className="detail-section">
              <h3>02 / HARDWARE</h3>
              <ul>
                <li>AMD Radeon RX 7900 XT — 20 GB GDDR6</li>
                <li>NVIDIA Tesla V100 — 32 GB HBM2</li>
                <li>AMD Ryzen 7 7800X3D</li>
              </ul>
            </section>

            <section className="detail-section">
              <h3>03 / SOFTWARE & TECHNOLOGIES</h3>
              <div className="project-tags">
                {[
                  "Python",
                  "C++",
                  "llama.cpp",
                  "CUDA",
                  "Vulkan",
                  "GGUF",
                  "OpenCode",
                  "Linux",
                ].map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </section>

            <section className="detail-section">
              <h3>04 / SYSTEM ARCHITECTURE</h3>
              <p>
                The system uses dedicated model servers, a custom Python
                management application, and an API gateway to connect
                development tools to locally hosted models.
              </p>
            </section>

            <section className="detail-section">
              <h3>05 / DEVELOPMENT GOALS</h3>
              <ul>
                <li>Improve GPU backend compatibility.</li>
                <li>Compare model performance between GPUs.</li>
                <li>Support additional model formats and quantizations.</li>
                <li>Improve automated model management.</li>
              </ul>
            </section>
          </>
        ) : isITCoursework ? (
          <>
            <section className="detail-section">
              <h3>01 / OVERVIEW</h3>
              <p>
                This collection contains technical projects, labs, and
                assignments completed as part of my IT coursework.
                It covers a range of topics involving operating systems,
                networking, cloud infrastructure, cybersecurity, and
                system administration.
              </p>
            </section>

            <section className="detail-section">
              <h3>02 / TECHNOLOGIES & TOOLS</h3>
              <div className="project-tags">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </section>

            <section className="detail-section">
              <h3>03 / LINUX ADMINISTRATION</h3>
              <p className="placeholder-text">
                [Add Linux projects and labs here.]
              </p>
            </section>

            <section className="detail-section">
              <h3>04 / CLOUD COMPUTING & AWS</h3>
              <p className="placeholder-text">
                [Add AWS projects and labs here.]
              </p>
            </section>

            <section className="detail-section">
              <h3>05 / WINDOWS SERVER & SYSTEM ADMINISTRATION</h3>
              <p className="placeholder-text">
                [Add Windows Server, Active Directory, and Group Policy
                projects here.]
              </p>
            </section>

            <section className="detail-section">
              <h3>06 / NETWORKING</h3>
              <p className="placeholder-text">
                [Add networking projects and labs here.]
              </p>
            </section>

            <section className="detail-section">
              <h3>07 / CYBERSECURITY</h3>
              <p className="placeholder-text">
                [Add security assignments and practical exercises here.]
              </p>
            </section>

            <section className="detail-section">
              <h3>08 / OTHER PROJECTS</h3>
              <p className="placeholder-text">
                [Add any other IT coursework here.]
              </p>
            </section>
          </>
        ) : (
          <>
            <section className="detail-section">
              <h3>OVERVIEW</h3>
              <p>{project.description}</p>
            </section>

            <section className="detail-section">
              <h3>TECHNOLOGIES & TOOLS</h3>
              <div className="project-tags">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </section>
          </>
        )}

        <div className="detail-back">
          <Link href="/">← Back to all projects</Link>
        </div>
      </section>

      <footer className="site-footer">
        <span>JAY BABCOCK</span>
        <span>BUILT WITH CURIOSITY.</span>
      </footer>
    </main>
  );
}
