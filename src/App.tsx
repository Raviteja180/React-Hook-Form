import "./App.css";
import { useForm, type SubmitHandler } from "react-hook-form";
import userSchema from "./FormSchema";
import { yupResolver } from "@hookform/resolvers/yup";

interface IFormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  userName: string;
  password: string;
  confirmPassword: string;
  gender: string;
}
function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({
    defaultValues: {
      fullName: "Raviteja",
      email: "",
      phoneNumber: "",
      userName: "",
      password: "",
      confirmPassword: "",
      gender: "",
    },
    resolver: yupResolver(userSchema),
  });
  const onSubmit: SubmitHandler<IFormData> = (data: IFormData) => {
    console.log("formData is :", data);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h2>Personal Information</h2>
          <hr />
          <div>
            <label>Full Name</label>
            <input {...register("fullName")} />
            {errors.fullName && (
              <p style={{ color: "red" }}>{errors.fullName.message}</p>
            )}
          </div>
          <div>
            <label>Email</label>
            <input type="email" {...register("email")} />
            {errors.email && (
              <p style={{ color: "red" }}>{errors.email.message}</p>
            )}
          </div>
          <div>
            <label>Phone Number</label>
            <input {...register("phoneNumber")} />
            {errors.phoneNumber && (
              <p style={{ color: "red" }}>{errors.phoneNumber.message}</p>
            )}
          </div>
        </div>
        <div>
          <h2>Account Details</h2>
          <hr />
          <div>
            <label>User Name</label>
            <input {...register("userName")} />
            {errors.userName && (
              <p style={{ color: "red" }}>{errors.userName.message}</p>
            )}
          </div>
          <div>
            <label>Password</label>
            <input type="password" {...register("password")} />
            {errors.password && (
              <p style={{ color: "red" }}>{errors.password.message}</p>
            )}
          </div>
          <div>
            <label>Confirm Password</label>
            <input type="password" {...register("confirmPassword")} />
            {errors.confirmPassword && (
              <p style={{ color: "red" }}>{errors.confirmPassword.message}</p>
            )}
          </div>
        </div>
        <h2>Preference</h2>
        <hr />
        <h2>Gender</h2>
        <div>
          <input type="radio" id="male" value="male" {...register("gender")} />
          <label htmlFor="male"> Male </label>
        </div>
        <div>
          <input
            type="radio"
            id="female"
            value="female"
            {...register("gender")}
          />
          <label htmlFor="female"> Female </label>
        </div>
        <div>
          <input
            type="radio"
            id="other"
            value="other"
            {...register("gender")}
          />
          <label htmlFor="other"> Other </label>
        </div>
        {errors.gender && (
          <p style={{ color: "red" }}>{errors.gender.message}</p>
        )}
        <button type="submit">Submit</button>
        <p>raviteja is working</p>
      </form>
    </>
  );
}

export default App;
