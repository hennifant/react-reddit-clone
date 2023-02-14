import React from "react";
import { GetServerSidePropsContext } from "next";
import { firestore } from "../../../firebase/clientApp";
import { doc, getDoc } from "firebase/firestore";
import { Community } from "../../../atoms/communitiesAtom";
import safeJsonStringify from "safe-json-stringify";

type CommunityPageProps = { communityData: Community };

const CommunityPage: React.FC<CommunityPageProps> = ({ communityData }) => {
  console.log("here is data", communityData);
  return <div>Community Page{communityData.id}</div>;
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const communityDocRef = doc(
      firestore,
      "communities",
      context.query.communityId as string
    );
    const communityDoc = await getDoc(communityDocRef);
    return {
      props: {
        communityData: JSON.parse(
          safeJsonStringify({ id: communityDoc.id, ...communityDoc.data() }) // needed for dates
        ),
      },
    };
  } catch (error) {
    //  create error page here
    console.log("getServerSideProps error - [community]", error);
  }
}
export default CommunityPage;
