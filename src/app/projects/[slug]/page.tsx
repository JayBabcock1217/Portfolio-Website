
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
              <p>
                Rather than relying on cloud-based AI services, the system
                uses locally hosted models and exposes them through an API
                that other applications can connect to.
              </p>
            </section>

            <section className="detail-section">
              <h3>02 / HARDWARE</h3>
              <p>
                The system uses two dedicated GPUs, with each GPU assigned
                its own model-serving workload.
              </p>

              <ul>
                <li>
                  AMD Radeon RX 7900 XT — 20 GB GDDR6
                </li>
                <li>
                  NVIDIA Tesla V100 — 32 GB HBM2
                </li>
                <li>
                  AMD Ryzen 7 7800X3D
                </li>
              </ul>

              <p>
                The goal is to evaluate the performance and compatibility
                of each GPU independently rather than combining their
                memory or relying on shared GPU offloading.
              </p>
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

              <p>
                llama.cpp is used to host and run local language models.
                Separate builds and backends are used to support the
                different GPU architectures.
              </p>

              <p>
                A custom Python application, LM Manager, manages model
                configurations and provides an API gateway for connecting
                applications to the locally hosted models.
              </p>
            </section>

            <section className="detail-section">
              <h3>04 / SYSTEM ARCHITECTURE</h3>

              <p>
                The system is organized into three main parts:
              </p>

              <ul>
                <li>
                  <strong>Model hosting:</strong> Individual llama.cpp
                  servers run models on their assigned GPUs.
                </li>
                <li>
                  <strong>Model management:</strong> LM Manager handles
                  configurations and controls which model is running.
                </li>
                <li>
                  <strong>Application integration:</strong> OpenCode
                  connects through an OpenAI-compatible API endpoint.
                </li>
              </ul>
            </section>

            <section className="detail-section">
              <h3>05 / DEVELOPMENT GOALS</h3>

              <ul>
                <li>
                  Improve compatibility across different GPU backends.
                </li>
                <li>
                  Compare local model performance between GPUs.
                </li>
                <li>
                  Support different model formats and quantizations.
                </li>
                <li>
                  Improve model management and automated launching.
                </li>
                <li>
                  Integrate local models into development workflows.
                </li>
              </ul>
            </section>

            <section className="detail-section">
              <h3>06 / CURRENT STATUS</h3>
              <p>
                The core environment is operational and development is
                ongoing. Current work focuses on GPU compatibility,
                model support, and improving the overall model-serving
                workflow.
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
