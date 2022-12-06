import React, { ReactNode } from "react";

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  isLoading?: boolean;
  className?: string;
  loadingMessage?: string;
  loading?: string;
  loadingStyle?: string;
}

function Button(props: Props) {
  const {
    children,
    className = "",
    isLoading,
    loadingStyle,
    loadingMessage,
    ...rest
  } = props;

  return (
    <button
      type="button"
      className={`text-base md:px-10 px-3 py-3 rounded-md ${className}`}
      {...rest}
      disabled={isLoading}
    >
      {isLoading ? (
        <p className={`${loadingStyle || "text-white xl:text-lg font-medium"}`}>
          <span className="mr-2">
            <i className="fa fa-spinner fa-spin" aria-hidden="true" />
          </span>
          {loadingMessage || "Chargement..."}
        </p>
      ) : (
        children
      )}
    </button>
  );
}

export function PrimaryButton(props: Props) {
  const {
    children,
    className = "",
    isLoading,
    loadingMessage,
    ...rest
  } = props;

  return (
    <Button
      className={` tracking-wide font-semibold bg-primary text-gray-100 w-full py-4 flex items-center justify-center ${className}`}
      {...rest}
      disabled={isLoading}
    >
      {isLoading ? (
        <p className="xl:text-lg font-medium text-white">
          <span className="mr-2">
            <i className="fa fa-spinner fa-spin" aria-hidden="true" />
          </span>
          {loadingMessage || "Chargement..."}
        </p>
      ) : (
        children
      )}
    </Button>
  );
}

export function SecondaryButton(props: Props) {
  const { children, className = "", isLoading, ...rest } = props;

  return (
    <Button
      className={` tracking-wide font-semibold bg-secondary text-white w-full py-4 flex items-center justify-center ${className}`}
      {...rest}
      disabled={isLoading}
    >
      {children}
    </Button>
  );
}

export default Button;
