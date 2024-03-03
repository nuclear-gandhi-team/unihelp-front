"use client";

import useAccount from "@/api/hooks/credentials/useAccount";
import StudentPage from "@/app/(main)/main/(components)/studentPage";
import TeacherPage from "@/app/(main)/main/(components)/teacherPage";

const Page = () => {
  const account = useAccount();

  return (
    <div>{account.role === "Teacher" ? <TeacherPage /> : <StudentPage />}</div>
  );
};

export default Page;
