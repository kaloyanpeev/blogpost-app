import styled from "styled-components";
import { lightModeColors } from "../utils/colors";

export const StyledSignInPageCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  background-color: ${lightModeColors.textColor};
  color: ${lightModeColors.primaryBgColor};
  padding: 20px;
  border-radius: 10px;
  margin: 0 auto;
  margin-top: 100px;
  gap: 20px;
  > br {
    color: white;
  }
  > h1 {
    margin: 0 auto;
  }
`;
