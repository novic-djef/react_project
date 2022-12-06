import { RegisterOptions, useFormContext } from "react-hook-form";

interface Props {
  name: string;
}

export default function ErrorMessage({ name }: Props) {
  const {
    formState: { errors },
  } = useFormContext();

  function getErrorMessage({
    type,
    message,
  }: {
    type: keyof RegisterOptions;
    message: string;
  }): string {
    if (message) {
      return message;
    }

    switch (type) {
      case "required":
        return `${name.toUpperCase()} is required`;

      case "maxLength":
        return `${name.toUpperCase()} is too long`;
      case "minLength":
        return `${name.toUpperCase()} is too short`;

      default:
        return "error";
    }
  }

  if (errors[`${name}`]) {
    return (
      <p className="text-danger mt-2 text-sm">
        {/* @ts-ignore */}
        {getErrorMessage(errors[`${name}`])}
      </p>
    );
  }
  return null;
}
