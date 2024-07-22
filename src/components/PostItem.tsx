import { useRecoilState } from "recoil";
import { postListState } from "../atoms/postListState";
import { FC } from "react";

type PostItemProps = {
  post: string;
};

export const PostItem: FC<PostItemProps> = ({ post }) => {
  const [, setPostList] = useRecoilState(postListState);
  return (
    <li className="post-item">
      {post}
      <button
        onClick={() => setPostList((prev) => prev.filter((p) => p !== post))}
      >
        Delete
      </button>
    </li>
  );
};
