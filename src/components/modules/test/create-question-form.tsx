import { UseFormReturn } from "react-hook-form";

import CreateFormSelect from "@/components/modules/test/createForm/create-form-select";
import CreateOptions from "@/components/modules/test/createForm/create-options";
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
      <FormLabel>Option</FormLabel>
      <CreateOptions id={id} form={form} />
    </div>

    <div>
      <FormLabel>Correct answer</FormLabel>
      <CreateFormSelect id={id} form={form} />
    </div>
  </div>
);

export default CreateQuestionForm;
