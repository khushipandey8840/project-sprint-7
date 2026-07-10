import { useState } from "react";

function AccountDetails({
  register,
  errors,
  nextStep,
  prevStep,
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <h2>Account Details</h2>

      <input
        type="text"
        placeholder="Username"
        {...register("username")}
      />
      {errors.username && (
        <p style={{ color: "red" }}>
          {errors.username.message}
        </p>
      )}

      <br />

      <input
        type={showPassword ? "text" : "password"}
        placeholder="Password"
        {...register("password")}
      />
      {errors.password && (
        <p style={{ color: "red" }}>
          {errors.password.message}
        </p>
      )}

      <br />

      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? "Hide Password" : "Show Password"}
      </button>

      <br />
      <br />

      <button type="button" onClick={prevStep}>
        Back
      </button>

      <button
        type="button"
        onClick={nextStep}
        style={{ marginLeft: "10px" }}
      >
        Next
      </button>
    </div>
  );
}

export default AccountDetails;