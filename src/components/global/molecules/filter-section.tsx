import { ChevronDown } from "lucide-react";
import { HStack } from "../atoms/hstack";
import { Typography } from "../atoms/typography";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import CheckItem from "./check-item";

type FilterSectionProps = {
  title: string;
  items: Array<{
    id: string;
    label: string;
    count?: number;
    checked: boolean;
  }>;
  onToggle: (id: string, checked: boolean) => void;
};

export const FilterSection: React.FC<FilterSectionProps> = ({
  title,
  items,
  onToggle,
}) => {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <div className="mb-4">
      <HStack
        className="py-2 border-b cursor-pointer select-none"
        justify="between"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Typography fontWeight="medium" size="md">
          {title}
        </Typography>
        <motion.div
          animate={{ rotate: isOpen ? 0 : 180 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <ChevronDown size={16} />
        </motion.div>
      </HStack>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
            className="mt-2 space-y-2"
          >
            {items.map((item) => (
              <CheckItem
                key={item.id}
                label={item.label}
                count={item.count}
                checked={item.checked}
                onChange={(checked) => onToggle(item.id, !!checked)}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
