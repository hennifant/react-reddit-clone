import { Community } from "../../atoms/communitiesAtom";
import React from "react";

type AboutProps = {
  communityData: Community;
};

const About: React.FC<AboutProps> = ({ communityData }) => {
  return <div>About</div>;
};
export default About;
