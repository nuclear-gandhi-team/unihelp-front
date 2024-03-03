import { UseFormReturn } from "react-hook-form";

import CreateFormSelect from "@/components/modules/test/create-fields/create-form-select";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const CreateQuestionForm = ({
  id,
  form,
}: {
  id: number;
  form: UseFormReturn<any>;
}) => (
  <div className="w-full border-muted border-2 border-dashed rounded-md p-6 grid gap-y-3">
    <FormField
      control={form.control}
      name={`testQuestions.question${id}.question`}
      render={({ field }) => (
        <FormItem>
          <FormLabel>Title</FormLabel>
          <FormControl>
            <Input placeholder="Enter your question title" {...field} />
          </FormControl>
        </FormItem>
      )}
    />
    <div>
      {Array.from({ length: 4 }, (_, index) => (
        <FormField
          key={index + 1}
          control={form.control}
          name={`testQuestions.question${id}.option${index + 1}`}
          render={({ field }) => (
            <FormItem className="grid gap-y-3">
              <div>
                <FormLabel>Option {index + 1}</FormLabel>
                <FormControl className="mt-2 mb-2">
                  <Input placeholder="The answer is..." {...field} />
                </FormControl>
              </div>
            </FormItem>
          )}
        />
      ))}
    </div>
    <CreateFormSelect id={id} form={form} />
  </div>
);

export default CreateQuestionForm;
