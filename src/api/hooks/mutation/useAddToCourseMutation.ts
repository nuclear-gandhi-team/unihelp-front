"use client";

import { useMutation } from "react-query";
import { toast } from "sonner";

import { Courses } from "@/api/services/courses";
import { StudentInvitation } from "@/api/types/student-invitation";

const useAddToCourseMutation = ({
  onSuccessfulCallback,
}: {
  onSuccessfulCallback?: () => void;
}) => {
  const { mutate, isLoading, isError, data } = useMutation<
    any,
    Error,
    StudentInvitation
  >((studentData: StudentInvitation) => Courses.postAddStudent(studentData), {
    onSuccess: () => {
      if (onSuccessfulCallback) {
        onSuccessfulCallback();
      }
    },
    onError: (error: any) => {
      toast(`Failed to add course: ${error.response.data.error}`);
    },
  });

  return { mutate, isLoading, isError, data };
};

export default useAddToCourseMutation;
