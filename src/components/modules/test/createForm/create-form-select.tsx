import { UseFormReturn } from "react-hook-form";

import { FormControl, FormField, FormItem } from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CreateFormSelect = ({
  id,
  form,
}: {
  id: number;
  form: UseFormReturn<any>;
}) => (
  <FormField
    control={form.control}
    name={`testQuestions.question${id}.correctAnswer`}
    render={({ field }) => (
      <FormItem>
        <Select onValueChange={field.onChange}>
          <FormControl>
            <SelectTrigger>
              <SelectValue placeholder="Choose the correct option" />
            </SelectTrigger>
          </FormControl>
          <SelectContent>
            <SelectItem value="1">Option 1</SelectItem>
            <SelectItem value="2">Option 2</SelectItem>
            <SelectItem value="3">Option 3</SelectItem>
            <SelectItem value="4">Option 4</SelectItem>
          </SelectContent>
        </Select>
      </FormItem>
    )}
  />
);

export default CreateFormSelect;
