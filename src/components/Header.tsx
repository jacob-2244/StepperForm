import React from "react";
import Link from "next/link";
import Image from "next/image";
import { LocalShipping, Delete, Recycling,WarningAmberOutlined,Payment,CalendarToday } from '@mui/icons-material';

const Header = () => {
    return (
        <>
        <div className="flex flex-col relative">
            <div className="flex w-full gap-6 bg-black text-white relative">
                <div className="flex text-center gap-2 justify-center w-full py-4 ">
                    <Link href="/">HOME</Link>
                    <Link href="/commercial">COMMERCIAL SERVICE &gt;</Link>

                    <Link href="/commercial">RESIDENTIAL SERVICE &gt;</Link>

                    <Link href="/commercial">ABOUT US</Link>


                    <Link href="/commercial">CONCTACT US</Link>

                </div>

                <div className="flex flex-col justify-right w-[150px] text-[#FF0000] ">
                    <p className="text-[20px]">(715358) 8500</p>
                    <p className="text-[20px]">Call or Text</p>
                </div>
            </div>

            <div className="absolute inset-x-0 -bottom-10 flex  top-4 pl-6">
                <Image
                    src="/svgs/logo.svg"
                    alt="logo"
                    width={80}
                    height={60} />


                    

            </div >


        </div>


        <div className="flex flex-wrap justify-end gap-3 pt-3 pr-3 ">
          <div className="flex gap-2 bg-white px-3 py-2  items-center shadow-md">
          <LocalShipping/>
        <p className=" font-semibold">
          Roll Off Guide
        </p>
        </div>
         <div className="flex gap-2 bg-white px-3 py-2  items-center shadow-md">
          <Delete/>
        <p className=" font-semibold">
          Trash Guide
        </p>
        </div>
          <div className="flex gap-2 bg-white px-3 py-2  items-center shadow-md">
          <Recycling/>
        <p className=" font-semibold">
         Recycling Guide
        </p>
        </div>
          <div className="flex gap-2 bg-white px-3 py-2  items-center shadow-md">
          <WarningAmberOutlined/>
        <p className=" font-semibold">
         Hazardous Guide
        </p>
        </div>
          <div className="flex gap-2 bg-white px-3 py-2  items-center shadow-md">
          <CalendarToday/>
        <p className=" font-semibold">
          2023 Calender
        </p>
        </div>
          <div className="flex gap-2 bg-white px-3 py-2  items-center shadow-md">
          <Payment/>
        <p className=" font-semibold">
          Pay Online
        </p>
        </div>
      </div>
        </>
    );
};

export default Header;



