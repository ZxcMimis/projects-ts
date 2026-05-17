import { lazy } from 'react';

export const Calculator = lazy(() => import('./Components/Calculator/Calculator').then(m => ({ default: m.Calculator })));
export const BigNum = lazy(() => import('./Components/BigNum/BigNum').then(m => ({ default: m.BigNum })));
export const Football = lazy(() => import('./Components/Football/Football').then(m => ({ default: m.Football })));
export const Rps = lazy(() => import('./Components/Rps/Rps').then(m => ({ default: m.Rps })));
export const GuessNumber = lazy(() => import('./Components/GuessNumber/GuessNumber').then(m => ({ default: m.GuessNumber })));
export const TimeCalculator = lazy(() => import('./Components/TimeCalculator/TimeCalculator').then(m => ({ default: m.TimeCalculator })));