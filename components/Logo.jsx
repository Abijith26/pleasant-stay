import Image from "next/image";
import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <Link href="/">
      <div className="flex gap-2 items-center hover:cursor-pointer py-3 px-3">
        <Image
          alt="logo"
          src="/logo.png"
          className="w-9 h-9"
          width={48}
          height={48}
        />
        <span className="text-white font-semibold hover:text-rose-500 transition-all ease-in duration-200">
          The Pleasant Stay
        </span>
      </div>
    </Link>
  );
}

export default Logo;
