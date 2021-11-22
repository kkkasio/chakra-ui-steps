import * as React from 'react';
type UseSteps = {
  initialStep: number;
};

type StateValue = 'loading' | 'error' | undefined;


export function useSteps({ initialStep }: UseSteps) {
  const [activeStep, setActiveStep] = React.useState(initialStep);

  const [stepState, setStepState] = React.useState<StateValue>();


  const nextStep = () => {
    setActiveStep(prev => prev + 1);
  };

  const prevStep = () => {
    setActiveStep(prev => prev - 1);
  };

  const reset = () => {
    setActiveStep(initialStep);
  };

  const setStep = (step: number) => {
    setActiveStep(step);
  };

  const changeStepState = (value: StateValue) => {
    setStepState(value);
  }

  return { nextStep, prevStep, reset, setStep, activeStep, stepState, changeStepState };
}
