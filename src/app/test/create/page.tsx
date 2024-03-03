"use client";

import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import CreateMainInfoForm from "@/components/modules/test/create-main-info-form";
import CreateQuestionButton from "@/components/modules/test/create-question-button";
import CreateQuestionForm from "@/components/modules/test/create-question-form";
import { Button } from "@/components/ui/button";
import { Form, FormLabel } from "@/components/ui/form";
import { convertTestFormat } from "@/lib/mappers/create-test/convert-test-format";

const generateFormSchema = (questionsCount: number) => {
  const testQuestions: { [key: string]: z.ZodTypeAny } = {};
  const questionSchema = z.object({
    question: z
      .string()
      .min(2, "Question title must be at least 2 characters."),
    option1: z.string().min(1, "Option 1 is required."),
    option2: z.string().min(1, "Option 2 is required."),
    option3: z.string().min(1, "Option 3 is required."),
    option4: z.string().min(1, "Option 4 is required."),
    correctAnswer: z.string().min(1, "Correct answer is required."),
  });

  for (let i = 1; i <= questionsCount; i++) {
    const questionKey = `question${i}`;
    testQuestions[questionKey] = questionSchema;
  }

  return testQuestions;
};

const Page = () => {
  const [questionsCount, setQuestionsCount] = useState(0);

  const testQuestions = useMemo(
    () => generateFormSchema(questionsCount),
    [questionsCount],
  );

  const formSchema = z.object({
    title: z.string().min(2, "Title must be at least 2 characters."),
    description: z
      .string()
      .min(2, "Description must be at least 2 characters."),
    maxPoints: z.string().min(1, "Max points must be at least 1."),
    dateStart: z.string(),
    dateEnd: z.string(),
    testQuestions: z.object(testQuestions),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const data = convertTestFormat(values);
    console.log(data);
  };

  return (
    <div className="w-2/3 p-10">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">
          Create your own assignment
        </h2>
        <p className="text-muted-foreground">
          Just add a new question to start.
        </p>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid gap-y-5 mt-5 mb-5"
        >
          <CreateMainInfoForm form={form} />
          <FormLabel>Questions</FormLabel>
          {Array.from({ length: questionsCount }, (_, index) => (
            <CreateQuestionForm key={index} id={index + 1} form={form} />
          ))}
          <CreateQuestionButton
            onClick={() => {
              setQuestionsCount((questionsCount) => questionsCount + 1);
            }}
          />
          <div className="flex justify-end gap-2">
            <Button variant="secondary">Back to course page</Button>
            <Button className="w-1/6" type="submit">
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default Page;
