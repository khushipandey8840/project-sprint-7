function Review({ data, prevStep, handleSubmit }) {
  return (
    <div>
      <h2>Review Details</h2>

      <p><strong>Name:</strong> {data.name}</p>
      <p><strong>Email:</strong> {data.email}</p>
      <p><strong>Username:</strong> {data.username}</p>
      <p><strong>Password:</strong> {data.password}</p>

      <button type="button" onClick={prevStep}>
        Back
      </button>
<button type="submit" style={{ marginLeft: "10px" }}>
  Submit
</button>
    </div>
  );
}

export default Review;