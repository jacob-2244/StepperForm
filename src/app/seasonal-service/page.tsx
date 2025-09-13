

'use client'

import Header from "@/components/Header"
import Form from "@/components/Form"

export default function SEASONALSERVICE() {
  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat "
      style={{
        backgroundImage: "url('/images/background.jpg')"
      }}
    >
      <Header />
      <div className="flex justify-center w-full px-60 py-10">
        <Form/>
      </div>
    </div>
  )
}