


'use client'

import Header from "@/components/Header"
import Form from "@/components/Form"

export default function SEASONALSERVICE() {
  return (
    <div
      className="relative min-h-screen bg-middle"
      style={{
        backgroundImage: "url('/svgs/background.svg')",
      }}
    >

      <div className="absolute inset-0 bg-black/20"></div>


      <div className="relative z-10">
        <Header />
        <div className="flex justify-center w-full px-60 py-8">
          <Form />
        </div>
      </div>
    </div>
  )
}
