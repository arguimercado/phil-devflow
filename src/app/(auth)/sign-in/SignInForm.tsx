"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { KeyIcon, User2Icon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

import ButtonLoading from "@/components/controls/ButtonLoading";
import FieldInput from "@/components/controls/FieldInput";
import { Form } from "@/components/ui/form";

import { SigninSchema, signinSchema } from "../schema/authschema";

const useSigninHook = () => {
  const form = useForm<SigninSchema>({
    resolver: zodResolver(signinSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const handleSubmit = (values: SigninSchema) => {
    console.log("Form submitted with values:", values);
  };

  return {
    form,
    handleSubmit,
  };
};

const SignInForm = () => {
  const { form, handleSubmit } = useSigninHook();

  return (
    <section className="mt-4 md:mt-8 lg:mt-12 max-w-md mx-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <div className="py-4">
            <FieldInput
              name="username"
              iconRight={User2Icon}
              control={form.control}
              inputClass="py-3 px-4 "
              placeholder="Enter your email"
            />
          </div>
          <div className="py-4">
            <FieldInput
              name="password"
              control={form.control}
              type="password"
              inputClass="py-3 px-4"
              placeholder="Enter your password"
              iconRight={KeyIcon}
            />
          </div>
          <ButtonLoading
            type="submit"
            loading={false}
            className="w-full primary-gradient !text-light-900"
          >
            Login
          </ButtonLoading>
        </form>
      </Form>
      <p className="paragraph-medium text-dark100_light900 py-3">
        Don&apos;t have an account{" "}
        <Link
          className="text-primary-500 hover:text-primary-600 transition-colors duration-200"
          href="/sign-up"
        >
          Sign Up
        </Link>
      </p>
    </section>
  );
};

export default SignInForm;
