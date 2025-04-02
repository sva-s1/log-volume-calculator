// src/scripts/calculatorLogic.ts

export interface CalculatorParams {
  deviceCount: number;
}

export function calculateLogs({ deviceCount }: CalculatorParams) {
  // Basic example calculation
  const eps = deviceCount * 50;
  const dailyEvents = eps * 86400;
  const dailyGB = (dailyEvents * 0.5) / (1024 * 1024);

  return {
    eps,
    dailyGB,
  };
}
