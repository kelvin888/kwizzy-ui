import { render } from "@testing-library/react";
import { type ReactNode } from "react";
import { ToastContainer } from "react-toastify";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const renderwithtoastify = (component: ReactNode) => {
  return (
    render(
      <div>
        <ToastContainer />
        {component}
      </div>
    )
  );
};