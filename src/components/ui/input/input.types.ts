export interface InputFieldProps {
  error?: string;
}

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: string;
  error: string;
}
