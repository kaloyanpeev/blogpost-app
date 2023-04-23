import styled from "styled-components";
import { lightModeColors } from "../utils/colors";
import { fonts } from "../styles/fontSizes";
import { breakpoints } from "../styles/breakpoints";

export const StyledSignInPage = styled.div`
  margin: 0 auto;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${breakpoints.mobilePortraitSmallMax} {
    margin-top: 0px;
  }
`;

export const StyledSignInPageCard = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  color: ${lightModeColors.fdsprimarytext};
  border: 1px solid ${lightModeColors.fdsgray30};
  border-radius: 1px;
  gap: 20px;

  > br {
    color: white;
  }
  > h1 {
    margin: 0 auto;
  }
  @media ${breakpoints.mobilePortraitSmallMax} {
    width: 100%;
    margin-top: 0px;
    border: none;
    padding: 40px;
  }
`;

export const StyledAlternateSignInDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  > div:nth-child(odd) {
    flex-grow: 1;
    height: 1px;
    background-color: ${lightModeColors.fdsgray30};
  }
  > div:nth-child(2) {
    font-weight: ${fonts.weight.bold};
    margin: 0 18px 0px 18px;
    color: ${lightModeColors.fdsgray70};
  }
`;

export const StyledSignUpCard = styled(StyledSignInPageCard)`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  justify-content: center;
  @media ${breakpoints.mobilePortraitSmallMax} {
    margin-top: 0px;
  }
`;
