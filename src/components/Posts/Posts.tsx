import React, { useEffect, useState } from "react";
import { firestore } from "../../firebase/clientApp";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { Community } from "../../atoms/communitiesAtom";

type PostsProps = {
  communityData: Community;
};

const Posts: React.FC<PostsProps> = ({ communityData }) => {
  const [loading, setLoading] = useState(false);

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
      console.log("posts", posts);
    } catch (error: any) {
      console.log("getPosts error", error.message);
    }
  };
  useEffect(() => {
    getPosts();
  }, []);

  return <div>Posts</div>;
};
export default Posts;
