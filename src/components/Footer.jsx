import { VscGithubAlt } from "react-icons/vsc";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";


export default function Footer() {
    return (
        <footer className="footer">
        Made by Anna Britta Pincus&copy;
        <ul className="logos">
          <a href="https://github.com/lilpinc">
            <li className="logo">
              <VscGithubAlt />
            </li>
          </a>
          <a href="https://www.linkedin.com/in/anna-britta-pincus-25293b137/">
            <li className="logo">
              <AiOutlineLinkedin />
            </li>
          </a>
          <a href="https://www.instagram.com/abps.fc/">
            <li className="logo">
              <FaInstagram />
            </li>
          </a>
        </ul>
      </footer>
    
    );
}