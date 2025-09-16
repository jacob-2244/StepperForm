


"use client";
import React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepConnector from "@mui/material/StepConnector";

type StepperProps = {
  steps: number[];
  activeStep: number;
};

export default function CustomStepper({ steps, activeStep }: StepperProps) {
  return (
    <Box sx={{ width: "100%" }}>
      <h2 className="text-3xl text-app_primary font-bold text-center">Seasonal Service Registration</h2>
      <Stepper className="mt-4"
        activeStep={activeStep}

        connector={
          <StepConnector
            sx={{

              "& .MuiStepConnector-line": {
                borderColor: '#000',
                borderTopWidth: 5,
                borderStyle: 'solid',
              },

              "&.Mui-completed .MuiStepConnector-line": {
                borderColor: '#890202',
              },
              "&.Mui-active .MuiStepConnector-line": {
                borderColor: '#890202',
              },
            }}
          />
        }
        sx={{

          '& .MuiStep-root': {
            padding: 0,
          },
        }}
      >
        {steps.map((num) => (
          <Step key={num}>
            <StepLabel
              sx={{
                '& .MuiStepLabel-iconContainer': {
                  paddingRight: 0,
                },
                '& .MuiStepLabel-label': {
                  display: 'none',
                },
              }}
              StepIconComponent={({ active, completed }) => (
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    border: active ? '3px solid #890202' : 'none',
                    backgroundColor: completed ? '#890202' : '#000',
                    color: '#fff',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {completed ? '✓' : num}
                </div>
              )}
            />
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
