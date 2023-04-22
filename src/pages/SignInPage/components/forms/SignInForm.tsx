import React from "react";
import { Field, Formik } from "formik";
import { StyledForm, StyledFormContainer, StyledLogInButton } from "./SIgnInForm.styles";

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
      >
        {({ handleSubmit }) => (
          <StyledForm onSubmit={handleSubmit}>
            <label htmlFor="email">E-mail</label>
            <Field name="email" type="email" placeholder="Type your e-mail" />
            <label htmlFor="email">Password</label>
            <Field name="password" type="password" placeholder="Type your password" />
            <StyledLogInButton type="submit">Log In</StyledLogInButton>
          </StyledForm>
        )}
      </Formik>
    </StyledFormContainer>
  );
};

export default SignInForm;
