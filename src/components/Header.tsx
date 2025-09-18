
'use client'

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  LocalShipping,
  Delete,
  Recycling,
  WarningAmberOutlined,
  Payment,
  CalendarToday,
  Menu, 
  Close, 
} from '@mui/icons-material';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Top Section */}
      <div className="relative">
        <div className="flex w-full bg-black text-white px-4 py-5 lg:py-0">
          {/* Mobile: Hamburger and Logo */}
          <div className="flex items-center justify-between w-full lg:hidden">
            <Image
              src="/svgs/logo.svg"
              alt="logo"
              width={60}
              height={60}
            />
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {isOpen ? <Close /> : <Menu />}
            </button>
          </div>

          {/* Desktop Nav and Phone Number (hidden on mobile) */}
          <div className="hidden lg:flex lg:w-full lg:gap-6">
            <div className="flex text-center gap-4 justify-center w-full py-5 text-[14px]">
              <Link href="/">HOME</Link>
              <Link href="/commercial">COMMERCIAL SERVICE &gt;</Link>
              <Link href="/residential">RESIDENTIAL SERVICE &gt;</Link>
              <Link href="/about">ABOUT US</Link>
              <Link href="/contact">CONTACT US</Link>
            </div>
            <div className="flex flex-col justify-end w-[170px] text-[#FF0000] pr-1">
              <p className="text-[20px] leading-[32px] text-right">(715358) 8500</p>
              <p className="text-[20px] leading-[32px] text-right">Call or Text</p>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className=":hidden w-full bg-black text-white p-4">
          <div className="flex flex-col items-center gap-4 text-center">
            <Link href="/" onClick={toggleMenu}>HOME</Link>
            <Link href="/commercial" onClick={toggleMenu}>COMMERCIAL SERVICE</Link>
            <Link href="/residential" onClick={toggleMenu}>RESIDENTIAL SERVICE</Link>
            <Link href="/about" onClick={toggleMenu}>ABOUT US</Link>
            <Link href="/contact" onClick={toggleMenu}>CONTACT US</Link>
          </div>
        </div>
      )}

     
      <div className="hidden lg:block absolute inset-x-0 top-5 pl-10">
        <Image
          src="/svgs/logo.svg"
          alt="logo"
          width={60}
          height={60}
        />
      </div>

      {/* Icon Links */}
      <div className="flex flex-wrap   justify-end gap-3 pt-4 pr-4 w-full">
        <div className="flex gap-2 bg-white px-4 items-center shadow-md">
          <LocalShipping sx={{ fontSize: "small" }}/>
          <p className="font-md">Roll Off Guide</p>
        </div>
        <div className="flex gap-2 bg-white px-3 py-2 items-center shadow-md">
          <Delete />
          <p className="font-md text-sm">Trash Guide</p>
        </div>
        <div className="flex gap-2 bg-white px-3 py-2 items-center shadow-md">
          <Recycling />
          <p className="font-md text-sm">Recycling Guide</p>
        </div>
        <div className="flex gap-2 bg-white px-3 py-2 items-center shadow-md">
          <WarningAmberOutlined />
          <p className="font-md text-sm">Hazardous Guide</p>
        </div>
        <div className="flex gap-2 bg-white px-3 py-2 items-center shadow-md">
          <CalendarToday />
          <p className="font-md text-sm">2023 Calender</p>
        </div>
        <div className="flex gap-2 bg-white px-3 py-2 items-center shadow-md">
          <Payment />
          <p className="font-md text-sm">Pay Online</p>
        </div>
      </div>
    </>
  );
};

export default Header;





