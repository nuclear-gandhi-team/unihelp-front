import { HTMLAttributes } from "react";

import { Button } from "@/components/ui/button";

const CreateQuestionButton = ({
  ...props
}: HTMLAttributes<HTMLButtonElement>) => (
  <div className="w-full h-[150px] flex items-center justify-center border-muted border-2 border-dashed rounded-md">
    <Button variant="outline" {...props}>
      Create question
    </Button>
  </div>
);

export default CreateQuestionButton;
