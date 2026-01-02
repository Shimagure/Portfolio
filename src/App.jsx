import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { Monitor, Wrench, Network, Code } from "lucide-react";
import "./App.css";

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export default function App() {
  return (
    <div className="container">

      {/* NAVBAR */}
      <nav className="nav">
        {["about", "skills", "projects", "experience"].map(item => (
          <button key={item} onClick={() => scrollTo(item)}>
            {item.toUpperCase()}
          </button>
        ))}
      </nav>

      {/* HERO */}
      <motion.header
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="hero"
      >
        <h1>Wilson D.C. Chiquito</h1>
        <p>
          I help organizations reduce downtime and improve productivity through
          efficient IT support, Microsoft 365 administration, and Active Directory management.
        </p>

        <div className="hero-actions">
          <a
            href="/Chiquito-Wilson-DC_Resume.pdf"
            download="Wilson-Chiquito-Resume.pdf"
            className="btn"
          >
            Download Resume
          </a>
        </div>
      </motion.header>

      {/* ABOUT */}
      <motion.section
        id="about"
        className="card"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2>About</h2>
        <p>
          Experienced IT Support Specialist focused on optimizing user productivity through 
		  fast resolution, proactive troubleshooting, and efficient Microsoft 365 & AD administration.
        </p>
      </motion.section>

      {/* SKILLS */}
	<motion.section
	  id="skills"
	  className="card"
	  initial={{ opacity: 0, y: 30 }}
	  whileInView={{ opacity: 1, y: 0 }}
	  viewport={{ once: true }}
	>
  <h2>Core Skills</h2>

  <div className="skills-grid">

    {[
      {
        icon: <Monitor size={20} />,
        title: "Platforms & Systems",
        items: ["Microsoft 365 Administration", "Active Directory", "Windows & Linux Support"]
      },
      {
        icon: <Wrench size={20} />,
        title: "IT Operations",
        items: ["End-User Computing", "Hardware Troubleshooting", "Remote Support Tools", "Ticketing Systems"]
      },
      {
        icon: <Network size={20} />,
        title: "Networking & Security",
        items: ["Network Troubleshooting", "Basic Cybersecurity", "Access & Permission Management"]
      },
      {
        icon: <Code size={20} />,
        title: "Programming & Scripting",
        items: ["C++", "Python", "VB.NET", "HTML / CSS / JavaScript"]
      }
    ].map((group, i) => (
      <motion.div
        key={group.title}
        className="skill-group"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.15 }}
        viewport={{ once: true }}
      >
        <div className="skill-header">
          {group.icon}
          <h3>{group.title}</h3>
        </div>

        <ul>
          {group.items.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </motion.div>
    ))}

  </div>
</motion.section>


      {/* PROJECTS */}
      <motion.section
        id="projects"
        className="card"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2>Projects</h2>

        <ul>
          <li>
            <strong>IT Support Portfolio Website</strong><br />
            React · Vite · Framer Motion · Vercel<br />
            Designed and deployed a responsive portfolio showcasing IT support skills and experience.
          </li>

          <li style={{ marginTop: "1rem" }}>
            <strong>Academic E-Commerce System</strong><br />
            VB.NET · Database-driven application<br />
            Developed and tested system modules for an academic research project.
          </li>
        </ul>
      </motion.section>

      {/* EXPERIENCE */}
      <motion.section
        id="experience"
        className="card"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2>Experience</h2>

        <div className="timeline">
          {[
            "End User Computing Technician — Solaire (2023–Present): Reduced user downtime through rapid incident response, Microsoft 365 onboarding, and Active Directory administration.",
            "Web Design / Networking Trainee — BSAU (2022): Assisted in website deployment and basic network setup.",
            "Programmer / Researcher — BSAU (2021–2022): Built and tested e-commerce system modules.",
            "Freelance Computer Technician — SINHS (2018–2020): Hardware repair and system maintenance."
          ].map((role, i) => (
            <motion.div
              key={i}
              className="timeline-item"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              {role}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* FOOTER */}
      <footer>
        <a href="https://linkedin.com/in/wilson-chiquito" target="_blank" rel="noreferrer">
          LinkedIn
        </a>{" "}
        ·{" "}
        <a href="https://github.com/Shimagure" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </footer>

    </div>
  );
}
