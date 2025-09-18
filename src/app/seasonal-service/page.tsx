


'use client'

import Header from "@/components/Header"
import dynamic from 'next/dynamic';
const Form4 = dynamic(() => import('@/components/Form4'), {
  ssr: false,
});


export default function SeasonalService() {
  return (
    <div
      className="relative min-h-screen bg-middle w-full"
      style={{
        backgroundImage: "url('/svgs/background.svg')",
      }}
    >

      <div className="absolute inset-0 bg-black/20"></div>


      <div className="relative z-10">
        <Header />
        <div className="flex justify-center w-full  px-20 sm:px-40 md:px-60 py-8 mx-auto">
         {/* <Form/> */}
          {/* <Form2/> */}
          <Form4/>
        </div>
      </div>
    </div>
  )
}
