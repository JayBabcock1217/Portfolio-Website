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

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  const theme = themes.find((theme) =>
    theme.projects.some((project) => project.slug === slug)
  );

  const project = theme?.projects.find(
    (project) => project.slug === slug
  );

  if (!project || !theme) {
    notFound();
  }

  const isLocalAI = project.slug === "local-ai-workbench";
  const isITCoursework = project.slug === "it-coursework";

  return (
    <main className="project-detail-page">
      <div className="project-detail-container">
        <div className="project-breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <span>{theme.name}</span>
          <span>/</span>
          <span>{project.title}</span>
        </div>

        <header className="project-header">
          <p className="project-category">{theme.name}</p>

          <h1>{project.title}</h1>

          <p className="project-description">
            {project.description}
          </p>

          <p className="project-status">
            Status: {project.status}
          </p>
        </header>

        {isLocalAI && (
          <>
            <section className="project-section">
              <h2>Overview</h2>
              <p>
                This project focuses on building a local AI environment
                capable of running large language models without relying
                on cloud-based services. The system uses dedicated GPU
                hardware and custom software to manage and serve models
                locally.
              </p>
            </section>

            <section className="project-section">
              <h2>Hardware</h2>
              <ul>
                <li>AMD Radeon RX 7900 XT with 20 GB VRAM</li>
                <li>NVIDIA Tesla V100 with 32 GB HBM2</li>
                <li>AMD Ryzen 7 7800X3D</li>
                <li>Custom multi-GPU workstation</li>
              </ul>
            </section>

            <section className="project-section">
              <h2>Software & Technologies</h2>
              <ul>
                <li>llama.cpp for local model inference</li>
                <li>CUDA for NVIDIA GPU acceleration</li>
                <li>Vulkan for GPU acceleration across supported hardware</li>
                <li>GGUF models and quantization formats</li>
                <li>OpenCode for local coding-agent integration</li>
                <li>Python-based model management and API gateway</li>
              </ul>
            </section>

            <section className="project-section">
              <h2>System Architecture</h2>
              <p>
                The environment is designed around assigning models to
                individual GPUs rather than combining the available
                hardware into a shared workload. A custom model manager
                provides a central API gateway and starts individual
                model servers on separate ports.
              </p>
            </section>

            <section className="project-section">
              <h2>Development Goals</h2>
              <ul>
                <li>Run large language models entirely locally.</li>
                <li>Use each GPU independently for different models.</li>
                <li>Integrate local models with coding tools.</li>
                <li>Build a reliable system for managing multiple models.</li>
                <li>Experiment with different inference backends and formats.</li>
              </ul>
            </section>
          </>
        )}

        {isITCoursework && (
          <>
            <section className="project-section">
              <h2>Overview</h2>
              <p>
                A collection of hands-on IT coursework and labs covering
                systems administration, networking, cloud computing, and
                Linux. The work includes building and managing virtualized
                infrastructure, configuring physical networking equipment,
                and completing technical training exercises.
              </p>
            </section>

            <section className="project-section">
              <h2>Windows Server & Systems Administration</h2>

              <h3>Virtualized Windows Server Infrastructure</h3>

              <p>
                A comprehensive virtualized IT environment built as part
                of a systems administration course. The environment
                involved setting up and managing multiple virtual
                machines to simulate the infrastructure used in an
                organization.
              </p>

              <p>Areas covered included:</p>

              <ul>
                <li>Windows Server installation and administration</li>
                <li>Active Directory and domain management</li>
                <li>Group Policy configuration and administration</li>
                <li>Network configuration and management</li>
                <li>Email services</li>
                <li>SharePoint Server</li>
                <li>Managing and integrating multiple virtual machines</li>
              </ul>
            </section>

            <section className="project-section">
              <h2>Networking & Network Infrastructure</h2>

              <p>
                A hands-on networking course focused on configuring
                network infrastructure, connecting client devices, and
                building a functional network using physical hardware.
              </p>

              <p>Areas covered included:</p>

              <ul>
                <li>Cisco router configuration</li>
                <li>Cisco switch configuration</li>
                <li>Client device network configuration</li>
                <li>IP addressing and subnetting</li>
                <li>Network setup and troubleshooting</li>
                <li>Connecting and configuring physical network hardware</li>
                <li>Building a small functional network using actual equipment</li>
              </ul>
            </section>

            <section className="project-section">
              <h2>Cloud Computing & AWS</h2>

              <p>
                Completed training courses and hands-on learning exercises
                through Amazon's AWS training resources. This work
                introduced cloud computing concepts and provided
                experience working with AWS services.
              </p>

              <p>Training and exercises include:</p>

              <ul>
                <li>AWS training courses and learning modules</li>
                <li>Hands-on cloud service exercises</li>
                <li>Cloud storage and infrastructure concepts</li>
                <li>Working with AWS services such as S3 and EC2</li>
              </ul>
            </section>

            <section className="project-section">
              <h2>Linux Administration</h2>

              <p>
                Smaller Linux command-line exercises and labs focused on
                learning common administration and system management
                commands.
              </p>

              <ul>
                <li>Working with Linux command-line utilities</li>
                <li>Filtering and processing command output</li>
                <li>Working with files, directories, and system information</li>
                <li>Practicing common administration tasks</li>
              </ul>
            </section>

            <section className="project-section">
              <h2>Cybersecurity & Operating Systems Security</h2>

              <p>
                Coursework covering operating system security and
                administrative security practices, including Windows
                security configuration and system administration tasks.
              </p>

              <ul>
                <li>Windows security administration</li>
                <li>Group Policy and security configuration</li>
                <li>Network security concepts</li>
                <li>System administration security practices</li>
              </ul>
            </section>
          </>
        )}

        {!isLocalAI && !isITCoursework && (
          <section className="project-section">
            <h2>Overview</h2>
            <p>{project.description}</p>
            <p className="placeholder-text">
              More project details coming soon.
            </p>
          </section>
        )}

        <section className="project-section">
          <h2>Technologies</h2>

          <div className="project-technologies">
            {project.technologies.map((technology) => (
              <span key={technology} className="technology-tag">
                {technology}
              </span>
            ))}
          </div>
        </section>

        <div className="project-footer">
          <Link href="/" className="back-link">
            ← Back to Projects
          </Link>
        </div>
      </div>
    </main>
  );
}