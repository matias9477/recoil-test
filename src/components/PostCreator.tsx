import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { postListState } from "../atoms/postListState";
import { FC } from "react";

export const PostCreator: FC = () => {
  const [title, setTitle] = useState<string>("");
  const setPostListState = useSetRecoilState(postListState);

  function handleOnChange({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) {
    setTitle(value);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPostListState((prev) => [...prev, title]);
    setTitle("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type={"text"}
        value={title}
        className="input"
        onChange={handleOnChange}
      />
      <button type="submit">Create Post</button>
    </form>
  );
};
