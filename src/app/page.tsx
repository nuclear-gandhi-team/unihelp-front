"use client";

import Link from "next/link";
import { Line, LineChart, ResponsiveContainer } from "recharts";

import { buttonVariants } from "@/components/ui/button";
import { data } from "@/lib/const/random-chart";

const Page = () => (
  <div className="h-screen flex flex-col justify-center items-center gap-5">
    <h1 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      UniHelp: unique student experience
    </h1>
    <p className="text-xl text-muted-foreground">
      UniHelp is a platform for students and teachers to help each other out
    </p>
    <Link
      className={buttonVariants({ variant: "default" })}
      href="/auth/register-student"
    >
      Get started
    </Link>
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
        <Line dataKey="total" stroke="black" type="monotone" />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default Page;
