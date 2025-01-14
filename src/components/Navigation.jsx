import { HashLink } from "react-router-hash-link";
import { links } from "./links";

export const Navigation = () => {
  return (
    <div className="flex justify-between items-center w-[80%] p-2">
      <div>
        <img className="w-[80px]" src="./imgs/LOGO3.jpeg" alt="logo-page" />
      </div>
      <nav>
        <ul className="flex gap-10">
          {links.map((link) => (
            <li key={link.id}>
              <HashLink className="text-zinc-900 text-xl font-semibold transition-all duration-300 backdrop-blur-200 backdrop-saturate-200 hover:text-red-500" to={link.link}>{link.name}</HashLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
