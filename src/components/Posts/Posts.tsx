import React, { useEffect, useState } from "react";
import { auth, firestore } from "../../firebase/clientApp";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { Community } from "../../atoms/communitiesAtom";
import usePosts from "../../hooks/usePosts";
import { Post } from "../../atoms/postsAtom";
import { useAuthState } from "react-firebase-hooks/auth";
import PostItem from "./PostItem";
import { Stack } from "@chakra-ui/react";

type PostsProps = {
  communityData: Community;
};

const Posts: React.FC<PostsProps> = ({ communityData }) => {
  const [user] = useAuthState(auth);
  const [loading, setLoading] = useState(false);
  const {
    postStateValue,
    setPostStateValue,
    onVote,
    onSelectPost,
    onDeletePost,
  } = usePosts();

  const getPosts = async () => {
    try {
      // get posts for this community
      const postQuery = query(
        collection(firestore, "posts"),
        where("communityId", "==", communityData.id),
        orderBy("createdAt", "desc")
      );
      const postDocs = await getDocs(postQuery);
      // store in post state
      const posts = postDocs.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setPostStateValue((prev) => ({
        ...prev,
        posts: posts as Post[],
      }));
      console.log("posts", posts);
    } catch (error: any) {
      console.log("getPosts error", error.message);
    }
  };
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <Stack>
        {postStateValue.posts.map((item) => (
          // eslint-disable-next-line react/jsx-key
          <PostItem
            post={item}
            userIsCreator={user?.uid === item.creatorId}
            userVoteValue={undefined}
            onSelectPost={onSelectPost}
            onDeletePost={onDeletePost}
            onVote={onVote}
          />
        ))}
      </Stack>
    </>
  );
};
export default Posts;
