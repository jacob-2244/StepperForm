// "use client";

// import React, { useState } from "react";

// const steps = [1, 2, 3, 4, 5]; // number of steps

// export default function TailwindStepper() {
//   const [activeStep, setActiveStep] = useState(0);

//   const handleNext = () => {
//     setActiveStep((prev) => prev + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prev) => prev - 1);
//   };

//   return (
//     <div className="w-full h-screen flex flex-col mt-6">
//       <h2 className="text-2xl text-app_primary text-center font-bold">Seasonal Service Registration </h2>
//       {/* Stepper Header (Centered) */}
//       <div className="flex justify-center items-center mb-8 ">
//         {steps.map((_, index) => (
//           <div key={index} className="flex items-center">
//             {/* Step Circle */}
//             <div
//               className={`w-10 h-10 flex items-center justify-center rounded-full border-2 text-sm font-bold
//                 ${
//                   index < activeStep
//                     ? "bg-app_primary border-app_primary text-white"
//                     : index === activeStep
//                     ? "bg-black border-app_primary text-white"
//                     : "bg-gray-200 border-gray-300 text-gray-600"
//                 }`}
//             >
//               {index < activeStep ? "✓" : index + 1}
//             </div>

//             {/* Connector Line */}
//             {index < steps.length - 1 && (
//               <div
//                 className={`w-16 h-1 ${
//                   index < activeStep ? "bg-app_primary" : "bg-gray-300"
//                 }`}
//               />
//             )}
//           </div>
//         ))}
//       </div>

//       {/* Step Content (Full Width) */}
//       <div className="flex-1 flex items-center justify-center w-full px-6">
//         {activeStep === steps.length ? (
//           <div className="text-center w-full">
//             <p className="mb-4 text-lg font-semibold">
//               All steps completed 🎉
//             </p>
//           </div>
//         ) : (
//           <div className="w-full p-6 border rounded-lg bg-gray-50">
//             <p className="text-gray-700 font-medium text-center">
//               Form content for Step {activeStep + 1}
//             </p>
//           </div>
//         )}
//       </div>

//       {/* Fixed Buttons at Bottom (Hide after Finish) */}
//       {activeStep < steps.length && (
//         <div className="w-full flex justify-between px-6 py-4 border-t bg-white">
//           <button
//             disabled={activeStep === 0}
//             onClick={handleBack}
//             className={`px-4 py-2 rounded-lg ${
//               activeStep === 0
//                 ? "bg-gray-300 text-gray-500 cursor-not-allowed"
//                 : "bg-black text-white hover:bg-app_primary"
//             }`}
//           >
//             Back
//           </button>
//           <button
//             onClick={handleNext}
//             className="px-4 py-2 bg-black text-white rounded-lg hover:bg-app_primary"
//           >
//             {activeStep === steps.length - 1 ? "Finish" : "Next"}
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }




// "use client";

// import React, { useState } from "react";
// import Form2 from "./Form2"; // Import your form

// const steps = [1, 2]; // for now just 2 steps (first div, second div)

// export default function TailwindStepper() {
//   const [activeStep, setActiveStep] = useState(0);

//   const handleNext = () => setActiveStep((prev) => prev + 1);
//   const handleBack = () => setActiveStep((prev) => prev - 1);

//   return (
//     <div className="w-full min-h-screen flex flex-col mt-6">
//       <h2 className="text-2xl text-app_primary text-center font-bold">
//         Seasonal Service Registration
//       </h2>

//       {/* Stepper Header */}
//       <div className="flex justify-center items-center mb-8">
//         {steps.map((_, index) => (
//           <div key={index} className="flex items-center">
//             <div
//               className={`w-10 h-10 flex items-center justify-center rounded-full border-2 text-sm font-bold
//                 ${
//                   index < activeStep
//                     ? "bg-app_primary border-app_primary text-white"
//                     : index === activeStep
//                     ? "bg-black border-app_primary text-white"
//                     : "bg-gray-200 border-gray-300 text-gray-600"
//                 }`}
//             >
//               {index < activeStep ? "✓" : index + 1}
//             </div>
//             {index < steps.length - 1 && (
//               <div
//                 className={`w-16 h-1 ${
//                   index < activeStep ? "bg-app_primary" : "bg-gray-300"
//                 }`}
//               />
//             )}
//           </div>
//         ))}
//       </div>

//       {/* Step Content */}
//       <div className="flex-1 flex items-start justify-center w-full px-6">
//         <div className="w-full max-w-3xl">
//           <Form2 step={activeStep} onNext={handleNext} onBack={handleBack} />
//         </div>
//       </div>
//     </div>
//   );
// }









"use client";

import React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

type StepperProps = {
  steps: number[];
  activeStep: number;
};

export default function CustomStepper({ steps, activeStep }: StepperProps) {
  return (
    
    <Box sx={{ width: "100%" }}>
      <h2 className="text-3xl text-app_primary font-bold text-center">Seasonal Service Registration</h2>
      <Stepper activeStep={activeStep}>
        {steps.map((num) => (
          <Step  key={num}>
    
            <  StepLabel />
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}





