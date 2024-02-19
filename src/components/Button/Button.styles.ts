import styled, { css, CSSObject } from "styled-components";
import colors from "../../tokens/colors";
import sizes from "../../tokens/sizes";
import { ButtonProps } from "./Button";

const StyledButton = styled.button<ButtonProps>`
  /* Base styles */

  align-items: center;
  justify-content: center;
  appearance: none;
  box-sizing: border-box;
  border: none;
  line-height: normal;
  font-size: ${sizes[4].val};
  cursor: pointer;
  font-weight: bold;
  border-radius: 9px;
  display: inline-flex;
  border-color: ${colors.nuetral[5].val};
  border-style: solid;
  border-width: 1px;

  /* Specific styles for each size */

  ${({ size }) =>
    size === "sm"
      ? css`
          padding: ${sizes[1].val} ${sizes[3].val};
        `
      : size === "md"
        ? css`
            padding: ${sizes[2].val} ${sizes[4].val};
          `
        : css`
            padding: ${sizes[3].val} ${sizes[5].val};
          `}

  /* Specific styles for each variant */

  ${({ variant }) => {
    const variantStyles = {
      primary: css`
        background-color: ${colors.nuetral[5].val};
        color: ${colors.nuetral[0].val};

        &:hover {
          background-color: ${colors.nuetral[3].val};
        }
      `,
      secondary: css`
        background-color: ${colors.nuetral[0].val};
        color: ${colors.nuetral[5].val};

        &:hover {
          background-color: ${colors.nuetral[2].val};
        }
      `,
    };

    return variantStyles[variant!];
  }}

  /* Merge custom styles with default styles */

  ${({ styles }) =>
    styles &&
    css`
      ${styles as CSSObject}
    `}
`;

export default StyledButton;
