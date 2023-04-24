import * as yup from "yup";

const SignupSchema = yup.object().shape({
  password: yup.string().min(6).required(),
  email: yup.string().email().required(),
});

export default SignupSchema;
