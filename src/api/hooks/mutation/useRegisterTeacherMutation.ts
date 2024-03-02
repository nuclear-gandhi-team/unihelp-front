"use client";

import { useMutation } from "react-query";
import { toast } from "sonner";

import { User } from "@/api/services/user";
import { TeacherRegistrationCredentials } from "@/api/types/registration-student-credentials";

const useTeacherRegisterMutation = ({
  onSuccessfulCallback,
}: {
  onSuccessfulCallback?: () => void;
}) => {
  const { mutate, isLoading, isError } = useMutation(
    (registerData: TeacherRegistrationCredentials) =>
      User.postTeacherRegistrationCredentials(registerData),
    {
      onSuccess: () => {
        toast("Account was created, you need only to login");
        if (onSuccessfulCallback) {
          onSuccessfulCallback();
        }
      },
      onError: () => {
        toast("Failed to create account, please try again.");
      },
    },
  );

  return { mutate, isLoading, isError };
};

export default useTeacherRegisterMutation;