export type StudentRegistrationCredentials = {
  firstName: string;
  lastName: string;
  email: string;
  faculty: string;
  group: string;
  year: number;
  password: string;
  confirmPassword: string;
};

export type TeacherRegistrationCredentials = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};
