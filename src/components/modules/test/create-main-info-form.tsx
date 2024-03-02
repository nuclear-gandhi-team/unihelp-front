import { UseFormReturn } from "react-hook-form";

import {
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const CreateMainInfoForm = ({ form }: { form: UseFormReturn<any> }) => (
  <div className="grid gap-y-5">
    <FormField
      control={form.control}
      name="title"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Title</FormLabel>
          <Input {...field} placeholder="Chemistry test" />
        </FormItem>
      )}
    />
    <FormField
      name="description"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Description</FormLabel>
          <Textarea {...field} placeholder="This test checks..." />
        </FormItem>
      )}
    />
    <FormField
      name="maxPoints"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Max points</FormLabel>
          <Input {...field} placeholder="10" type="number" />
          <FormDescription>
            Maximum points that student can achieve during the whole test
          </FormDescription>
        </FormItem>
      )}
    />
    <div className="flex gap-5">
      <FormField
        name="dateStart"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Start date</FormLabel>
            <Input
              {...field}
              placeholder="Date start"
              className="w-[220px]"
              type="date"
            />
          </FormItem>
        )}
      />
      <FormField
        name="dateEnd"
        render={({ field }) => (
          <FormItem>
            <FormLabel>End date</FormLabel>
            <Input
              {...field}
              placeholder="Date end"
              className="w-[220px]"
              type="date"
            />
          </FormItem>
        )}
      />
    </div>
  </div>
);

export default CreateMainInfoForm;
