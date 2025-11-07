import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer>
      <div className="info">
        <p>
          More ways to go <span>Volt</span>: configure your Delta Series online
          or find an authorized Volt Partner near you. Questions?{" "}
          <span>support@voltlabs.dev</span>
        </p>
        <img src="/ai.svg" alt="Volt Logo" className="size-6" />
      </div>
      <hr />
      <div className="links">
        <p>© {new Date().getFullYear()} Volt Labs. All rights reserved.</p>
        <ul>
          {footerLinks.map(({ label, link }) => (
            <li key={label}>
              <a href={link}>{label}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
