import React from "react";
import { useForm } from "react-hook-form";
import "./Form.css";
const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    await new Promise((resolve) => {
      setTimeout(resolve, 5000);
    });
    console.log(data);
  };
  return (
    <div className="form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>FirstName</label>
        <input {...register("FirstName", { required: true, maxLength: 20 })} />
        <br />
        <label>MiddleName</label>
        <input {...register("MiddleName", { required: true })} />
        <br />
        <label>LastName</label>
        <input {...register("LastName", { required: true })} />
        {errors.LastName && (
          <p className="form-error">{errors.LastName.message}</p>
        )}
        <br />
        <label>Gmail</label>
        <input
          {...register("email", {
            required: true,
            pattern: /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}
        <br />
        <input
          type="submit"
          disabled={isSubmitting}
          value={isSubmitting ? "Submitting" : "Submit"}
        />
        <br />
      </form>
    </div>
  );
};

export default Form;
