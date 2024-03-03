import axiosInstance from "@/api/axios-wrapper";
import { CourseData } from "@/api/types/course-data";
import { StudentInvitation } from "@/api/types/student-invitation";
export class Courses {
  static getTeacherCourses = async () => {
    const response = await axiosInstance.get("/classes/get-classes");
    return response.data;
  };

  static getStudentCourses = async () => {
    const response = await axiosInstance.get("/students/classes");
    return response.data;
  };

  static postAddCourse = async (data: CourseData) => {
    const response = await axiosInstance.post("/users/login", data);
    return response.data;
  };

  static postAddStudent = async (data: StudentInvitation) => {
    const response = await axiosInstance.post(
      "/classes/add-student-to-class",
      data,
    );
    return response.data;
  };
}
