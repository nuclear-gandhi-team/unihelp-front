import { ConvertedQuestion } from "@/lib/mappers/create-test/interfaces/convert-question";
import { ConvertedTestObject } from "@/lib/mappers/create-test/interfaces/convert-test-object";
import { OriginalTestObject } from "@/lib/mappers/create-test/interfaces/original-test-object";

export const convertTestFormat = (
  testObject: OriginalTestObject,
): ConvertedTestObject => {
  const newObject: ConvertedTestObject = {
    name: testObject.title,
    description: testObject.description,
    maxPoints: parseInt(testObject.maxPoints, 10),
    dateStart: testObject.dateStart,
    dateEnd: testObject.dateEnd,
    classId: 1,
    type: "Test",
    testQuestions: [],
  };

  const originalQuestions = testObject.testQuestions;
  for (const key in originalQuestions) {
    if (originalQuestions.hasOwnProperty(key)) {
      const question = originalQuestions[key];
      const newQuestion: ConvertedQuestion = {
        question: question.question,
        answerVariants: [
          question.option1,
          question.option2,
          question.option3,
          question.option4,
        ],
        correctAnswer: question.correctAnswer,
      };
      newObject.testQuestions.push(newQuestion);
    }
  }

  return newObject;
};
