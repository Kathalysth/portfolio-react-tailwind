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
        <a href="https://facebook.com/amby">
          <FaFacebook className="" size={30} />
        </a>
      </li>
      <li>
        <a href="https://instagram.com/bishopsirhchris">
          <FaInstagram className="" size={30} />
        </a>
      </li>
      <li>
        <a href="https://twitter.com/bishopsirhchris">
          <FaTwitter className="" size={30} />
        </a>
      </li>
      <li>
        <a href="https://linkedin.com/in/ambassador-chris-ehigimetor">
          <FaLinkedinIn className="" size={30} />
        </a>
      </li>
    </ul>
  );
}

export default Socials;
