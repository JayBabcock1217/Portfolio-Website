
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
    <main className="page project-detail-page">
      <nav className="detail-breadcrumb">
        <Link href="/">← Back to Projects</Link>
        <span>/</span>
        <span>{theme.name}</span>
      </nav>

      <header className="project-detail">
        <p className="detail-label">{theme.name.toUpperCase()}</p>

        <h2>{project.title}</h2>

        <p className="detail-description">{project.description}</p>

        <div className="project-tags">
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>

        <p className="project-status">Status: {project.status}</p>
      </header>

      <div className="detail-divider" />

      {/* LOCAL AI WORKBENCH */}

      {isLocalAI && (
        <>
          <section className="detail-section">
            <h3>OVERVIEW</h3>
            <p>
              A custom local AI environment designed to run and manage
              large language models using dedicated GPU hardware. The
              goal is to create a flexible system for hosting models
              locally and connecting them to coding agents and other
              applications.
            </p>
          </section>

          <section className="detail-section">
            <h3>HARDWARE</h3>
            <p>
              <strong>AMD Radeon RX 7900 XT</strong>
              <br />
              20 GB of VRAM used for running local language models
              through the ROCm and Vulkan software stacks.
            </p>
            <p>
              <strong>NVIDIA Tesla V100</strong>
              <br />
              32 GB of HBM2 memory used for CUDA-based model inference
              and testing.
            </p>
            <p>
              <strong>System</strong>
              <br />
              AMD Ryzen 7 7800X3D running CachyOS Linux.
            </p>
          </section>

          <section className="detail-section">
            <h3>SOFTWARE & TECHNOLOGIES</h3>
            <p>
              <strong>llama.cpp</strong>
              <br />
              Building and configuring separate inference environments
              for AMD and NVIDIA GPUs.
            </p>
            <p>
              <strong>CUDA</strong>
              <br />
              Configuring a dedicated CUDA 12.9 build for the Tesla
              V100 GPU.
            </p>
            <p>
              <strong>OpenCode</strong>
              <br />
              Connecting locally hosted models to an AI-powered coding
              environment.
            </p>
            <p>
              <strong>Python</strong>
              <br />
              Developing a management application to organize model
              configurations and local inference servers.
            </p>
          </section>

          <section className="detail-section">
            <h3>SYSTEM ARCHITECTURE</h3>
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

          <section className="detail-section">
            <h3>DEVELOPMENT GOALS</h3>
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
          <section className="detail-section">
            <h3>IT PROJECTS & EXPERIENCE / OVERVIEW</h3>
            <p>
              My IT coursework has involved working with both virtualized
              infrastructure and physical networking equipment. These
              experiences provided hands-on practice configuring servers,
              managing network infrastructure, and working with the systems
              commonly used in business IT environments.
            </p>
          </section>

          <section className="detail-section">
            <h3>01 / SYSTEMS ADMINISTRATION</h3>
            <h2>Virtualized Windows Server Infrastructure</h2>
            <p>
              Building and managing a multi-machine Windows Server
              environment as part of a systems administration course.
            </p>

            <h3>PROJECT OVERVIEW</h3>
            <p>
              This project involved setting up a collection of virtual
              machines to simulate the infrastructure found in an
              organizational IT environment. Throughout the course,
              different servers and services were installed, configured,
              and administered to gain experience managing a Windows-based
              network.
            </p>

            <h3>INFRASTRUCTURE & SERVICES</h3>
            <p>
              <strong>Active Directory</strong>
              <br />
              Working with domain services, user accounts, and
              centralized directory management.
            </p>
            <p>
              <strong>Group Policy</strong>
              <br />
              Configuring and managing policies to control system
              settings and administrative behavior.
            </p>
            <p>
              <strong>Networking</strong>
              <br />
              Configuring network settings and working with the
              networking requirements of the server environment.
            </p>
            <p>
              <strong>Email Services</strong>
              <br />
              Working with server-based email infrastructure and
              its administration.
            </p>
            <p>
              <strong>SharePoint Server</strong>
              <br />
              Setting up and working with SharePoint Server 2019
              in a Windows Server environment.
            </p>
            <p>
              <strong>Virtual Machines</strong>
              <br />
              Installing, configuring, and managing multiple
              virtual machines for different infrastructure roles.
            </p>

            <h3>SKILLS DEVELOPED</h3>
            <ul>
              <li>Windows Server installation and administration</li>
              <li>Managing virtualized server environments</li>
              <li>Active Directory and Group Policy administration</li>
              <li>Configuring common organizational IT services</li>
              <li>Working with server infrastructure and networking</li>
            </ul>
          </section>

          <div className="detail-divider" />

          <section className="detail-section">
            <h3>02 / NETWORKING</h3>
            <h2>Cisco Network Infrastructure</h2>
            <p>
              Progressing from network configuration exercises to
              building a small network using physical Cisco equipment.
            </p>

            <h3>PROJECT OVERVIEW</h3>
            <p>
              A networking course focused on understanding how devices
              communicate and how network infrastructure is configured.
              The coursework began with learning networking fundamentals
              and configuring individual devices, then progressed to
              building a small functional network using actual hardware.
            </p>

            <h3>NETWORK CONFIGURATION</h3>
            <p>
              <strong>Routers</strong>
              <br />
              Configuring Cisco routers and working with the
              routing functions used to connect networks.
            </p>
            <p>
              <strong>Switches</strong>
              <br />
              Configuring Cisco switches and connecting devices
              within a local network.
            </p>
            <p>
              <strong>IP Addressing</strong>
              <br />
              Working with IP addresses, network addressing,
              and subnetting.
            </p>
            <p>
              <strong>Client Configuration</strong>
              <br />
              Configuring client devices to communicate properly
              across the network.
            </p>

            <h3>PHYSICAL NETWORK BUILD</h3>
            <p>
              The course concluded with a practical exercise using
              physical networking hardware. This involved setting up
              a small network with Cisco equipment and configuring
              the connected devices to establish network connectivity.
            </p>

            <h3>SKILLS DEVELOPED</h3>
            <ul>
              <li>Cisco router and switch configuration</li>
              <li>IP addressing and subnetting</li>
              <li>Client network configuration</li>
              <li>Understanding network infrastructure</li>
              <li>Building and testing a physical network</li>
            </ul>
          </section>

          <div className="detail-divider" />

          <section className="detail-section">
            <h3>03 / ADDITIONAL COURSEWORK</h3>
            <h2>IT Training & Technical Labs</h2>
            <p>
              Additional coursework and exercises covering cloud
              computing, Linux administration, and operating system security.
            </p>

            <h3>AWS TRAINING & LABS</h3>
            <p>
              Completed training courses and hands-on learning
              exercises through Amazon&apos;s AWS training resources.
              Topics included cloud computing concepts and working
              with services such as Amazon S3 and EC2.
            </p>
            <div className="project-tags">
              <span>AWS</span>
              <span>Amazon S3</span>
              <span>Amazon EC2</span>
              <span>Cloud Computing</span>
            </div>

            <h3>LINUX ADMINISTRATION</h3>
            <p>
              Completed command-line exercises and smaller
              administration labs involving Linux utilities,
              filtering command output, file management, and
              working with system information.
            </p>
            <div className="project-tags">
              <span>Linux</span>
              <span>Bash</span>
              <span>Command Line</span>
            </div>

            <h3>OPERATING SYSTEMS SECURITY</h3>
            <p>
              Coursework covering operating system security,
              Windows administration, Group Policy, network
              security, and system security practices.
            </p>
            <div className="project-tags">
              <span>Windows Security</span>
              <span>Group Policy</span>
              <span>Network Security</span>
            </div>
          </section>
        </>
      )}

      {/* OTHER PROJECTS */}

      {!isLocalAI && !isITCoursework && (
        <section className="detail-section">
          <h3>PROJECT OVERVIEW</h3>
          <p>{project.description}</p>

          <h3>TECHNOLOGIES</h3>
          <div className="project-tags">
            {project.technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
        </section>
      )}

      <footer className="detail-back">
        <Link href="/">← Return to Project Directory</Link>
      </footer>
    </main>
  );
}
