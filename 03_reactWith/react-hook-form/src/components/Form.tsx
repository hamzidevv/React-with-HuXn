import { useForm, type SubmitHandler } from "react-hook-form";

interface FormData {
  name: string;
  email: string;
  password: string;
}

const Form = () => {
  // register: is used to connect input fields to react hook form.
  // handleSubmit: is a function to handle form submission.
  // errors: contains validation errors for the form.

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onsubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onsubmit)}>
      <div>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          placeholder="Enter your name"
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          {...register("email", { required: "Email is required", pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address"
          } })}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
      </div>
      
      <div>
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          {...register("password", { required: "Password is required", minLength:{
            value: 8,
            message: "Password must be at least 8 characters"
          } })}
        />
        {errors.password && <p style={{ color: "red" }}>{errors.password.message}</p>}
      </div>

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};

export default Form;
