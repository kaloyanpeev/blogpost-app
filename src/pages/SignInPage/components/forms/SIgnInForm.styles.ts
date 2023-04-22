import styled from "styled-components";
import { Button } from "../../../../styles/components";
import { fonts } from "../../../../styles/fontSizes";
import { lightModeColors } from "../../../../utils/colors";

export const StyledFormContainer = styled.div`
  width: 100%;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  > input {
    margin-bottom: 20px;
    background: transparent;
    border: none;
    padding: 10px;
    padding-left: 0px;
    border-bottom: 1px solid white;
    color: ${lightModeColors.primaryBgColor};
  }
  
`;

export const StyledLogInButton = styled.button`
  ${Button}
  width:200px;
  border-radius: 20px;  
  margin: 0 auto;
`;
