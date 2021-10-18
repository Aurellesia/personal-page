import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import css from "./registerform.module.css";
import * as yup from "yup";

const RegisterForm = () => {
  const schema = yup.object().shape({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    email: yup.string().email().required("Email is required"),
    password: yup.string().min(5).max(15).required(),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <div className={css["container"]}>
      <div className={css["title"]}>Sign Up</div>
      <form className={css["form"]} onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          name="firstName"
          placeholder="First name"
          {...register("firstName")}
        />

        {errors?.firstName && (
          <span className={css["error-test"]}>
            {errors?.firstName?.message}
          </span>
        )}
        <input
          type="text"
          name="lastName"
          placeholder="Last name"
          {...register("lastName")}
        />
        {errors?.lastName && (
          <span className={css["error-test"]}>{errors?.lastName?.message}</span>
        )}
        <input
          type="email"
          name="email"
          placeholder="Email"
          {...register("email")}
        />
        {errors?.email && (
          <span className={css["error-test"]}>{errors?.email?.message}</span>
        )}
        <input
          type="password"
          name="password"
          placeholder="Password"
          {...register("password")}
        />
        {errors?.password && (
          <span className={css["error-test"]}>{errors?.password?.message}</span>
        )}
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          {...register("confirmPassword")}
        />
        {errors?.confirmPassword && (
          <span className={css["error-test"]}>
            {errors?.confirmPassword && "Password do not match"}
          </span>
        )}
        <input type="submit" id="submit" value="Sign Up" />
      </form>
    </div>
  );
};

export default RegisterForm;
