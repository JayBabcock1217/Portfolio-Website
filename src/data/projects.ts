
export const themes = [
  {
    name: "Software & AI",
    description: "Applications, programming, and local AI systems.",
    projects: [
      {
        slug: "local-ai-workbench",
        title: "Local AI Workbench",
        description:
          "A local LLM environment for running, managing, and integrating AI models across dedicated GPU hardware.",
        technologies: ["Python", "llama.cpp", "OpenCode", "CUDA"],
        status: "In development",
      },
      {
        slug: "curriculum-planning-assistant",
        title: "Curriculum Planning Assistant",
        description:
          "A web application for organizing curriculum planning, built with a containerized backend, frontend, database, and cloud deployment.",
        technologies: ["TypeScript", "Docker", "AWS", "PostgreSQL"],
        status: "Project",
      },
    ],
  },
  {
    name: "IT",
    description: "IT coursework, technical labs, and infrastructure projects.",
    projects: [
      {
        slug: "it-coursework",
        title: "IT Coursework & Labs",
        description:
          "A collection of hands-on IT projects and coursework covering Linux administration, cloud computing, networking, Windows Server, cybersecurity, and systems administration.",
        technologies: [
          "Linux",
          "AWS",
          "Windows Server",
          "Active Directory",
          "Networking",
          "Docker",
        ],
        status: "Ongoing",
      },
    ],
  },
  {
    name: "Astronomy",
    description: "Optics, telescope systems, and astrophotography.",
    projects: [
      {
        slug: "telescope-drive-system",
        title: "Telescope Drive System",
        description:
          "A custom multi-stage belt drive for a telescope mount, designed around compact packaging, rigidity, and precise motion.",
        technologies: ["CAD", "3D Printing", "Mechanical Design"],
        status: "In development",
      },
    ],
  },
  {
    name: "Game Development",
    description: "Game projects and interactive experiments.",
    projects: [],
  },
];
