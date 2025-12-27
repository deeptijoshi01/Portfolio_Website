import {
  FaJs,
  FaPython,
  FaPhp,
  FaReact,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { SiMysql, SiMongodb, SiFlask, SiCss3 } from "react-icons/si";
import { useState } from "react";

const Skills = () => {
  const [hovered, setHovered] = useState(null);

  const styles = {
    section: {
      padding: "80px 8%",
      background: "#000",
      color: "#fff",
    },
    container: {
      maxWidth: "1200px",
      margin: "auto",
    },
    title: {
      textAlign: "center",
      fontSize: "38px",
      marginBottom: "55px",
      fontWeight: "500",
      color: "#2acccc",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
      gap: "32px",
    },
    card: (isHovered) => ({
      background: "#0b0b0b",
      borderRadius: "16px",
      padding: "26px",
      border: "1px solid rgba(42, 204, 204, 0.15)",
      transform: isHovered ? "translateY(-10px)" : "translateY(0)",
      boxShadow: isHovered
        ? "0 18px 40px rgba(42, 204, 204, 0.35)"
        : "none",
      transition: "all 0.35s ease",
    }),
    heading: {
      fontSize: "20px",
      marginBottom: "18px",
      fontWeight: "500",
      color: "#2acccc",
    },
    list: {
      display: "flex",
      flexDirection: "column",
      gap: "14px",
    },
    item: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      fontSize: "15px",
      color: "#d6d6d6",
    },
    icon: {
      fontSize: "20px",
      color: "#2acccc",
    },
  };

  return (
    <section id="skills" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.title}>Skills</h2>

        <div style={styles.grid}>

          {/* Languages */}
          <div
            style={styles.card(hovered === 1)}
            onMouseEnter={() => setHovered(1)}
            onMouseLeave={() => setHovered(null)}
          >
            <h3 style={styles.heading}>Languages</h3>
            <div style={styles.list}>
              <div style={styles.item}>
                <FaJs style={styles.icon} /> JavaScript
              </div>
              <div style={styles.item}>
                <FaPython style={styles.icon} /> Python
              </div>
              <div style={styles.item}>
                <FaPhp style={styles.icon} /> PHP
              </div>
            </div>
          </div>

          {/* Libraries & Frameworks */}
          <div
            style={styles.card(hovered === 2)}
            onMouseEnter={() => setHovered(2)}
            onMouseLeave={() => setHovered(null)}
          >
            <h3 style={styles.heading}>Libraries & Frameworks</h3>
            <div style={styles.list}>
              <div style={styles.item}>
                <FaReact style={styles.icon} /> React.js
              </div>
              <div style={styles.item}>
                <FaReact style={styles.icon} /> React Native
              </div>
              <div style={styles.item}>
                <FaBootstrap style={styles.icon} /> Bootstrap
              </div>
              <div style={styles.item}>
                <SiFlask style={styles.icon} /> Flask
              </div>
            </div>
          </div>

          {/* Styling */}
          <div
            style={styles.card(hovered === 3)}
            onMouseEnter={() => setHovered(3)}
            onMouseLeave={() => setHovered(null)}
          >
            <h3 style={styles.heading}>Styling</h3>
            <div style={styles.list}>
              <div style={styles.item}>
                <SiCss3 style={styles.icon} /> CSS
              </div>
              <div style={styles.item}>
                <FaBootstrap style={styles.icon} /> Bootstrap
              </div>
            </div>
          </div>

          {/* Version Control */}
          <div
            style={styles.card(hovered === 4)}
            onMouseEnter={() => setHovered(4)}
            onMouseLeave={() => setHovered(null)}
          >
            <h3 style={styles.heading}>Version Control</h3>
            <div style={styles.list}>
              <div style={styles.item}>
                <FaGitAlt style={styles.icon} /> Git
              </div>
              <div style={styles.item}>
                <FaGithub style={styles.icon} /> GitHub
              </div>
            </div>
          </div>

          {/* Databases */}
          <div
            style={styles.card(hovered === 5)}
            onMouseEnter={() => setHovered(5)}
            onMouseLeave={() => setHovered(null)}
          >
            <h3 style={styles.heading}>Databases</h3>
            <div style={styles.list}>
              <div style={styles.item}>
                <SiMysql style={styles.icon} /> MySQL
              </div>
              <div style={styles.item}>
                <SiMongodb style={styles.icon} /> MongoDB
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
