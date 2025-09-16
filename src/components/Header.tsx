import React from "react";
import Link from "next/link";
import Image from "next/image";
import { LocalShipping, Delete, Recycling,WarningAmberOutlined,Payment,CalendarToday } from '@mui/icons-material';

const Header = () => {
    return (
        <>
        <div className="flex flex-col relative  ">
            <div className="flex w-full gap-6 bg-black text-white relative px-4">
                <div className="flex text-center gap-4 justify-center w-full py-5 text-[14px] ">
                    <Link href="/">HOME</Link>
                    <Link href="/commercial">COMMERCIAL SERVICE &gt;</Link>

                    <Link href="/commercial">RESIDENTIAL SERVICE &gt;</Link>

                    <Link href="/commercial">ABOUT US</Link>


                    <Link href="/commercial">CONCTACT US</Link>

                </div>

                <div className="flex flex-col justify-right w-[170px] text-[#FF0000] pr-1 ">
                    <p className="text-[20px] leading-[32px] text-right">(715358) 8500 </p>
                            <p className="text-[20px] leading-[32px] justify-end text-right"> Call or Text </p>
                 
                   
                </div>
            </div>

            <div className="absolute inset-x-0 -bottom-10 flex  top-5 pl-10">
                <Image
                    src="/svgs/logo.svg"
                    alt="logo"
                    width={80}
                    height={80} />


                    

            </div >


        </div>


        <div className="flex flex-wrap justify-end gap-3 pt-4 pr-4 ">
          <div className="flex gap-2 bg-white px-4  items-center shadow-md w-200">
          <LocalShipping sx={{size:"small"}}/>
        <p className=" font-md">
          Roll Off Guide
        </p>
        </div>
         <div className="flex gap-2 bg-white px-3 py-2  items-center shadow-md">
          <Delete/>
        <p className=" font-md text-sm">
          Trash Guide
        </p>
        </div>
          <div className="flex gap-2 bg-white px-3 py-2  items-center shadow-md">
          <Recycling/>
        <p className=" font-md text-sm">
         Recycling Guide
        </p>
        </div>
          <div className="flex gap-2 bg-white px-3 py-2  items-center shadow-md">
          <WarningAmberOutlined/>
        <p className=" font-md text-sm">
         Hazardous Guide
        </p>
        </div>
          <div className="flex gap-2 bg-white px-3 py-2  items-center shadow-md">
          <CalendarToday/>
        <p className=" font-md text-sm">
          2023 Calender
        </p>
        </div>
          <div className="flex gap-2 bg-white px-3 py-2  items-center shadow-md">
          <Payment/>
        <p className=" font-md text-sm w-200">
          Pay Online
        </p>
        </div>
      </div>
        </>
    );
};

export default Header;



