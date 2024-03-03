"use client";

import { useRouter } from "next/navigation";

import useAccount from "@/api/hooks/credentials/useAccount";
import StudentPage from "@/app/(main)/main/(components)/studentPage";
import TeacherPage from "@/app/(main)/main/(components)/teacherPage";

const Page = () => {
  const account = useAccount();
  const router = useRouter();

  if (account.role === "Teacher") {
    return <TeacherPage />;
  } else if (account.role === "Student") {
    return <StudentPage />;
  } else router.push("/auth/login");
};

export default Page;
