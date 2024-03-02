"use client";

import { useMutation } from "react-query";
import { toast } from "sonner";

import { User } from "@/api/services/user";
import { StudentRegistrationCredentials } from "@/api/types/registration-student-credentials";

const useStudentRegisterMutation = ({
  onSuccessfulCallback,
}: {
  onSuccessfulCallback?: () => void;
}) => {
  const { mutate, isLoading, isError } = useMutation(
    (registerData: StudentRegistrationCredentials) =>
      User.postStudentRegistrationCredentials(registerData),
    {
      onSuccess: () => {
        toast("Account was created, you need only to login");
        if (onSuccessfulCallback) {
          onSuccessfulCallback();
        }
      },
      onError: (error: any) => {
        toast(`Failed to create account: ${error.response.data.error}`);
      },
    },
  );

  return { mutate, isLoading, isError };
};

export default useStudentRegisterMutation;
