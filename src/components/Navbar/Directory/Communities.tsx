import React, { useState } from "react";
import { Box, Flex, Icon, MenuItem, Text } from "@chakra-ui/react";
import { GrAdd } from "react-icons/gr";
import CreateCommunityModal from "../../Modal/CreateCommunity/CreateCommunityModal";

type CommunitiesProps = {};

const Communities: React.FC<CommunitiesProps> = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <CreateCommunityModal open={open} handleClose={() => setOpen(false)} />
      <MenuItem
        width="100%"
        fontSize="10pt"
        _hover={{ bg: "gray.100" }}
        onClick={() => setOpen(true)}
      >
        <Flex alignItems="center">
          <Icon fontSize={20} mr={2} as={GrAdd} />
          Create Community
        </Flex>
      </MenuItem>
    </>
  );
};

export default Communities;