"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PlusCircle } from "lucide-react";
import { z } from "zod";

import useAddToCourseMutation from "@/api/hooks/mutation/useAddToCourseMutation";
import useCreateCourseMutation from "@/api/hooks/mutation/useCreateCourseMutation";
import useAllTeacherCoursesQuery from "@/api/hooks/query/useAllTeacherCoursesQuery";
import MainSkeleton from "@/components/skeleton/main-skeleton";
import { columns } from "@/components/tables/teacher-courses-table/columns";
import { DataTable } from "@/components/tables/teacher-courses-table/data-table";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const Page = () => {
  const TeacherModalSchemaCreate = z.object({
    className: z.string().min(1, { message: "Class name is required" }),
    classDescription: z
      .string()
      .min(1, { message: "Class description is required" }),
    classesNumber: z
      .string()
      .transform((value) => parseInt(value, 10))
      .refine((value) => !isNaN(value) && value >= 1, {
        message: "You need to add the number of hours in this course",
      }),
  });
  const TeacherModalSchemaAdd = z.object({
    email: z.string().min(1, { message: "Class name is required" }),
  });
  const [open, setOpen] = useState(false);
  const formCreate = useForm<z.infer<typeof TeacherModalSchemaCreate>>({
    resolver: zodResolver(TeacherModalSchemaCreate),
  });

  const formAdd = useForm<z.infer<typeof TeacherModalSchemaAdd>>({
    resolver: zodResolver(TeacherModalSchemaAdd),
  });
  const [teacherCourses, isLoading] = useAllTeacherCoursesQuery({});

  const { mutate: courseData } = useCreateCourseMutation({});
  const { mutate: studentEmail } = useAddToCourseMutation({});

  const handleSubmitCreate = (
    data: z.infer<typeof TeacherModalSchemaCreate>,
  ) => {
    courseData({
      className: data.className,
      classDescription: data.classDescription,
      classesNumber: data.classesNumber,
    });
  };
  if (isLoading) {
    return <MainSkeleton />;
  }

  const handleSubmitAdd = (data: z.infer<typeof TeacherModalSchemaAdd>) => {
    studentEmail({
      classId: 1,
      email: data.email,
    });
  };

  return (
    <div className="grid gap-y-5">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Main Page</h2>
        <p className="text-muted-foreground">
          Here you can see all the courses you teach.
        </p>
      </div>
      <div className="flex flex-row justify-between">
        <Form {...formAdd}>
          <form
            onSubmit={formAdd.handleSubmit(handleSubmitAdd)}
            className="space-x-6 flex flex-row justify-between"
          >
            <FormField
              control={formAdd.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="studentmail@example.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Add student to course</Button>
          </form>
        </Form>

        <Dialog open={open}>
          <DialogTrigger asChild>
            <Button
              className="h-9 gap-2 items-center justify-center rounded-lg w-full md:w-fit"
              onClick={() => setOpen(true)}
            >
              <PlusCircle size={16} />
              Create course
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add course</DialogTitle>
              <DialogDescription>You will teach this course</DialogDescription>
            </DialogHeader>
            <Form {...formCreate}>
              <form
                onSubmit={formCreate.handleSubmit(handleSubmitCreate)}
                className="space-y-6"
              >
                <FormField
                  control={formCreate.control}
                  name="className"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel color="black">Course name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Programming basics - 1. Basic constructions"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={formCreate.control}
                  name="classDescription"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel color="black">Course description</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="This is a very interesting and educational course for beginning programmers"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Here you can describe your course to interest students
                      </FormDescription>
                    </FormItem>
                  )}
                />
                <FormField
                  control={formCreate.control}
                  name="classesNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel color="black">Course duration</FormLabel>
                      <FormControl>
                        <Input placeholder="7" {...field} />
                      </FormControl>
                      <FormDescription>
                        Add the number of ECTS for this course
                      </FormDescription>
                    </FormItem>
                  )}
                />
                <DialogFooter className="gap-3 sm:gap-0">
                  <DialogClose asChild>
                    <Button
                      variant="ghost"
                      type="button"
                      onClick={() => setOpen(false)}
                    >
                      Cancel
                    </Button>
                  </DialogClose>
                  <Button type="submit">Submit</Button>
                </DialogFooter>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      </div>
      <DataTable columns={columns} data={teacherCourses} />
    </div>
  );
};

export default Page;
