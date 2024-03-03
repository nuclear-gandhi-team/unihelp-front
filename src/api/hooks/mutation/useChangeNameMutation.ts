"use client";

import { useMutation } from "react-query";
import { toast } from "sonner";

import useAccount from "@/api/hooks/credentials/useAccount";
import { User } from "@/api/services/user";
import { ChangeName } from "@/api/types/change-name";

const useChangeNameMutation = ({
  onSuccessfulCallback,
}: {
  onSuccessfulCallback?: () => void;
}) => {
  const account = useAccount();
  account.check.checkCredentials();
  const { mutate, isLoading, isError, data } = useMutation<
    any,
    Error,
    ChangeName
  >((changeNameData: ChangeName) => User.putChangeName(changeNameData), {
    onSuccess: () => {
      toast("Login successful");
      if (onSuccessfulCallback) {
        onSuccessfulCallback();
      }
    },
    onError: (error: any) => {
      toast(`Failed to update name: ${error.response.data.error}`);
    },
  });

  return { mutate, isLoading, isError, data };
};

export default useChangeNameMutation;
