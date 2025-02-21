import { Tag } from "@/types/entities/tag";
import { useCallback } from "react";

export default function useExpenseTable() {
  const mapOptions = useCallback((tagList: Tag[], defaultValue: string) => {
    return (
      tagList.map((tag) => ({
        name: tag.name,
        value: tag._id,
        default: tag._id === defaultValue,
      })) || []
    );
  }, []);

  return {
    mapOptions,
  };
}
