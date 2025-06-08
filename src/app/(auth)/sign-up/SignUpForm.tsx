"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { User2Icon, KeyIcon, MailIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

import ButtonLoading from "@/components/controls/ButtonLoading";
import FieldInput from "@/components/controls/FieldInput";
import { Form } from "@/components/ui/form";

import { SignupSchema, signupSchema } from "../schema/authschema";

const useSignupHook = () => {
  const form = useForm<SignupSchema>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const handleSubmit = (values: SignupSchema) => {
    console.log("Sign up form submitted with values:", values);
  };

  return {
    form,
    handleSubmit,
  };
};

const SignUpForm = () => {
  const { form, handleSubmit } = useSignupHook();

  return (
    <section className="mt-4 md:mt-8 lg:mt-12 max-w-md mx-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <div className="py-4">
            <FieldInput
              name="username"
              iconRight={User2Icon}
              control={form.control}
              type="text"
              inputClass="py-3 px-4"
              placeholder="Enter your username"
            />
          </div>
          <div className="py-4">
            <FieldInput
              name="email"
              iconRight={MailIcon}
              control={form.control}
              type="email"
              inputClass="py-3 px-4"
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
            Sign Up
          </ButtonLoading>
        </form>
      </Form>
      <p className="paragraph-regular text-dark100_light900 py-3">
        Already have an account?{" "}
        <Link
          className="text-primary-500 hover:text-primary-600 transition-colors duration-200"
          href="/sign-in"
        >
          Sign In
        </Link>
      </p>
    </section>
  );
};

export default SignUpForm;
