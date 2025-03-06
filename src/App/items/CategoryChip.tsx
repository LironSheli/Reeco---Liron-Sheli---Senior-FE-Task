import { CategoryChipWrapper } from "./styles";

interface CategoryChipProps {
  name: string;
}

export const CategoryChip = ({ name }: CategoryChipProps) => (
  <CategoryChipWrapper>{name}</CategoryChipWrapper>
);
