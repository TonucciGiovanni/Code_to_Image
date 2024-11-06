"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";

function Footer() {
    return (
      <div className="flex items-center gap-10 py-16">
        <Link
          className="text-sm font-medium hover:text-slate-200 ease-in-out transition-all duration-500"
          href="https://www.linkedin.com/in/tonucci-giovanni-94127b300/"
        >
          LinkedIn &nbsp;&#129109;
        </Link>
        <Link
          href="https://twitter.com/G10VANN17ONUCCI"
          className="flex items-center text-sm font-medium hover:text-slate-200 ease-in-out transition-all duration-500"
        >
          <span className="pr-2">Made by</span>
          <Image src="logo-white.svg" width={20} height={20} alt="" />
          <span className="pl-1 font-medium text-slate-200">T0NUCC1 G10VANN1</span>
        </Link>
        <Link
          href="https://github.com/TonucciGiovanni"
          className="flex items-center text-sm font-medium hover:text-slate-200 ease-in-out transition-all duration-500"
        >
          Source Code Here &nbsp;&#129109;
        </Link>
      </div>
    );
  }
  
  export default Footer;