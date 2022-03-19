import { Card, ChecklistItem } from "./index";

export type Checklist = {
  title: string;
  items: ChecklistItem[];
  card: Card;
};
