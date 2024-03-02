"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const RegistrationSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  email: z.string().min(1, { message: "Email is required" }),
  password: z.string().min(3, { message: "Password is required" }),
  passwordConfirmation: z.string().min(3, { message: "Confirm your password" }),
});

const Page = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof RegistrationSchema>>({
    resolver: zodResolver(RegistrationSchema),
  });

  const handleSubmit = () => {};

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="space-y-5 px-32 w-full"
      >
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Create a teacher account
          </h1>
          <p className="text-sm text-muted-foreground">
            Enter your details to create your teacher account.
          </p>
        </div>
        <div className="flex flex-row space-x-6">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="w-7/12">
                <FormLabel color="black">First Name</FormLabel>
                <FormControl>
                  <Input placeholder="Dmytro" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel color="black">Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="Buialo" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel color="black">Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="yourmail@uni.com" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel color="black">Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="••••••••••••" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="passwordConfirmation"
          render={({ field }) => (
            <FormItem>
              <FormLabel color="black">Confirm password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="••••••••••••" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <div className="flex justify-between">
          <Button type="submit">Submit</Button>
          <Button
            variant="ghost"
            type="button"
            onClick={() => router.push("./login")}
          >
            Login
          </Button>
        </div>
        <div className="text-center text-xs">
          You are a student? Register your account
          <Button
            variant="link"
            size="sm"
            type="button"
            className="px-1 font-bold"
            onClick={() => router.push("./register-student")}
          >
            here!
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default Page;
