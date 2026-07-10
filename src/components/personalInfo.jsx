function PersonalInfo({ register, errors, nextStep }) {
  return (
    <div>
      <h2>Personal Information</h2>

      <input
        type="text"
        placeholder="Enter Name"
        {...register("name")}
      />
      {errors.name && (
        <p style={{ color: "red" }}>{errors.name.message}</p>
      )}

      <br />

      <input
        type="email"
        placeholder="Enter Email"
        {...register("email")}
      />
      {errors.email && (
        <p style={{ color: "red" }}>{errors.email.message}</p>
      )}

      <br />

      <button type="button" onClick={nextStep}>
        Next
      </button>
    </div>
  );
}

export default PersonalInfo;