import React from "react";
import "../Styles.css";

export default function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="footer">
      <p className="footer-text">© {currentYear} Moviedux, All Right Reserved.</p>
    </footer>
  );
}
