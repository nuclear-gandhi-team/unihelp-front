"use client";

import { useMutation } from "react-query";
import Cookies from "js-cookie";
import { toast } from "sonner";

import { User } from "@/api/services/user";
import { LoginCredentials, LoginResponse } from "@/api/types/login-credentials";

const useLoginMutation = ({
  onSuccessfulCallback,
}: {
  onSuccessfulCallback?: () => void;
}) => {
  const { mutate, isLoading, isError, data } = useMutation<
    LoginResponse,
    Error,
    LoginCredentials
  >((loginData: LoginCredentials) => User.postLoginCredentials(loginData), {
    onSuccess: (data) => {
      Cookies.set("jwtToken", data.token, {
        secure: true,
        sameSite: "strict",
      });
      Cookies.set("role", data.role, {
        secure: true,
        sameSite: "strict",
      });
      toast("Login successful");
      if (onSuccessfulCallback) {
        onSuccessfulCallback();
      }
    },
    onError: (error: any) => {
      toast(`Failed to log in: ${error.response.data.error}`);
    },
  });

  return { mutate, isLoading, isError, data };
};

export default useLoginMutation;
