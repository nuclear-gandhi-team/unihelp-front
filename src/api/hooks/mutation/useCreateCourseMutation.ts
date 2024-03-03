"use client";

import { useMutation } from "react-query";
import { toast } from "sonner";

import { Courses } from "@/api/services/courses";
import { CourseData } from "@/api/types/course-data";

const useCreateCourseMutation = ({
  onSuccessfulCallback,
}: {
  onSuccessfulCallback?: () => void;
}) => {
  const { mutate, isLoading, isError, data } = useMutation<
    any,
    Error,
    CourseData
  >((courseData: CourseData) => Courses.postAddCourse(courseData), {
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

export default useCreateCourseMutation;
