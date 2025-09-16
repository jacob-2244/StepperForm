

'use client'

import Header from "@/components/Header"
import Form from "@/components/Form"

export default function SEASONALSERVICE() {
  return (
    <div 
      className="min-h-screen  bg-center  "
      style={{
        backgroundImage: "url('/svgs/background.svg')"
      }}
    >
      <Header />
      <div className="flex justify-center w-full px-60 py-10">
        <Form/>
      </div>
    </div>
  )
}