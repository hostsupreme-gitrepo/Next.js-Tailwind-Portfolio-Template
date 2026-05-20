import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import {
  HomeIcon,
  EnvelopeIcon,
  RectangleStackIcon,
  UserCircleIcon,
  CommandLineIcon,
  Squares2X2Icon,
  XMarkIcon,
  Bars3Icon,

} from "@heroicons/react/24/solid";

import { FaInstagram, FaYoutube,FaPatreon } from "react-icons/fa6";

const NAV_MENU = [
  {
    name: "Home/about the artist",
    icon: HomeIcon,
    href: "/",
  },
   {
    name: "Portfolio",
    icon: RectangleStackIcon,
    href: "/portfolio",
  }, 
  {
    name: "My Projects",
    icon: UserCircleIcon,
    href: "/#projects",
  },
  {
    name: "Contact",
    icon: EnvelopeIcon,
    href: "/#contact",
  },

];
const SOCIAL = [
  {
    name: "Instagram",
    icon: FaInstagram,
    href: "https://www.instagram.com/artbyelisaddiq?igsh=MWdjdnM0bW83OWZuOA==",
  },
  {
    name: "YouTube",
    icon: FaYoutube,
    href: "https://youtube.com",
  },
  {
    name: "Patreon",
    icon: FaPatreon,
    href: "https://patreon.com",
  },
];
interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}

function NavItem({ children, href }: NavItemProps) {
  const isExternal = href?.startsWith("http");

  return (
    <li>
      <Typography
        as="a"
        href={href || "#"}
        target={isExternal ? "_blank" : "_self"}
        rel={isExternal ? "noopener noreferrer" : undefined}
        variant="paragraph"
        color="gray"
        className="flex items-center gap-2 font-medium text-gray-900 text-2xl uppercase transition-colors hover:text-gray-500"
      >
        {children}
      </Typography>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <MTNavbar shadow={false} fullWidth className="border-0 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-left border-b-4 border-l-8 border-black pl-2">
        <Typography color="blue-gray" className="text-7xl font-bold uppercase ">
          Art By Eli Saddiq
        </Typography>      </div>
      <div className="container mx-auto flex  items-center justify-center border-black border-l-8 pl-2">
        <ul className="ml-1 hidden items-left  gap-8 lg:flex">
          {NAV_MENU.map(({ name, icon: Icon, href }) => (
            <NavItem key={name} href={href} >
              <Icon className="h-7 w-7 " />
              {name}
            </NavItem>
          ))}
        </ul>
        <Typography color="blue-gray" className=" font-bold uppercase">
        </Typography>

        <ul className="ml-auto hidden items-center gap-6 lg:flex">
          {SOCIAL.map(({ name, icon: Icon, href }) => (
            <li key={name}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-black transition-colors"
              >
                <Icon className="h-6 w-6" />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <Collapse open={open}>
        <div className="container mx-auto mt-3 border-t border-gray-200 px-2 pt-4">
          <ul className="flex flex-col gap-4">
            {NAV_MENU.map(({ name, icon: Icon }) => (
              <NavItem key={name}>
                <Icon className="h-5 w-5" />
                {name}
              </NavItem>
            ))}
          </ul>

          <div className="mt-6 flex items-center gap-4">
            {SOCIAL.map(({ name, icon: Icon, href }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-black transition-colors"
              >
                <Icon className="h-6 w-6" />
              </a>
            ))}
          </div>

          <div className="mt-6 mb-4 flex items-center gap-2">
            <Button variant="text">Sign In</Button>
            <a href="#">
              <Button color="gray">blocks</Button>
            </a>
          </div>
        </div>
      </Collapse>
    </MTNavbar >
  );
}

export default Navbar;
