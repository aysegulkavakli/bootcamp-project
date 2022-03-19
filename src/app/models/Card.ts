import { List, Label, Checklist } from "./index";

export type Card = {
  title: string;
  description: string;
  duedate: Date;
  labels: Label[];
  comments: Comment[];
  list: List;
  checklists: Checklist[];
};
