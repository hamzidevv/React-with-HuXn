import { useForm, type SubmitHandler } from "react-hook-form";
import "../style.css";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  completeAddress: string;
}

const AdvanceForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <div className="form-container">
      <h2>Registration Form</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            {...register("firstName", { required: "First Name is required" })}
          />

          {errors.firstName && (
            <p style={{ color: "red" }}>{errors.firstName.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            {...register("lastName", { required: "Last Name is required" })}
          />

          {errors.lastName && (
            <p style={{ color: "red" }}>{errors.lastName.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
          />

          {errors.email && (
            <p style={{ color: "red" }}>{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            {...register("city", { required: "City is required" })}
          />

          {errors.city && <p style={{ color: "red" }}>{errors.city.message}</p>}
        </div>

        <div>
          <label htmlFor="state">State</label>
          <input
            type="text"
            id="state"
            {...register("state", { required: "State is required" })}
          />

          {errors.state && (
            <p style={{ color: "red" }}>{errors.state.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="zip">Zip</label>
          <input
            type="text"
            id="zip"
            {...register("zip", { required: "Zip is required" })}
          />

          {errors.zip && <p style={{ color: "red" }}>{errors.zip.message}</p>}
        </div>

        <div>
          <label htmlFor="country">Country</label>
          <input
            type="text"
            id="country"
            {...register("country", { required: "Country is required" })}
          />

          {errors.country && (
            <p style={{ color: "red" }}>{errors.country.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="completeAddress">Complete Address</label>
          <input
            type="text"
            id="completeAddress"
            {...register("completeAddress", {
              required: "Complete Address is required",
            })}
          />

          {errors.completeAddress && (
            <p style={{ color: "red" }}>{errors.completeAddress.message}</p>
          )}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AdvanceForm;
