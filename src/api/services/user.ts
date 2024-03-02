import axiosInstance from "@/api/axios-wrapper";
import { LoginCredentials } from "@/api/types/login-credentials";
import {
  StudentRegistrationCredentials,
  TeacherRegistrationCredentials,
} from "@/api/types/registration-student-credentials";

export class User {
  static postStudentRegistrationCredentials = async (
    data: StudentRegistrationCredentials,
  ) => {
    const response = await axiosInstance.post("/users/register-student", data);
    return response.data;
  };

  static postTeacherRegistrationCredentials = async (
    data: TeacherRegistrationCredentials,
  ) => {
    const response = await axiosInstance.post("/users/register-teacher", data);
    return response.data;
  };

  static postLoginCredentials = async (data: LoginCredentials) => {
    const response = await axiosInstance.post("/users/login", data);
    return response.data;
  };
}
