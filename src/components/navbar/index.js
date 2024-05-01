import { Flex, Box, useColorModeValue } from "@chakra-ui/react";
import NavButtons from "./navbtns";
import Logo from "./Logo";
import NavLinks from "./navlinks";
const Navbar = () => {
  const navBg = useColorModeValue("#f5f5f5", "#1A202C");
  return (
    <>
      <Box as="header" bg={navBg} py="10">
        <Flex
          justifyContent={"space-between"}
          px={{ base: 5, md: 15, lg: 20 }}
          alignItems={"center"}
        >
          <Flex alignItems={"center"} gap={4}>
            <Logo />
            <NavLinks />
          </Flex>
          <NavButtons />
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
