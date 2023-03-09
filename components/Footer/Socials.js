import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

function Socials() {
  return (
    <ul className="flex items-center gap-5">
      <li>
        <a href="https://facebook.com/amby" aria-label="facebook url">
          <FaFacebook className="" size={30} />
        </a>
      </li>
      <li>
        <a
          href="https://instagram.com/bishopsirhchris"
          aria-label="instagram url"
        >
          <FaInstagram className="" size={30} />
        </a>
      </li>
      <li>
        <a href="https://twitter.com/bishopsirhchris" aria-label="twitter url">
          <FaTwitter className="" size={30} />
        </a>
      </li>
      <li>
        <a
          href="https://linkedin.com/in/ambassador-chris-ehigimetor"
          aria-label="linkedin url"
        >
          <FaLinkedinIn className="" size={30} />
        </a>
      </li>
    </ul>
  );
}

export default Socials;
