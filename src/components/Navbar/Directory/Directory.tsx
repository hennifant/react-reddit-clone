import React, { useState } from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Icon,
  Menu,
  MenuButton,
  MenuList,
  Text,
  Image,
} from "@chakra-ui/react";
import { TiHome } from "react-icons/ti";
import Communities from "./Communities";
import useDirectory from "../../../hooks/useDirectory";

const UserMenu: React.FC = () => {
  const { directoryState, toggleMenuOpen } = useDirectory();

  return (
    <Menu isOpen={directoryState.isOpen}>
      <MenuButton
        color="Black"
        cursor="pointer"
        padding="0px 6px"
        borderRadius="4px"
        _hover={{ outline: "1px solid", outlineColor: "gray.200" }}
        mr={2}
        ml={{ base: 0, md: 2 }}
        onClick={toggleMenuOpen}
      >
        <Flex
          alignItems="center"
          justifyContent="space-between"
          width={{ base: "auto", lg: "200px" }}
        >
          <Flex alignItems="center" bg="white">
            {directoryState.selectedMenuItem.imageURL ? (
              <Image
                alt="Community Image"
                borderRadius="full"
                boxSize="24px"
                src={directoryState.selectedMenuItem.imageURL}
                mr={2}
              />
            ) : (
              <Icon
                fontSize={24}
                mr={{ base: 1, md: 2 }}
                color={directoryState.selectedMenuItem.iconColor}
                as={directoryState.selectedMenuItem.icon}
              />
            )}
            <Flex
              display={{ base: "none", lg: "flex" }}
              flexDirection="column"
              fontSize="10pt"
              bg="white"
            >
              <Text fontWeight={600} fontSize="10pt">
                {directoryState.selectedMenuItem.displayText}
              </Text>
            </Flex>
          </Flex>
          <ChevronDownIcon color="gray.500" />
        </Flex>
      </MenuButton>
      <MenuList maxHeight="300px" overflow="scroll" overflowX="hidden">
        <Communities />
      </MenuList>
    </Menu>
  );
};
export default UserMenu;
