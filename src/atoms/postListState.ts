import { atom } from "recoil";

export const postListState = atom({
  key: "postListState",
  default: ["Default atom value."],
});
