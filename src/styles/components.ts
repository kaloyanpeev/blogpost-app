import styled, { css } from "styled-components";
import { fonts } from "./fontSizes";

export const Button = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  font-weight: ${fonts.weight.semiBold};
  font-family: ${fonts.family.main};
  cursor: pointer;
  font-size: ${fonts.size.medium};
  min-height: 35px;
  padding: 0 16px;
  text-align: center;
  outline: none;
  border: none;
  width: fit-content;
`;
