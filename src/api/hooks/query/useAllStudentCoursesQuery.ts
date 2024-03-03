"use client";

import { useQuery } from "react-query";
import { toast } from "sonner";

import { Courses } from "@/api/services/courses";
import { StudentCourse } from "@/api/types/student-courses";

const useAllStudentCoursesQuery = ({
  onSuccessCallback,
}: {
  onSuccessCallback?: (data: StudentCourse[]) => void;
}): [StudentCourse[] | any, boolean] => {
  const { data, isLoading } = useQuery(
    ["getStudentCourses"],
    () => Courses.getStudentCourses(),
    {
      onSuccess: (data) => {
        if (typeof onSuccessCallback === "function") {
          onSuccessCallback(data);
        }
      },
      onError: () => toast("Failed to load courses"),
    },
  );

  return [data, isLoading];
};

export default useAllStudentCoursesQuery;
