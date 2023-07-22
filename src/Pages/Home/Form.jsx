import React from "react";
import { useForm, Controller } from "react-hook-form";

const AddedForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  if (!control) {
    return <div>Loading...</div>;
  }
  const onSubmit = (data) => {
    console.log(data); // You can handle form submission here
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto p-4 bg-white rounded shadow"
    >
      {/* Image */}
      <div className="mb-4">
        <label htmlFor="image" className="block font-medium mb-1">
          Image:
        </label>
        <Controller
          name="image"
          control={control}
          defaultValue=""
          rules={{ required: "Image is required" }}
          render={({ field }) => (
            <input
              {...field}
              type="file"
              className="w-full border rounded py-2 px-3"
            />
          )}
        />
        {errors.image && (
          <p className="text-red-500 text-sm">{errors.image.message}</p>
        )}
      </div>

      {/* College Name */}
      <div className="mb-4">
        <label htmlFor="collegeName" className="block font-medium mb-1">
          College Name:
        </label>
        <Controller
          name="collegeName"
          control={control}
          defaultValue=""
          rules={{ required: "College Name is required" }}
          render={({ field }) => (
            <input {...field} className="w-full border rounded py-2 px-3" />
          )}
        />
        {errors.collegeName && (
          <p className="text-red-500 text-sm">{errors.collegeName.message}</p>
        )}
      </div>

      {/* Admission Dates */}
      <div className="mb-4">
        <label htmlFor="admissionDates" className="block font-medium mb-1">
          Admission Dates:
        </label>
        <Controller
          name="admissionDates"
          control={control}
          defaultValue=""
          rules={{ required: "Admission Dates are required" }}
          render={({ field }) => (
            <input
              {...field}
              type="date"
              className="w-full border rounded py-2 px-3"
            />
          )}
        />
        {errors.admissionDates && (
          <p className="text-red-500 text-sm">
            {errors.admissionDates.message}
          </p>
        )}
      </div>

      {/* Events */}
      <div className="mb-4">
        <label htmlFor="events" className="block font-medium mb-1">
          Events:
        </label>
        <Controller
          name="events"
          control={control}
          defaultValue=""
          rules={{ required: "Events are required" }}
          render={({ field }) => (
            <textarea {...field} className="w-full border rounded py-2 px-3" />
          )}
        />
        {errors.events && (
          <p className="text-red-500 text-sm">{errors.events.message}</p>
        )}
      </div>

      {/* Research History */}
      <div className="mb-4">
        <label htmlFor="researchHistory" className="block font-medium mb-1">
          Research History:
        </label>
        <Controller
          name="researchHistory"
          control={control}
          defaultValue=""
          rules={{ required: "Research History is required" }}
          render={({ field }) => (
            <textarea {...field} className="w-full border rounded py-2 px-3" />
          )}
        />
        {errors.researchHistory && (
          <p className="text-red-500 text-sm">
            {errors.researchHistory.message}
          </p>
        )}
      </div>

      {/* Sports */}
      <div className="mb-4">
        <label htmlFor="sports" className="block font-medium mb-1">
          Sports:
        </label>
        <Controller
          name="sports"
          control={control}
          defaultValue=""
          rules={{ required: "Sports are required" }}
          render={({ field }) => (
            <textarea {...field} className="w-full border rounded py-2 px-3" />
          )}
        />
        {errors.sports && (
          <p className="text-red-500 text-sm">{errors.sports.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default AddedForm;
