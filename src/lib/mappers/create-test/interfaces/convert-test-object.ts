import { ConvertedQuestion } from "@/lib/mappers/create-test/interfaces/convert-question";

export interface ConvertedTestObject {
  name: string;
  description: string;
  maxPoints: number;
  dateStart: string;
  dateEnd: string;
  classId: number;
  type: string;
  testQuestions: ConvertedQuestion[];
}
