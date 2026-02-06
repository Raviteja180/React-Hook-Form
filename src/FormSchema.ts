import * as yup from "yup";

const formSchema = yup.object({
    fullName: yup
        .string()
        .required("Full name is required")
        .min(3, "Minimum 3 characters")
        .max(50, "Maximum 50 characters"),
    email: yup
        .string()
        .required("Email is required")
        .email("Please enter a valid email"),
    phoneNumber: yup
        .string()
        .required("Phone number is required")
        .matches(/^\d{10}$/, "Phone number must be 10 digits"),
    userName: yup
        .string()
        .required("Username is required")
        .min(3, "Username must be at least 3 characters")
        .max(20, "Username must not exceed 20 characters"),
    password: yup
        .string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters")
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, "Password must contain at least one uppercase letter, one lowercase letter, and one number"),
    confirmPassword: yup
        .string()
        .required("Please confirm your password")
        .oneOf([yup.ref("password")], "Passwords must match"),
    gender: yup
        .string()
        .required("Please select your gender")
        .oneOf(["male", "female", "other"], "Invalid gender selection"),
});

export default formSchema;