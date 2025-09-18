"use client";

import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CustomStepper from "@/components/Stepper";
import OpenStreetMap2 from "@/components/OpenStreetMap2";
import Image from "next/image";



type FormInputs = {
  fName: string;
  lName: string;
  email: string;
  phone: string;
  addressNumber: string;
  street: string;
  suffix: string;
  direction1: string;
  direction2: string;
  city: string;
  state: string;
  zip: string;

  billingSame: boolean;
  billingPO: boolean;

  billingAddressNumber?: string;
  billingStreet?: string;
  billingSuffix?: string;
  billingDirection1?: string;
  billingDirection2?: string;
  billingCity?: string;
  billingState?: string;
  billingZip?: string;

  containerSize: string;
  serviceType: string;
  frequency: string;
  quantity: number;
  startDate: string;
  endDate: string;
};

const directions = ["W", "E", "N", "S"];
const suffixes = ["MR", "CIR", "GIR"];
const steps = [1, 2, 3, 4, 5];
const phoneOtions = ["+92", "+93", "+56"];

export default function Formm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    trigger,
  } = useForm<FormInputs>({
    mode: "onBlur",
    defaultValues: {
      billingSame: true,
    },
  });

  const billingSame = watch("billingSame");
  const [activeStep, setActiveStep] = useState<number>(0);

  // ✅ Completed getFullAddress
  const getFullAddress = () => {
    if (!billingSame) {
      const billingParts = [
        // watch("billingDirection1"),
        // watch("billingAddressNumber"),
     
        // watch("billingSuffix"),
        // watch("billingDirection2"),
        watch("billingCity"),
        watch("billingStreet"),
        // watch("billingState"),
        // watch("billingZip"),
      ].filter(Boolean);
      return billingParts.join(" ");
    }
    const serviceParts = [
    //   watch("direction1"),
    //   watch("addressNumber"),
     ,
    //   watch("suffix"),
    //   watch("direction2"),
      watch("city"),
       watch("street")
    //   watch("state"),
    //   watch("zip"),
    ].filter(Boolean);
    return serviceParts.join(" ");
  };

  const handleNext = async () => {
    if (activeStep === 0) {
      const step0Fields: (keyof FormInputs)[] = [
        "fName",
        "lName",
        "phone",
        "email",
        "addressNumber",
        "street",
        "suffix",
        "city",
        "state",
        "zip",
      ];

      if (!billingSame) {
        step0Fields.push(
          "billingAddressNumber",
          "billingStreet",
          "billingSuffix",
          "billingCity",
          "billingState",
          "billingZip"
        );
      }

      const ok = await trigger(step0Fields);
      if (!ok) {
        return;
      }
    }

    setActiveStep((s) => s + 1);
  };

  const handleBack = () => {
    setActiveStep((s) => Math.max(0, s - 1));
  };

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log("Form submitted", data);
    setActiveStep(steps.length);
  };

  // ================== RENDER STEP CONTENT ==================
  const renderStepContent = (step: number) => {
    switch (step) {
      case 0:
       return (
          <section className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold mb-2 text-app_primary">SERVICE INFORMATION</h2>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 flex flex-col gap-2">
                <label className="font-bold">First Name*</label>
                <input
                  {...register("fName", { required: "First name is required" })}
                  placeholder="Enter Your First Name"
                  className={`border px-2 py-4 rounded ${errors.fName ? "border-red-500" : ""}`}
                />
                {errors.fName && <p className="text-red-500 text-sm">{errors.fName.message}</p>}
              </div>

              <div className="flex-1 flex flex-col gap-2">
                <label className="font-bold">Last Name*</label>
                <input
                  {...register("lName", { required: "Last name is required" })}
                  placeholder="Enter Your Last Name"
                  className={`border px-2 py-4 rounded ${errors.lName ? "border-red-500" : ""}`}
                />
                {errors.lName && <p className="text-red-500 text-sm">{errors.lName.message}</p>}
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 flex flex-col gap-2">
                <label className="font-bold">Phone Number*</label>
                <div className="flex  w-full">
                  <select className="border text-center py-4 rounded">
                    <option value=""></option>
                    {phoneOtions.map((dir) => (
                      <option key={dir} value={dir}>
                        {dir}
                      </option>
                    ))}
                  </select>
                  <input
                    {...register("phone", { required: "Phone number is required" })}
                    placeholder="Enter Your Phone Number"
                    className={`border px-2  w-full py-4 rounded ${errors.phone ? "border-red-500" : ""}`}
                  />
                </div>
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
              </div>

              <div className="flex-1 flex flex-col gap-2">
                <label className="font-bold">Email*</label>
                <input
                  type="email"
                  {...register("email", { required: "Email is required" })}
                  placeholder="Enter Your Email"
                  className={`border px-2 py-4 rounded ${errors.email ? "border-red-500" : ""}`}
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
              </div>
            </div>

            <h3 className="text-2xl font-bold text-app_primary mt-4">SERVICE ADDRESS</h3>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 flex flex-col gap-2">
                <label className="font-bold">Direction 1</label>
                <select {...register("direction1")} className="border px-2 py-4 rounded">
                  <option value="">Select</option>
                  {directions.map((dir) => (
                    <option key={dir} value={dir}>
                      {dir}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex-1 flex flex-col gap-2">
                <label className="font-bold">Address Number*</label>
                <input
                  {...register("addressNumber", { required: "Address number is required" })}
                  placeholder="Enter Your Address Number"
                  className={`border px-2 py-4 rounded ${errors.addressNumber ? "border-red-500" : ""}`}
                />
                {errors.addressNumber && <p className="text-red-500 text-sm">{errors.addressNumber.message}</p>}
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 flex flex-col gap-2">
                <label className="font-bold">Street*</label>
                <input
                  {...register("street", { required: "Street is required" })}
                  placeholder="Enter Your Street"
                  className={`border px-2 py-4 rounded ${errors.street ? "border-red-500" : ""}`}
                />
                {errors.street && <p className="text-red-500 text-sm">{errors.street.message}</p>}
              </div>

              <div className="flex-1 flex flex-col gap-2">
                <label className="font-bold">Suffix*</label>
                <select {...register("suffix", { required: "Suffix is required" })} className="border px-2 py-4 rounded">
                  <option value="">Select</option>
                  {suffixes.map((suf) => (
                    <option key={suf} value={suf}>
                      {suf}
                    </option>
                  ))}
                </select>
                {errors.suffix && <p className="text-red-500 text-sm">{errors.suffix.message}</p>}
              </div>

              <div className="flex-1 flex flex-col gap-2">
                <label className="font-bold">Direction 2</label>
                <select {...register("direction2")} className="border px-2 py-4 rounded">
                  <option value="">Select</option>
                  {directions.map((dir) => (
                    <option key={dir} value={dir}>
                      {dir}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 flex flex-col gap-2">
                <label className="font-bold">City*</label>
                <input
                  {...register("city", { required: "City is required" })}
                  placeholder="Enter Your City"
                  className={`border px-2 py-4 rounded ${errors.city ? "border-red-500" : ""}`}
                />
                {errors.city && <p className="text-red-500 text-sm">{errors.city.message}</p>}
              </div>

              <div className="flex-1 flex flex-col gap-2">
                <label className="font-bold">State*</label>
                <input
                  {...register("state", { required: "State is required" })}
                  placeholder="Enter Your State"
                  className={`border px-2 py-4 rounded ${errors.state ? "border-red-500" : ""}`}
                />
                {errors.state && <p className="text-red-500 text-sm">{errors.state.message}</p>}
              </div>

              <div className="flex-1 flex flex-col gap-2">
                <label className="font-bold">Zip Code*</label>
                <input
                  {...register("zip", { required: "Zip Code is required" })}
                  placeholder="Enter Your Zip Code"
                  className={`border px-2 py-4 rounded ${errors.zip ? "border-red-500" : ""}`}
                />
                {errors.zip && <p className="text-red-500 text-sm">{errors.zip.message}</p>}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="flex gap-2 items-center">
                <input type="checkbox" {...register("billingSame")} />
                Billing address is same as service address
              </label>
              <label className="flex gap-2 items-center">
                <input type="checkbox" {...register("billingPO")} />
                Do you want billing to be sent to a PO Box?
              </label>
            </div>

            {!billingSame && (
              <>
                <h3 className="text-lg font-bold text-app_primary">BILLING ADDRESS</h3>

                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 flex flex-col gap-2">
                    <label className="font-bold">Direction 1</label>
                    <select {...register("billingDirection1")} className="border px-2 py-4 rounded">
                      <option value="">Select</option>
                      {directions.map((dir) => (
                        <option key={dir} value={dir}>
                          {dir}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex-1 flex flex-col gap-2">
                    <label className="font-bold">Address Number*</label>
                    <input
                      {...register("billingAddressNumber", { required: "Billing address number is required" })}
                      placeholder="Enter Billing Address Number"
                      className={`border px-2 py-4 rounded ${errors.billingAddressNumber ? "border-red-500" : ""}`}
                    />
                    {errors.billingAddressNumber && (
                      <p className="text-red-500 text-sm">{errors.billingAddressNumber.message}</p>
                    )}
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 flex flex-col gap-2">
                    <label className="font-bold">Street*</label>
                    <input
                      {...register("billingStreet", { required: "Billing street is required" })}
                      placeholder="Enter Billing Street"
                      className={`border px-2 py-4 rounded ${errors.billingStreet ? "border-red-500" : ""}`}
                    />
                    {errors.billingStreet && <p className="text-red-500 text-sm">{errors.billingStreet.message}</p>}
                  </div>

                  <div className="flex-1 flex flex-col gap-2">
                    <label className="font-bold">Suffix*</label>
                    <select {...register("billingSuffix", { required: "Billing suffix is required" })} className="border px-2 py-4 rounded">
                      <option value="">Select</option>
                      {suffixes.map((suf) => (
                        <option key={suf} value={suf}>
                          {suf}
                        </option>
                      ))}
                    </select>
                    {errors.billingSuffix && <p className="text-red-500 text-sm">{errors.billingSuffix.message}</p>}
                  </div>

                  <div className="flex-1 flex flex-col gap-2">
                    <label className="font-bold">Direction 2</label>
                    <select {...register("billingDirection2")} className="border px-2 py-4 rounded">
                      <option value="">Select</option>
                      {directions.map((dir) => (
                        <option key={dir} value={dir}>
                          {dir}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 flex flex-col gap-2">
                    <label className="font-bold">City*</label>
                    <input
                      {...register("billingCity", { required: "Billing city is required" })}
                      placeholder="Enter Billing City"
                      className={`border px-2 py-4 rounded ${errors.billingCity ? "border-red-500" : ""}`}
                    />
                    {errors.billingCity && <p className="text-red-500 text-sm">{errors.billingCity.message}</p>}
                  </div>

                  <div className="flex-1 flex flex-col gap-2">
                    <label className="font-bold">State*</label>
                    <input
                      {...register("billingState", { required: "Billing state is required" })}
                      placeholder="Enter Billing State"
                      className={`border px-2 py-4 rounded ${errors.billingState ? "border-red-500" : ""}`}
                    />
                    {errors.billingState && <p className="text-red-500 text-sm">{errors.billingState.message}</p>}
                  </div>

                  <div className="flex-1 flex flex-col gap-2">
                    <label className="font-bold">Zip Code*</label>
                    <input
                      {...register("billingZip", { required: "Billing zip is required" })}
                      placeholder="Enter Billing Zip Code"
                      className={`border px-2 py-4 rounded ${errors.billingZip ? "border-red-500" : ""}`}
                    />
                    {errors.billingZip && <p className="text-red-500 text-sm">{errors.billingZip.message}</p>}
                  </div>
                </div>
              </>
            )}
          </section>
        );

      case 1:
        return (
          <section className="flex flex-col gap-2 h-fit justify-center w-full">
            <Box className="my-6">
              <h3 className="text-lg font-bold mb-2">Verify Address on Map</h3>
              {/* ✅ Passes address to OpenStreetMap2 */}
              {/* <OpenStreetMap2 address={getFullAddress()} /> */}
              <OpenStreetMap2 address={getFullAddress()}/>
              
              
            </Box>
          </section>
        );

      case 2:
        return (
          <section className="flex flex-col gap-2">
            <h2 className="text-xl font-bold">Service Details</h2>

            <div>
              <label className="font-bold">Container Size (Gallons)</label>
              <div className="flex gap-4">
                <label>
                  <input {...register("containerSize")} type="radio" value="65" /> 65
                </label>
                <label>
                  <input {...register("containerSize")} type="radio" value="96" /> 96
                </label>
              </div>
            </div>

            <div>
              <label className="font-bold">Service Type</label>
              <div className="flex gap-4">
                <label>
                  <input {...register("serviceType")} type="radio" value="Drive In" /> Drive In
                </label>
                <label>
                  <input {...register("serviceType")} type="radio" value="Curb Side" /> Curb Side
                </label>
              </div>
            </div>

            <div>
              <label className="font-bold">Please select the Frequency of service</label>
              <select {...register("frequency")} className="border px-2 py-4 rounded w-full">
                <option value="">Select</option>
                <option value="Weekly">Weekly</option>
                <option value="Bi-Weekly">Bi-Weekly</option>
              </select>
            </div>

            <div>
              <label className="font-bold">Quantity</label>
              <input type="number" {...register("quantity")} placeholder="Enter quantity" className="border px-2 py-4 rounded w-full" />
            </div>

            <div className="flex gap-4">
              <div className="flex-1">
                <label className="font-bold">Start Date</label>
                <input {...register("startDate")} type="date" className="border px-2 py-4 rounded w-full" />
              </div>
              <div className="flex-1">
                <label className="font-bold">End Date</label>
                <input {...register("endDate")} type="date" className="border px-2 py-4 rounded w-full" />
              </div>
            </div>

            <p className="font-bold">Payment Frequency: only have 1x payment</p>
          </section>
        );

      case 3:
          return (
                 <section className="flex flex-col w-full justify-center items-center">
                   <Image src="/images/cart.png" height={700} width={700} alt="cart" />
                   <p className="text-black font-bold text-2xl">The total price due to start the service select is $360</p>
                 </section>
               );

      case 4:
      return (
          <section className="mt-8 py-6 flex flex-col">
            <h2 className="text-xl font-bold mb-6">LAST SECTION</h2>

            <div className="border border-red-500 rounded-md p-4 mb-6">
              <h3 className="text-lg font-bold mb-3">BILLING ADDRESS</h3>
              <p><span className="font-bold">First Name:</span> Kurt</p>
              <p><span className="font-bold">Last Name:</span> Metzger</p>
              <p><span className="font-bold">Address:</span> 7520 hwy 51, minocqua, WI 60046</p>
              <p><span className="font-bold">Email:</span> kurtam@lakelanddisposal.com</p>
              <p><span className="font-bold">Phone Number:</span> 847848046</p>
            </div>

            <div className="border border-red-500 rounded-md p-4 mb-6">
              <h3 className="text-lg font-bold mb-3">SHIPPING ADDRESS</h3>
              <p><span className="font-bold">First Name:</span> Kurt</p>
              <p><span className="font-bold">Last Name:</span> Metzger</p>
              <p><span className="font-bold">Address:</span> 7520 hwy 51, minocqua, WI 60046</p>
              <p><span className="font-bold">Email:</span> kurtam@lakelanddisposal.com</p>
              <p><span className="font-bold">Phone Number:</span> 847848046</p>
            </div>

            <div className="flex flex-col gap-3">
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                <span>Service and billing address are the same</span>
              </label>

              <label className="flex items-center gap-2">
                <input type="checkbox" />
                <span>Agree with receiving text messages on your cell phone</span>
              </label>

              <label className="flex items-center gap-2">
                <input type="checkbox" />
                <span>Agree with receiving Emails</span>
              </label>
            </div>
          </section>
        );

      default:
        return null;
    }
  };

  if (activeStep === steps.length) {
    return (
      <Box
        sx={{ height: "400px" }}
        className="w-full p-6 shadow-md border rounded-lg flex flex-col gap-20 bg-white container "
      >
        <CustomStepper steps={steps} activeStep={steps.length} />
        <h2 className=" text-5xl text-center mt-10 mb-5 ">
          Thank You for SignUp
        </h2>
      </Box>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full justify-center p-6 shadow-md border rounded-lg flex flex-col gap-6 bg-white"
    >
      <CustomStepper steps={steps} activeStep={activeStep} />
      <Box sx={{ mt: 2 }}>{renderStepContent(activeStep)}</Box>

      <div className="flex justify-between pt-4">
        {activeStep === 0 ? (
          <Button disabled sx={{ color: "gray", border: "none" }}>
            Back
          </Button>
        ) : activeStep === 1 ? (
          <Button
            onClick={handleBack}
            sx={{ backgroundColor: "black", color: "white" }}
            className="bg-black text-white"
          >
            Change Address
          </Button>
        ) : (
          <Button
            onClick={handleBack}
            sx={{ color: "white", backgroundColor: "black" }}
            className="bg-black text-white"
          >
            Back
          </Button>
        )}

        {activeStep === 0 ? (
          <Button
            className="bg-black text-white hover:bg-app_primary"
            variant="contained"
            sx={{ backgroundColor: "black" }}
            onClick={handleNext}
            type="button"
          >
            Next
          </Button>
        ) : activeStep === 1 || activeStep === 2 || activeStep === 3 ? (
          <Button
            sx={{ backgroundColor: "black" }}
            variant="contained"
            className="bg-black text-white hover:bg-app_primary"
            onClick={(e) => {
              e.preventDefault();
              handleNext();
            }}
            type="button"
          >
            Confirm
          </Button>
        ) : activeStep === 4 ? (
          <Button
            type="submit"
            variant="contained"
            sx={{ backgroundColor: "black" }}
            className="hover:bg-app_primary"
          >
            Finish
          </Button>
        ) : null}
      </div>
    </form>
  );
}












// // Replace your existing getFullAddress function with this improved version:

// const getFullAddress = () => {
//   if (!billingSame) {
//     // Build billing address with all available components
//     const billingParts = [
//       watch("billingDirection1"),
//       watch("billingAddressNumber"),
//       watch("billingStreet"),
//       watch("billingSuffix"),
//       watch("billingDirection2"),
//       watch("billingCity"),
//       watch("billingState"),
//       watch("billingZip"),
//     ].filter(part => part && part.trim() !== ""); // Filter out empty/null values
    
//     return billingParts.join(" ");
//   }
  
//   // Build service address with all available components
//   const serviceParts = [
//     watch("direction1"),
//     watch("addressNumber"),
//     watch("street"),
//     watch("suffix"),
//     watch("direction2"),
//     watch("city"),
//     watch("state"),
//     watch("zip"),
//   ].filter(part => part && part.trim() !== ""); // Filter out empty/null values
  
//   return serviceParts.join(" ");
// };

// // Alternative version that formats the address more traditionally:
// const getFullAddressFormatted = () => {
//   if (!billingSame) {
//     const parts = [];
    
//     // Street address line
//     const streetParts = [
//       watch("billingDirection1"),
//       watch("billingAddressNumber"),
//       watch("billingStreet"),
//       watch("billingSuffix"),
//       watch("billingDirection2")
//     ].filter(part => part && part.trim() !== "");
    
//     if (streetParts.length > 0) {
//       parts.push(streetParts.join(" "));
//     }
    
//     // City, State ZIP
//     const cityStateZip = [
//       watch("billingCity"),
//       watch("billingState"),
//       watch("billingZip")
//     ].filter(part => part && part.trim() !== "").join(", ");
    
//     if (cityStateZip) {
//       parts.push(cityStateZip);
//     }
    
//     return parts.join(", ");
//   }
  
//   // Service address
//   const parts = [];
  
//   // Street address line
//   const streetParts = [
//     watch("direction1"),
//     watch("addressNumber"),
//     watch("street"),
//     watch("suffix"),
//     watch("direction2")
//   ].filter(part => part && part.trim() !== "");
  
//   if (streetParts.length > 0) {
//     parts.push(streetParts.join(" "));
//   }
  
//   // City, State ZIP
//   const cityStateZip = [
//     watch("city"),
//     watch("state"),
//     watch("zip")
//   ].filter(part => part && part.trim() !== "").join(", ");
  
//   if (cityStateZip) {
//     parts.push(cityStateZip);
//   }
  
//   return parts.join(", ");
// };


// <OpenStreetMap2 address={getFullAddressFormatted()} />