import React, { MouseEventHandler } from "react";
import StyledButton from "./Button.styles";

export type ButtonProps = {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  styles?: React.CSSProperties;
  disabled?: boolean;
  text?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const Button: React.FC<ButtonProps> = ({
  size = "md",
  styles,
  variant = "primary",
  disabled = false,
  text,
  onClick,
  ...props
}) => {
  return (
    <StyledButton
      type="button"
      onClick={onClick}
      variant={variant}
      disabled={disabled}
      size={size}
      styles={styles}
      {...props}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
