import "./App.css";

function App() {
  const projects = [
    {
      title: "AI Support Hub",
      description:
        "Plataforma de soporte empresarial con chatbot de IA, gestión de conversaciones y creación automática de tickets.",
      technologies: 
      [
        ".NET 10",
        "C#",
        "React",
        "Azure SQL",
        "Dapper",
        "Gemini",
        "n8n",
        "Docker"
      ],
      demoUrl: "https://ai-support-hub-ashy.vercel.app/",
      githubUrl: "https://github.com/janoneone/AI-Support-Hub"
    },
    {
      title: "Sistema de Gestión y Automatización",
      description:
        "Automatización de procesos mediante APIs, webhooks y flujos de integración para reducir tareas manuales.",
      technologies: ["n8n", "REST API", "Webhooks", ".NET", "SQL"],
      highlights: [
        "Integración entre sistemas",
        "Automatización mediante webhooks",
        "Manejo de errores y logging",
        "Procesamiento automático de información",
      ],
    },
    {
      title: "Modernización de Sistemas Empresariales",
      description:
        "Desarrollo y mantenimiento de aplicaciones empresariales utilizando tecnologías Microsoft y patrones modernos de desarrollo.",
      technologies: [
        "C#",
        ".NET",
        "ASP.NET",
        "VB.NET",
        "SQL Server",
        "JavaScript",
      ],
      highlights: [
        "Modernización de aplicaciones legacy",
        "Integración mediante REST y SOAP",
        "Optimización de consultas SQL",
        "Buenas prácticas y calidad de código",
      ],
    },
  ];

  const skills = [
  "C#",
  ".NET",
  ".NET 10",
  "ASP.NET",
  "REST API",
  "SOAP",
  "SQL Server",
  "Azure SQL",
  "Oracle",
  "Dapper",
  "React",
  "JavaScript",
  "Git",
  "Docker",
  "n8n",
  "Gemini",
  "OpenAI",
  "SonarCloud",
];

  return (
    <div>
      <nav className="navbar">
        <div className="logo">AC.</div>

        <div className="nav-links">
          <a href="#about">Sobre mí</a>
          <a href="#skills">Tecnologías</a>
          <a href="#projects">Proyectos</a>
          <a href="#contact">Contacto</a>
        </div>
      </nav>

      <main>
        <section className="hero">
          <p className="subtitle">Backend / Full-Stack Developer</p>

          <h1>
            Alejandro <span>Castro</span>
          </h1>

          <h2>.NET · C# · SQL · React · APIs · Automation</h2>

          <p className="hero-description">
            Desarrollo soluciones de software orientadas a backend,
            integración de sistemas y automatización de procesos utilizando
            tecnologías modernas y herramientas de inteligencia artificial.
          </p>

          <div className="buttons">
            <a href="#projects" className="primary-button">
              Ver proyectos
            </a>

            <a
              href="https://github.com/janoneone"
              target="_blank"
              className="secondary-button"
            >
              GitHub
            </a>
          </div>
        </section>

        <section id="about">
          <h2 className="section-title">Sobre mí</h2>

          <p className="about-text">
            Soy Ingeniero en Informática con experiencia en desarrollo
            Full-Stack y Backend, especializado en tecnologías Microsoft,
            integración de sistemas y desarrollo de aplicaciones
            empresariales.
          </p>

          <p className="about-text">
            He trabajado desarrollando y manteniendo soluciones con .NET,
            C#, ASP.NET, VB.NET, SQL Server y JavaScript, además de integrar
            servicios REST y SOAP y participar en procesos de modernización
            de sistemas.
          </p>

          <p className="about-text">
            Actualmente también desarrollo soluciones utilizando
            automatización e inteligencia artificial para mejorar procesos,
            integrar plataformas y reducir tareas manuales.
          </p>
        </section>

        <section id="skills">
          <h2 className="section-title">Tecnologías</h2>

          <div className="skills">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </section>

        <section id="projects">
  <h2 className="section-title">Proyectos destacados</h2>

  <div className="projects-grid">
    {projects.map((project) => (
      <article className="project-card" key={project.title}>
        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className="project-tech">
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>

        {project.highlights && (
          <ul>
            {project.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        )}

        {(project.demoUrl || project.githubUrl) && (
          <div className="project-actions">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="primary-button"
              >
                Ver Demo
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-button"
              >
                Código
              </a>
            )}
          </div>
        )}
      </article>
    ))}
  </div>
</section>

        <section id="contact" className="contact">
          <h2 className="section-title">Contacto</h2>

          <p>
            Estoy disponible para oportunidades como Backend Developer,
            Full-Stack Developer o Software Engineer.
          </p>

          <div className="buttons">
            <a
              href="https://www.linkedin.com/in/alejandrocastro01//"
              target="_blank"
              className="primary-button"
            >
              LinkedIn
            </a>

            <a
              href="mailto:acastro.ma1@gmail.com"
              className="secondary-button"
            >
              Email
            </a>
          </div>
        </section>
      </main>

      <footer>
        © {new Date().getFullYear()} Alejandro Castro
      </footer>
    </div>
  );
}

export default App;