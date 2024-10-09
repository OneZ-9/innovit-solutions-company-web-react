import { NavLink } from "react-router-dom";
import { Button } from "./ui/button";

// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuIndicator,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
//   NavigationMenuViewport,
// } from "@/components/ui/navigation-menu";

function Navigation() {
  return (
    <nav>
      <ul className="hidden items-center text-base text-primary-foreground lg:visible lg:flex">
        <li className="inline-block px-6 py-6 hover:border-b-4 hover:border-primary">
          <NavLink to="/#hero">Home</NavLink>
        </li>
        <li className="inline-block px-6 py-6 hover:border-b-4 hover:border-primary">
          <NavLink to="/#about">About us</NavLink>
        </li>
        <li className="inline-block px-6 py-6 hover:border-b-4 hover:border-primary">
          <NavLink to="/#services">Our services</NavLink>
        </li>
        <li className="inline-block px-6 py-6 hover:border-b-4 hover:border-primary">
          <NavLink to="/#blogs">Blogs</NavLink>
        </li>
        {/* <li>
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
        </li> */}

        <li>
          <Button variant="default" className="ml-8" asChild>
            <NavLink to="#cta">Start Project </NavLink>
          </Button>
        </li>
      </ul>

      {/* Mobile Nav */}
      <button className="lg:hidden">
        <ion-icon name="menu-outline" size="large" class="icon-mobile-nav" />
      </button>
    </nav>
  );
}

export default Navigation;
