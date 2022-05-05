import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

const steps = [
  {
    label: 'Setup Junior'},
  {
    label: 'Setup Pleno'},
  {
    label: 'Setup Senior'},
];

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ maxWidth: 800 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 2 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
            <form>
                {activeStep === 0 &&
                   <>
                        <img 
                            src='https://i.pinimg.com/originals/7b/15/68/7b1568d069c17c83493557d536858343.jpg' 
                            alt="pic"
                        />
                        <input type="text" placeholder='Opine sobre este setup' /> <br></br>
                        <input type="number" placeholder='Dê sua nota de 0 a 10' />
                    </>
                }
                {activeStep === 1 &&
                    <>
                        <img 
                            src='https://i.ytimg.com/vi/MVzZ68TlecM/maxresdefault.jpg' 
                            alt="pic"
                        />
                        <input type="text" placeholder='Opine sobre este setup' /> <br></br>
                        <input type="number" placeholder='Dê sua nota de 0 a 10' />
                    </>
                }   
                
                {activeStep === 2 &&
                    <>
                        <img 
                            src='https://i.ytimg.com/vi/ur3YjN7a8Qw/maxresdefault.jpg' 
                            alt="pic"
                        />
                        
                        <input type="text" placeholder='Opine sobre este setup' /> <br></br>
                        <input type="number" placeholder='Dê sua nota de 0 a 10' />
                    </>
                }
            </form>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
}