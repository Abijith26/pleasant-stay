import Link from "next/link";
import React from "react";
import Logo from "./Logo";

const options = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Cabins",
    path: "/cabins",
  },
  {
    label: "About",
    path: "/about",
  },
  {
    label: "Your Account",
    path: "/account",
  },
];

function navigation() {
  return (
    <nav
      aria-label="nav-bar"
      className="flex items-center justify-between py-3 px-4 bg-[#4B4E53]"
    >
      <Logo />

      <ul className="list-none flex items-center gap-5">
        {options.map((item, index) => (
          <Link href={item.path} key={index}>
            <li className="text-white font-semibold hover:text-rose-500 transition-all ease-in duration-200">
              {item.label}
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
}

export default navigation;
