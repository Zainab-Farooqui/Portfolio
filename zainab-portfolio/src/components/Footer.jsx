import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          © {new Date().getFullYear()} <span>Zainab Farooqui</span>. All rights reserved.
        </p>

        <div className="footer-links">
          <a href="https://github.com/Zainab-Farooqui" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="mailto:zainabfarooqui@example.com">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
