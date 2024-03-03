"use client";

import { useMutation } from "react-query";
import { toast } from "sonner";

import useAccount from "@/api/hooks/credentials/useAccount";
import { User } from "@/api/services/user";
import { ChangePassword } from "@/api/types/change-password";

const useChangePasswordMutation = ({
  onSuccessfulCallback,
}: {
  onSuccessfulCallback?: () => void;
}) => {
  const account = useAccount();
  account.check.checkCredentials();
  console.log(account.token);
  const { mutate, isLoading, isError, data } = useMutation<
    any,
    Error,
    ChangePassword
  >(
    (changePasswordData: ChangePassword) =>
      User.putChangePassword(changePasswordData),
    {
      onSuccess: () => {
        toast("Login successful");
        if (onSuccessfulCallback) {
          onSuccessfulCallback();
        }
      },
      onError: (error: any) => {
        toast(`Failed to update password: ${error.response.data.error}`);
      },
    },
  );

  return { mutate, isLoading, isError, data };
};

export default useChangePasswordMutation;
