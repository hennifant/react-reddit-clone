import React from "react";
import { Flex } from "@chakra-ui/react";
import AuthModal from "../../Modal/Auth/AuthModal";
import AuthButtons from "./AuthButtons";

type RightContentProps = {
  //  user: any;
};

const RightContent: React.FC<RightContentProps> = () => {
  return (
    <>
      <AuthModal />
      <Flex>
        <AuthButtons />
      </Flex>
    </>
  );
};
export default RightContent;
