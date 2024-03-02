import { UseFormReturn } from "react-hook-form";

import { FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const CreateOptions = ({
  id,
  form,
}: {
  id: number;
  form: UseFormReturn<any>;
}) =>
  Array.from({ length: 4 }, (_, index) => (
    <FormField
      key={index + 1}
      control={form.control}
      name={`testQuestions.question${id}.option${index + 1}`}
      render={({ field }) => (
        <FormItem className="grid gap-y-3">
          <div>
            <FormControl className="mt-2 mb-2">
              <Input placeholder={`Option ${index + 1}`} {...field} />
            </FormControl>
          </div>
        </FormItem>
      )}
    />
  ));

export default CreateOptions;
