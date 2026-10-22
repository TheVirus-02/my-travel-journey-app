export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer-text">
        © {currentYear} My Travel Journey. All rights reserved.
      </p>
      <p className="footer-subtext">
        Built with React • Created by Rahul Trivedi
      </p>
    </footer>
  );
}