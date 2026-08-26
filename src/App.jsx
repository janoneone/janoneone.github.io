import { useState } from "react";
import "./App.css";

function App() {
  const [selectedExpertise, setSelectedExpertise] = useState(null);

  const expertise = [
    {
      name: ".NET 10",
      icon: "⌨️",
      short: "Desarrollo de APIs y servicios robustos",
      detail:
        "Desarrollo backend con C#, APIs REST, lógica de negocio, integración con bases de datos y servicios externos.",
    },
    {
      name: "React",
      icon: "⚛️",
      short: "Interfaces modernas y responsivas",
      detail:
        "Construcción de interfaces web, consumo de APIs, manejo de estados, componentes reutilizables y aplicaciones SPA.",
    },
    {
      name: "Azure SQL",
      icon: "🗄️",
      short: "Gestión y diseño de bases de datos",
      detail:
        "Modelado de datos, consultas SQL, optimización y conexión desde aplicaciones .NET.",
    },
    {
      name: "APIs",
      icon: "🔗",
      short: "Integración REST y SOAP",
      detail:
        "Diseño, consumo e integración de APIs REST y servicios SOAP entre sistemas empresariales.",
    },
    {
      name: "n8n",
      icon: "⚙️",
      short: "Automatización de procesos",
      detail:
        "Automatización mediante webhooks, integración de servicios, creación de tickets y envío automático de correos.",
    },
    {
      name: "IA",
      icon: "🧠",
      short: "Inteligencia artificial aplicada",
      detail:
        "Integración de modelos generativos para asistentes empresariales, análisis de información y automatización.",
    },
  ];

  const projects = [
    {
      title: "AI Support Hub",
      description:
        "Plataforma inteligente de soporte empresarial con chatbot, gestión de conversaciones, creación automática de tickets y automatización de correos.",
      technologies: [
        ".NET 10",
        "C#",
        "React",
        "Azure SQL",
        "Dapper",
        "Gemini",
        "n8n",
        "Docker",
      ],
      highlights: [
        "Chat inteligente con IA",
        "Persistencia de conversaciones",
        "Creación automática de tickets",
        "Integración con n8n y Gmail",
      ],
      demoUrl: "https://ai-support-hub-ashy.vercel.app/",
      githubUrl: "https://github.com/janoneone/AI-Support-Hub",
      status: "Live",
    },
    {
      title: "Sistema de Gestión y Automatización",
      description:
        "Automatización de procesos mediante APIs, webhooks y flujos de integración para reducir tareas manuales y mejorar tiempos de respuesta.",
      technologies: ["n8n", "REST API", "Webhooks", ".NET", "SQL"],
      highlights: [
        "Integración entre sistemas",
        "Automatización mediante webhooks",
        "Manejo de errores y logging",
        "Procesamiento automático de información",
      ],
      status: "Case Study",
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
      status: "Experience",
    },
  ];

  const skills = [
    "C#",
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

  const stats = [
    {
      value: "13+",
      label: "Años creando soluciones digitales",
      description:
        "Experiencia desarrollando y manteniendo sistemas empresariales y soluciones orientadas a negocio.",
    },
    {
      value: "3+",
      label: "Áreas: Backend, Full-Stack y Automatización",
      description:
        "Combino backend, frontend y automatización para construir soluciones completas.",
    },
    {
      value: "REST",
      label: "APIs e integraciones empresariales",
      description:
        "Diseño e implementación de integraciones REST, SOAP y servicios entre sistemas.",
    },
  ];

  return (
    <div className="site-shell">
      <div className="bg-orb orb-one"></div>
      <div className="bg-orb orb-two"></div>

      <nav className="navbar">
        <div className="logo">
          AC<span>.</span>
        </div>

        <div className="nav-links">
          <a href="#about">Sobre mí</a>
          <a href="#skills">Tecnologías</a>
          <a href="#projects">Proyectos</a>
          <a href="#contact">Contacto</a>
        </div>

        <a href="#contact" className="nav-cta">
          Hablemos
        </a>
      </nav>

      <main>
        <section className="hero">
          <div className="hero-content">

            <div className="hero-left">
              <div className="hero-badge">
                Disponible para nuevos desafíos
              </div>

              <p className="subtitle">
                Backend / Full-Stack Developer
              </p>

              <h1>
                Construyo soluciones que conectan
                <span>
                  {" "}software, datos e inteligencia artificial.
                </span>
              </h1>

              <p className="hero-description">
                Ingeniero en Informática enfocado en desarrollo backend,
                integración de sistemas, modernización de aplicaciones y
                automatización de procesos con tecnologías Microsoft e IA.
              </p>

              <div className="buttons">
                <a href="#projects" className="primary-button">
                  Ver proyectos
                </a>

                <a
                  href="https://github.com/janoneone"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="secondary-button"
                >
                  GitHub
                </a>
              </div>
            </div>

            <aside className="about-preview">
              <div className="about-preview-icon">👤</div>

              <div>
                <span className="mini-label">Sobre mí</span>
                <h3>Perfil técnico orientado a soluciones reales</h3>
              </div>

              <p>
                Soy Ingeniero en Informática con experiencia en desarrollo
                Full-Stack y Backend, especializado en tecnologías Microsoft,
                integración de sistemas y aplicaciones empresariales.
              </p>

              <p>
                He trabajado con .NET, C#, ASP.NET, VB.NET, SQL Server,
                JavaScript, APIs REST y SOAP, participando en modernización,
                mantenimiento y evolución de sistemas.
              </p>

              <p>
                Actualmente desarrollo soluciones que combinan backend,
                automatización e inteligencia artificial para mejorar procesos
                e integrar plataformas.
              </p>
            </aside>

          </div>

          {/* TECNOLOGÍAS A TODO EL ANCHO */}
          <div className="expertise-section">

            <div className="expertise-grid">
              {expertise.map((item) => (
                <button
                  key={item.name}
                  className={`expertise-card ${
                    selectedExpertise?.name === item.name
                      ? "active"
                      : ""
                  }`}
                  onClick={() => setSelectedExpertise(item)}
                >
                  <span className="expertise-icon">
                    {item.icon}
                  </span>

                  <strong>{item.name}</strong>
                  <small>{item.short}</small>
                </button>
              ))}
            </div>

            <div className="expertise-detail">
              {selectedExpertise ? (
                <>
                  <span className="detail-icon">
                    {selectedExpertise.icon}
                  </span>

                  <div>
                    <span className="detail-label">
                      EXPERIENCIA
                    </span>

                    <h3>{selectedExpertise.name}</h3>

                    <p>{selectedExpertise.detail}</p>
                  </div>
                </>
              ) : (
                <div className="expertise-placeholder">
                  <span>←</span>

                  <div>
                    <h3>Selecciona una tecnología</h3>

                    <p>
                      Haz clic en una tarjeta para conocer mi experiencia
                      y lo que he realizado con ella.
                    </p>
                  </div>
                </div>
              )}
            </div>

          </div>
        </section>

        <section className="impact-section">
          <div className="section-heading centered">
            <span className="section-kicker">Mi impacto</span>
            <h2>Resultados que construyo</h2>
          </div>

          <div className="stats-grid">
            {stats.map((stat) => (
              <div className="stat-card" key={stat.label}>
                <strong>{stat.value}</strong>
                <span className="stat-title">{stat.label}</span>
                <p>{stat.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="section-block">
          <div className="section-heading">
            <span className="section-kicker">Perfil profesional</span>
            <h2>Sobre mí</h2>
          </div>

          <div className="about-grid">
            <div className="about-card">
              <p>
                Soy Ingeniero en Informática con experiencia en desarrollo
                Full-Stack y Backend, especializado en tecnologías Microsoft,
                integración de sistemas y aplicaciones empresariales.
              </p>

              <p>
                He trabajado desarrollando y manteniendo soluciones con .NET,
                C#, ASP.NET, VB.NET, SQL Server y JavaScript, además de integrar
                servicios REST y SOAP y participar en procesos de modernización
                de sistemas.
              </p>
            </div>

            <div className="about-card accent-card">
              <span className="mini-label">Enfoque actual</span>

              <h3>Software + Automatización + IA</h3>

              <p>
                Actualmente desarrollo soluciones que combinan backend,
                automatización e inteligencia artificial para mejorar procesos,
                integrar plataformas y reducir tareas manuales.
              </p>
            </div>
          </div>
        </section>

        <section id="skills" className="section-block">
          <div className="section-heading">
            <span className="section-kicker">Stack técnico</span>
            <h2>Tecnologías</h2>
          </div>

          <div className="skills">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </section>

        <section id="projects" className="section-block">
          <div className="section-heading">
            <span className="section-kicker">Trabajo real</span>
            <h2>Proyectos destacados</h2>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className="project-top">
                  <span className="project-index">
                    0{index + 1}
                  </span>

                  <span className="project-status">
                    {project.status}
                  </span>
                </div>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-tech">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                <ul>
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>

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

        <section id="contact" className="contact-section">
          <div>
            <span className="section-kicker">Contacto</span>
            <h2>¿Tienes un desafío técnico?</h2>

            <p>
              Estoy disponible para oportunidades como Backend Developer,
              Full-Stack Developer o Software Engineer.
            </p>
          </div>

          <div className="buttons">
            <a
              href="https://www.linkedin.com/in/alejandrocastro01/"
              target="_blank"
              rel="noopener noreferrer"
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
        <span>© {new Date().getFullYear()} Alejandro Castro</span>
        <span>Backend · Full-Stack · Automation</span>
      </footer>
    </div>
  );
}

export default App;