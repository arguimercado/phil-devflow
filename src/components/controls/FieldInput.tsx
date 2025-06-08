import type { LucideIcon } from "lucide-react";
import React from "react";
import { Control, FieldValues, Path } from "react-hook-form";

import { FormField, FormMessage } from "../ui/form";
import { Input } from "../ui/input"; // <-- Import shadcn Input

interface FieldInputProps<T extends FieldValues> {
  name: Path<T>;
  label?: string; // Make label optional
  control: Control<T>;
  type?: string;
  placeholder?: string;
  iconRight?: LucideIcon; // Optional Lucide icon component
  inputClass?: string; // <-- Add this line
}

const FieldInput = <T extends FieldValues>({
  control,
  name,
  label, // now optional
  type = "text",
  placeholder,
  iconRight: IconRight,
  inputClass, // <-- Add this line
}: FieldInputProps<T>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <div className="flex flex-col">
          {label && ( // Only render label if provided
            <label htmlFor={field.name} className="text-sm font-medium mb-1">
              {label}
            </label>
          )}
          <div className="relative">
            <Input
              {...field}
              type={type}
              id={field.name}
              placeholder={placeholder}
              className={`
                w-full pr-10 pl-4
                rounded-md
                transition
                bg-white dark:bg-zinc-900
                !text-base
                !py-5
                ${inputClass ?? ""}
              `}
            />
            {IconRight && (
              <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                <IconRight className="w-5 h-5 text-gray-400" />
              </span>
            )}
          </div>
          <FormMessage>{fieldState.error?.message}</FormMessage>
        </div>
      )}
    />
  );
};

export default FieldInput;
