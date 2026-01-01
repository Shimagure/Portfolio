import { motion } from "framer-motion";
import { Github } from "lucide-react";
import "./App.css";

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export default function App() {
  return (
    <div className="container">

      {/* NAVBAR */}
      <nav className="nav">
        {["about", "skills", "experience"].map(item => (
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
        <p>End User Computing Technician · Microsoft 365 · Active Directory</p>

        <div className="hero-actions">
          <a href="/resume.pdf" className="btn">Download Resume</a>
          <a href="https://github.com/Shimagure" target="_blank">
            <Github size={22} />
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
          IT support specialist experienced in Microsoft 365, Active Directory,
          hardware troubleshooting, and enterprise user support.
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
        <div className="skills">
          {[
            "M365 Admin",
            "Active Directory",
            "Hardware Repair",
            "Network Troubleshooting",
            "Windows & Linux",
            "Remote Support"
          ].map(skill => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </motion.section>

      {/* EXPERIENCE TIMELINE */}
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
            "End User Computing Technician — Solaire Resort & Casino (2023–Present)",
            "Web Design / Networking Trainee — BSU (2022)",
            "Programmer / Researcher — BSU (2021–2022)",
            "Freelance Computer Technician — SINHS (2018–2020)"
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

    </div>
  );
}
