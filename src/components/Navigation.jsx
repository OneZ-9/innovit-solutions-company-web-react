import { NavLink } from "react-router-dom";
import { Button } from "./ui/button";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

function Navigation() {
  return (
    <nav className="flex items-center gap-10">
      <ul className="flex items-center text-base text-primary-foreground">
        <li className="inline-block px-6 py-6 hover:border-b-4 hover:border-primary">
          <NavLink to="/#hero">Home</NavLink>
        </li>
        <li className="inline-block px-6 py-6 hover:border-b-4 hover:border-primary">
          <NavLink to="#about">About us</NavLink>
        </li>
        <li className="inline-block px-6 py-6 hover:border-b-4 hover:border-primary">
          <NavLink to="#services">Our services</NavLink>
        </li>
        <li className="inline-block px-6 py-6 hover:border-b-4 hover:border-primary">
          <NavLink to="#blogs">Blogs</NavLink>
        </li>
        <li>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>Link</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </li>
      </ul>

      <NavLink to="#cta">
        <Button variant="default">Start Project</Button>
      </NavLink>
    </nav>
  );
}

export default Navigation;
