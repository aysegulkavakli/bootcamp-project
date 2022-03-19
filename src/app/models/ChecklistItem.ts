import { Checklist } from "./index";

export type ChecklistItem = {
  title: string;
  isChecked: boolean;
  checklist: Checklist;
};
