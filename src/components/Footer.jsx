import React from "react";
import linksData from "../assets/links.json";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <ul className="footer-links">
        {linksData.map((item, index) => (
          <li key={index}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <p>© {currentYear} Atlas School</p>
    </footer>
  );
}

export default Footer;
