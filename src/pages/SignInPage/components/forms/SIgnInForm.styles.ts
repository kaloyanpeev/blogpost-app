import styled from "styled-components";
import { Button } from "../../../../styles/components";
import { fonts } from "../../../../styles/fontSizes";
import { lightModeColors } from "../../../../utils/colors";
import { FlexboxColumn } from "../../../../styles/layout";

export const StyledFormContainer = styled.div`
  width: 100%;
`;

export const StyledForm = styled.form`
  ${FlexboxColumn}
  > input {
    margin-bottom: 20px;
    background: transparent;
    border: none;
    padding: 10px;
    padding-left: 0px;
    border-bottom: 1px solid ${lightModeColors.fdsgray30};
    color: ${lightModeColors.fdsprimarytext};
  }
`;

export const StyledLogInButton = styled.button`
  ${Button}
  width:200px;
  color: ${lightModeColors.fdsgray05};
  background: ${lightModeColors.fdsprimarytext};
  border-radius: 20px;
  margin: 0 auto;
  transition: all 0.1s ease-in-out !important;
  &:disabled {
    background: ${lightModeColors.fdsgray70};
    cursor: default;
  }
  &:hover:enabled {
    filter: drop-shadow(0px 0px 4px ${lightModeColors.fdsgray45});
  }
`;
