
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
      <Link href="/" className="project-back-link">
        ← Back to Projects
      </Link>

      <header className="project-header">
        <p className="project-eyebrow">{theme.name}</p>

        <h1>{project.title}</h1>

        <p className="project-description">{project.description}</p>

        <div className="project-technologies">
          {project.technologies.map((technology) => (
            <span className="technology-tag" key={technology}>
              {technology}
            </span>
          ))}
        </div>

        <p className="project-status">
          Status: {project.status}
        </p>
      </header>

      {/* LOCAL AI WORKBENCH */}

      {isLocalAI && (
        <>
          <section className="project-section">
            <p className="project-eyebrow">SOFTWARE & AI PROJECT</p>
            <h2>Overview</h2>
            <p>
              A custom local AI environment designed to run and manage
              large language models using dedicated GPU hardware. The
              goal is to create a flexible system for hosting models
              locally and connecting them to coding agents and other
              applications.
            </p>
          </section>

          <section className="project-section">
            <h2>Hardware</h2>

            <div className="detail-grid">
              <div className="detail-card">
                <h4>AMD Radeon RX 7900 XT</h4>
                <p>
                  20 GB of VRAM used for running local language models
                  through the ROCm and Vulkan software stacks.
                </p>
              </div>

              <div className="detail-card">
                <h4>NVIDIA Tesla V100</h4>
                <p>
                  32 GB of HBM2 memory used for CUDA-based model
                  inference and testing.
                </p>
              </div>

              <div className="detail-card">
                <h4>System</h4>
                <p>
                  AMD Ryzen 7 7800X3D running CachyOS Linux.
                </p>
              </div>
            </div>
          </section>

          <section className="project-section">
            <h2>Software & Technologies</h2>

            <div className="detail-grid">
              <div className="detail-card">
                <h4>llama.cpp</h4>
                <p>
                  Building and configuring separate inference
                  environments for AMD and NVIDIA GPUs.
                </p>
              </div>

              <div className="detail-card">
                <h4>CUDA</h4>
                <p>
                  Configuring a dedicated CUDA 12.9 build for the
                  Tesla V100 GPU.
                </p>
              </div>

              <div className="detail-card">
                <h4>OpenCode</h4>
                <p>
                  Connecting locally hosted models to an AI-powered
                  coding environment.
                </p>
              </div>

              <div className="detail-card">
                <h4>Python</h4>
                <p>
                  Developing a management application to organize
                  model configurations and local inference servers.
                </p>
              </div>
            </div>
          </section>

          <section className="project-section">
            <h2>System Architecture</h2>
            <p>
              The system is designed around running models independently
              on each GPU rather than combining the hardware into a
              shared inference setup. A management application provides
              a central way to configure and launch model servers, while
              a gateway makes those models available to compatible
              applications.
            </p>

            <ul>
              <li>Separate model servers for each GPU</li>
              <li>Dedicated inference configurations</li>
              <li>Centralized model and server management</li>
              <li>OpenAI-compatible API access through a local gateway</li>
              <li>Integration with OpenCode and other applications</li>
            </ul>
          </section>

          <section className="project-section">
            <h2>Development Goals</h2>
            <ul>
              <li>
                Improve model performance across different GPU
                architectures.
              </li>
              <li>
                Support a wider range of quantization formats and
                model architectures.
              </li>
              <li>
                Simplify starting, stopping, and managing local
                inference servers.
              </li>
              <li>
                Build a reliable local AI environment for development
                and experimentation.
              </li>
            </ul>
          </section>
        </>
      )}

      {/* IT COURSEWORK & LABS */}

      {isITCoursework && (
        <>
          <section className="project-section">
            <p className="project-eyebrow">IT PROJECTS & EXPERIENCE</p>
            <h2>Overview</h2>
            <p>
              My IT coursework has involved working with both virtualized
              infrastructure and physical networking equipment. These
              experiences provided hands-on practice configuring servers,
              managing network infrastructure, and working with the systems
              commonly used in business IT environments.
            </p>
          </section>

          <section className="project-section portfolio-feature">
            <div className="feature-heading">
              <span className="project-eyebrow">
                01 / SYSTEMS ADMINISTRATION
              </span>
              <h2>Virtualized Windows Server Infrastructure</h2>
              <p>
                Building and managing a multi-machine Windows Server
                environment as part of a systems administration course.
              </p>
            </div>

            <div className="feature-content">
              <h3>Project Overview</h3>
              <p>
                This project involved setting up a collection of virtual
                machines to simulate the infrastructure found in an
                organizational IT environment. Throughout the course,
                different servers and services were installed, configured,
                and administered to gain experience managing a Windows-based
                network.
              </p>

              <h3>Infrastructure & Services</h3>
              <div className="detail-grid">
                <div className="detail-card">
                  <h4>Active Directory</h4>
                  <p>
                    Working with domain services, user accounts, and
                    centralized directory management.
                  </p>
                </div>

                <div className="detail-card">
                  <h4>Group Policy</h4>
                  <p>
                    Configuring and managing policies to control system
                    settings and administrative behavior.
                  </p>
                </div>

                <div className="detail-card">
                  <h4>Networking</h4>
                  <p>
                    Configuring network settings and working with the
                    networking requirements of the server environment.
                  </p>
                </div>

                <div className="detail-card">
                  <h4>Email Services</h4>
                  <p>
                    Working with server-based email infrastructure and
                    its administration.
                  </p>
                </div>

                <div className="detail-card">
                  <h4>SharePoint Server</h4>
                  <p>
                    Setting up and working with SharePoint Server 2019
                    in a Windows Server environment.
                  </p>
                </div>

                <div className="detail-card">
                  <h4>Virtual Machines</h4>
                  <p>
                    Installing, configuring, and managing multiple
                    virtual machines for different infrastructure roles.
                  </p>
                </div>
              </div>

              <h3>Skills Developed</h3>
              <ul>
                <li>Windows Server installation and administration</li>
                <li>Managing virtualized server environments</li>
                <li>Active Directory and Group Policy administration</li>
                <li>Configuring common organizational IT services</li>
                <li>Working with server infrastructure and networking</li>
              </ul>
            </div>
          </section>

          <section className="project-section portfolio-feature">
            <div className="feature-heading">
              <span className="project-eyebrow">02 / NETWORKING</span>
              <h2>Cisco Network Infrastructure</h2>
              <p>
                Progressing from network configuration exercises to
                building a small network using physical Cisco equipment.
              </p>
            </div>

            <div className="feature-content">
              <h3>Project Overview</h3>
              <p>
                A networking course focused on understanding how devices
                communicate and how network infrastructure is configured.
                The coursework began with learning networking fundamentals
                and configuring individual devices, then progressed to
                building a small functional network using actual hardware.
              </p>

              <h3>Network Configuration</h3>
              <div className="detail-grid">
                <div className="detail-card">
                  <h4>Routers</h4>
                  <p>
                    Configuring Cisco routers and working with the
                    routing functions used to connect networks.
                  </p>
                </div>

                <div className="detail-card">
                  <h4>Switches</h4>
                  <p>
                    Configuring Cisco switches and connecting devices
                    within a local network.
                  </p>
                </div>

                <div className="detail-card">
                  <h4>IP Addressing</h4>
                  <p>
                    Working with IP addresses, network addressing,
                    and subnetting.
                  </p>
                </div>

                <div className="detail-card">
                  <h4>Client Configuration</h4>
                  <p>
                    Configuring client devices to communicate properly
                    across the network.
                  </p>
                </div>
              </div>

              <h3>Physical Network Build</h3>
              <p>
                The course concluded with a practical exercise using
                physical networking hardware. This involved setting up
                a small network with Cisco equipment and configuring
                the connected devices to establish network connectivity.
              </p>

              <h3>Skills Developed</h3>
              <ul>
                <li>Cisco router and switch configuration</li>
                <li>IP addressing and subnetting</li>
                <li>Client network configuration</li>
                <li>Understanding network infrastructure</li>
                <li>Building and testing a physical network</li>
              </ul>
            </div>
          </section>

          <section className="project-section portfolio-feature">
            <div className="feature-heading">
              <span className="project-eyebrow">
                03 / ADDITIONAL COURSEWORK
              </span>
              <h2>IT Training & Technical Labs</h2>
              <p>
                Additional coursework and exercises covering cloud
                computing, Linux administration, and operating system security.
              </p>
            </div>

            <div className="feature-content">
              <div className="coursework-entry">
                <h3>AWS Training & Labs</h3>
                <p>
                  Completed training courses and hands-on learning
                  exercises through Amazon's AWS training resources.
                  Topics included cloud computing concepts and working
                  with services such as Amazon S3 and EC2.
                </p>
                <div className="project-technologies">
                  <span className="technology-tag">AWS</span>
                  <span className="technology-tag">Amazon S3</span>
                  <span className="technology-tag">Amazon EC2</span>
                  <span className="technology-tag">Cloud Computing</span>
                </div>
              </div>

              <div className="coursework-entry">
                <h3>Linux Administration</h3>
                <p>
                  Completed command-line exercises and smaller
                  administration labs involving Linux utilities,
                  filtering command output, file management, and
                  working with system information.
                </p>
                <div className="project-technologies">
                  <span className="technology-tag">Linux</span>
                  <span className="technology-tag">Bash</span>
                  <span className="technology-tag">Command Line</span>
                </div>
              </div>

              <div className="coursework-entry">
                <h3>Operating Systems Security</h3>
                <p>
                  Coursework covering operating system security,
                  Windows administration, Group Policy, network
                  security, and system security practices.
                </p>
                <div className="project-technologies">
                  <span className="technology-tag">Windows Security</span>
                  <span className="technology-tag">Group Policy</span>
                  <span className="technology-tag">Network Security</span>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* GENERAL PROJECT PAGE */}

      {!isLocalAI && !isITCoursework && (
        <section className="project-section">
          <h2>Project Overview</h2>
          <p>{project.description}</p>

          <h2>Technologies Used</h2>
          <div className="project-technologies">
            {project.technologies.map((technology) => (
              <span className="technology-tag" key={technology}>
                {technology}
              </span>
            ))}
          </div>
        </section>
      )}

      <footer className="project-footer">
        <Link href="/">← Return to Project Directory</Link>
      </footer>
    </main>
  );
}
