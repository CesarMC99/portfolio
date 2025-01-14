import { HashLink } from "react-router-hash-link";
import { links } from "./links";

export const Navigation = () => {
  return (
    <div>
      <div>
        <img className="w-[80px]" src="./imgs/LOGO3.jpeg" alt="logo-page" />
      </div>
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link.id}>
              <HashLink to={link.link}>{link.name}</HashLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
