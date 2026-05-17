import type { ChangeEvent, FormEvent, InputHTMLAttributes } from 'react';


export interface HeaderProps {
  userName: string;
  toggleTheme: () => void;
  isDark: boolean;
}

export interface HelloModalProps {
  onSave: (name: string) => void;
  onClose: () => void;
}

export interface FootballProps {
  userName: string;
}

export interface GameResult {
  name: string;
  score: number;
}

export type Choice = 'stone' | 'scissors' | 'paper' | null;


export type InputChangeEvent = ChangeEvent<HTMLInputElement>;
export type FormSubmitEvent = FormEvent<HTMLFormElement>;

export interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {}