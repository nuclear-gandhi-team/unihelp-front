import { OriginalQuestion } from "@/lib/mappers/create-test/interfaces/original-question";

export interface OriginalTestObject {
  title: string;
  description: string;
  maxPoints: string;
  dateStart: string;
  dateEnd: string;
  testQuestions: {
    [key: string]: OriginalQuestion;
  };
}
