import axiosInstance from "@/api/axios-wrapper";
import { ChangeName } from "@/api/types/change-name";
import { ChangePassword } from "@/api/types/change-password";
import { LoginCredentials } from "@/api/types/login-credentials";
import { StudentRegistrationCredentials } from "@/api/types/registration-student-credentials";
import { TeacherRegistrationCredentials } from "@/api/types/registration-teacher-credentials";

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

  static putChangeName = async (data: ChangeName) => {
    const response = await axiosInstance.put("/users/update-name", data);
    return response.data;
  };

  static putChangePassword = async (data: ChangePassword) => {
    const response = await axiosInstance.put("/users/update-password", data);
    return response.data;
  };
}
