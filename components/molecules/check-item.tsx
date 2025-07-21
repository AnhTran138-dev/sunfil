import React from "react";

import { Checkbox } from "@/components/ui/checkbox";
import { CheckedState } from "@radix-ui/react-checkbox";
import { HStack } from "../atomic/hstack";
import { Typography } from "../atomic/typography";

interface CheckItemProps {
  label: string;
  count?: number;
  checked: boolean;
  onChange: (checked: CheckedState) => void;
}

const CheckItem: React.FC<CheckItemProps> = ({
  label,
  count,
  checked,
  onChange,
}) => {
  return (
    <HStack
      align="center"
      className="cursor-pointer"
      justify="start"
      gap="gap-2"
    >
      <Checkbox
        checked={checked}
        onCheckedChange={(checked) => onChange(checked)}
        className="h-4 w-4"
      />
      <Typography size="sm" onClick={() => onChange(!checked)}>
        {label}
      </Typography>
      {count !== undefined && (
        <Typography variant="caption" color="muted">
          ({count})
        </Typography>
      )}
    </HStack>
  );
};

export default CheckItem;
