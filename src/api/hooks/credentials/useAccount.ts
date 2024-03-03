import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const useAccount = () => {
  const router = useRouter();
  const token = Cookies.get("jwtToken");
  const role = Cookies.get("role");

  const redirectToLogin = () => {
    if (!token) {
      setTimeout(() => router.push("/auth/login"), 50);
    }
  };

  const checkRoleCredentials = (expectedRole: "Student" | "Teacher") => {
    if (role !== expectedRole) {
      router.push("/");
    }
    redirectToLogin();
  };

  return {
    token,
    role,
    check: {
      checkCredentials: redirectToLogin,
      checkStudentCredentials: () => checkRoleCredentials("Student"),
      checkTeacherCredentials: () => checkRoleCredentials("Teacher"),
    },
  };
};

export default useAccount;
