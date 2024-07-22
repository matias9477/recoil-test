import { useRecoilValue } from "recoil";
import { postListState } from "../atoms/postListState";
import { PostItem } from "./PostItem";

export const PostList = () => {
  const postList = useRecoilValue(postListState);

  return (
    <ul>
      {postList.map((post, index) => (
        <PostItem key={index} post={post} />
      ))}
    </ul>
  );
};
