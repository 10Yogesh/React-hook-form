import { useForm } from "react-hook-form";
import CommonInput from "./CommonInput";
import { SubmitHandler } from "react-hook-form";
import React from "react";
import CommonDatePicker from "./CommonDatePicker";
import { Button } from "@chakra-ui/react";

interface FormValues {
  title: string;
  description: string;
  price: string;
}

interface FormProps {
  onSubmit: SubmitHandler<FormValues>;
  initialValue: FormValues;
}

const Form = ({ onSubmit, initialValue }: FormProps) => {
  const {
    handleSubmit,
    control,
    setValue,
    formState: { isSubmitting },
  } = useForm<FormValues>();

  React.useEffect(() => {
    if (initialValue) {
      setValue("title", initialValue.title || "");
      setValue("description", initialValue.description || "");
      setValue("price", initialValue.price || "");
    }
  }, [initialValue, setValue]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <CommonInput control={control} name="title" placeholder="Product Title" />
      <CommonInput
        control={control}
        name="description"
        placeholder="Product Description"
      />
      <CommonInput control={control} name="price" placeholder="Product Price" />
      {/* <CommonDatePicker /> */}
      <Button disabled={isSubmitting} type="submit">
        Submit
      </Button>
      {isSubmitting ? "Submitting..." : ""}
    </form>
  );
};

export default Form;
