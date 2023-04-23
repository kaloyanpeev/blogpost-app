import React from "react";
import { Field, Formik } from "formik";
import {
  StyledForm,
  StyledFormContainer,
  StyledLogInButton,
} from "./SIgnInForm.styles";
import SignupSchema from "../../../../schemas/logInSchema";

const SignInForm = () => {
  const handleSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <StyledFormContainer>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values, actions) => {
          handleSubmit(values);
          actions.resetForm();
        }}
        validationSchema={SignupSchema}
        validateOnMount={true}
        validateOnChange={true}
      >
        {({ handleSubmit, isValid, values, initialValues }) => (
          <StyledForm onSubmit={handleSubmit}>
            <Field name="email" type="email" placeholder="E-mail" />
            <Field name="password" type="password" placeholder="Password" />
            <StyledLogInButton
              type="submit"
              disabled={
                !isValid ||
                Object.entries(values).toString() ===
                  Object.entries(initialValues).toString()
              }
            >
              Log In
            </StyledLogInButton>
          </StyledForm>
        )}
      </Formik>
    </StyledFormContainer>
  );
};

export default SignInForm;
