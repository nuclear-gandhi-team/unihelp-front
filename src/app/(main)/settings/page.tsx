"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { z } from "zod";

import useChangeNameMutation from "@/api/hooks/mutation/useChangeNameMutation";
import useChangePasswordMutation from "@/api/hooks/mutation/useChangePasswordMutation";
import PageTitle from "@/components/modules/page-title";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const SettingsPasswordSchema = z.object({
  oldPassword: z
    .string()
    .min(1, { message: "You should know your current password" }),
  newPassword: z.string().min(1, { message: "New password is required" }),
  confirmNewPassword: z
    .string()
    .min(1, { message: "New password confirmation required" }),
});
const SettingsNamedSchema = z.object({
  newFirstName: z.string().min(1),
  newLastName: z.string().min(1),
});

const Page = () => {
  const formPassword = useForm<z.infer<typeof SettingsPasswordSchema>>({
    resolver: zodResolver(SettingsPasswordSchema),
  });
  const formName = useForm<z.infer<typeof SettingsNamedSchema>>({
    resolver: zodResolver(SettingsNamedSchema),
  });

  const { mutate: changeName } = useChangeNameMutation({
    onSuccessfulCallback: () => toast("You changed the name successfully!"),
  });

  const { mutate: changePassword } = useChangePasswordMutation({
    onSuccessfulCallback: () => toast("You changed the password successfully!"),
  });

  const handleSubmitName = (data: z.infer<typeof SettingsNamedSchema>) => {
    changeName({
      newFirstName: data.newFirstName,
      newLastName: data.newLastName,
    });
  };

  const handleSubmitPassword = (
    data: z.infer<typeof SettingsPasswordSchema>,
  ) => {
    changePassword({
      oldPassword: data.oldPassword,
      newPassword: data.newPassword,
      confirmNewPassword: data.confirmNewPassword,
    });
  };

  return (
    <div className="mb-6">
      <PageTitle
        title="Settings"
        description="Here you can manage your account settings"
      />
      <Form {...formName}>
        <form
          onSubmit={formName.handleSubmit(handleSubmitName)}
          className="space-y-4 mt-4"
        >
          <FormField
            control={formName.control}
            name="newFirstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel color="black">First Name</FormLabel>
                <FormControl>
                  <Input className="md:w-2/3" placeholder="Dmytro" {...field} />
                </FormControl>
                <FormDescription>
                  This is usually not a very common occurrence, you can only
                  change your name when you change it on your passport.
                </FormDescription>
              </FormItem>
            )}
          />
          <FormField
            control={formName.control}
            name="newLastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel color="black">Last Name</FormLabel>
                <FormControl>
                  <Input className="md:w-2/3" placeholder="Buialo" {...field} />
                </FormControl>
                <FormDescription>
                  You can change your surname only if you took someone
                  else&lsquo;s and/or changed it in your passport.
                </FormDescription>
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full md:w-fit">
            Save
          </Button>
        </form>
      </Form>
      <Separator className="space-y-4 mt-4 mb-4 md:w-2/3" />
      <Form {...formPassword}>
        <form
          onSubmit={formPassword.handleSubmit(handleSubmitPassword)}
          className="space-y-4 mt-4 mb-8"
        >
          <FormField
            control={formPassword.control}
            name="oldPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel color="black">Current password</FormLabel>
                <FormControl>
                  <Input
                    className="md:w-2/3"
                    type="password"
                    placeholder="••••••••••"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  You cannot use the same password twice
                </FormDescription>
              </FormItem>
            )}
          />
          <FormField
            control={formPassword.control}
            name="newPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel color="black">New password</FormLabel>
                <FormControl>
                  <Input
                    className="md:w-2/3"
                    type="password"
                    placeholder="•••••••••••••••"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={formPassword.control}
            name="confirmNewPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel color="black">Confirm new password</FormLabel>
                <FormControl>
                  <Input
                    className="md:w-2/3"
                    type="password"
                    placeholder="•••••••••••••••"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full md:w-fit">
            Update
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default Page;
