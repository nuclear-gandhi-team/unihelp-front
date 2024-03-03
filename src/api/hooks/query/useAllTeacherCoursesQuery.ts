"use client";

import { useQuery } from "react-query";
import { toast } from "sonner";

import { Courses } from "@/api/services/courses";
import { TeacherCourse } from "@/api/types/teacher-courses";

const useAllTeacherCoursesQuery = ({
  onSuccessCallback,
}: {
  onSuccessCallback?: (data: TeacherCourse[]) => void;
}): [TeacherCourse[] | any, boolean] => {
  const { data, isLoading } = useQuery(
    ["getTeacherCourses"],
    () => Courses.getTeacherCourses(),
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

export default useAllTeacherCoursesQuery;
