import React from "react";
import ReactSelect, { components } from "react-select";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { ChevronDown, Loader2 } from "lucide-react";

interface CustomSelectProps extends React.ComponentProps<typeof ReactSelect> { }

const CustomSelect: React.FC<CustomSelectProps> = (props) => {
  return (
    <ReactSelect
      components={{
        LoadingMessage: () => (
          <div className="">
            <Loader2 className="!h-[4rem]" />
          </div>
        ),
        DropdownIndicator: (indicatorProps) => (
          <components.DropdownIndicator {...indicatorProps}>
            <ChevronDown
              className=""
            />
          </components.DropdownIndicator>
        ),
        NoOptionsMessage: () => (
          <div className="">
            No results found
          </div>
        ),
        ...props.components,
      }}
      classNames={{
        container: () => "",
        control: (state) =>
          twMerge(
            clsx(
              "!h-[4rem] !rounded-[30px] !shadow-sm px-[1rem]",
              {
                "": state.isFocused,
                "!bg-grayscale-5 !pointer-events-auto !cursor-not-allowed":
                  state.isDisabled,
                "ring-danger-100": !!props["aria-invalid"],
              }
            )
          ),
        input: () => "!text-grayscale-50",
        loadingIndicator: () => "",
        indicatorSeparator: () => "",
        option: (state) =>
          clsx(
            "tw flex !cursor-pointer items-center gap-2 rounded-sm !text-sm text-md font-medium",
            {
              " pointer-events-none text-grayscale-50 text-grayscale-50":
                state.isDisabled,
              "!outline-none": state.isFocused,
              "": state.isSelected,
            }
          ),
        menuList: () => "",
        singleValue: (state) =>
          clsx({
            "": state.isDisabled,
          }),
        menu: () => "!shadow-xl !border-0 !rounded-[10px]",
        placeholder: (state) =>
          clsx("!text-grayscale-50", {
            "": !state.isDisabled,
            "": state.isDisabled,
          }),
      }}
      {...props}
    />
  );
};

export default CustomSelect;
