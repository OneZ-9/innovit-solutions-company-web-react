import { NavLink } from "react-router-dom";
import { Button } from "./ui/button";

function Navigation() {
  return (
    <nav className="flex items-center gap-10">
      <ul className="flex items-center text-base text-primary-foreground">
        <li className="inline-block px-6 py-6 hover:border-b-4 hover:border-primary">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="inline-block px-6 py-6 hover:border-b-4 hover:border-primary">
          <NavLink to="#about">About us</NavLink>
        </li>
        <li className="inline-block px-6 py-6 hover:border-b-4 hover:border-primary">
          <NavLink to="#services">Our services</NavLink>
        </li>
        <li className="inline-block px-6 py-6 hover:border-b-4 hover:border-primary">
          <NavLink to="blogs">Blog</NavLink>
        </li>
      </ul>
      <Button variant="default">Start Project</Button>
    </nav>
  );
}

export default Navigation;
