import { Box, useColorModeValue } from "@chakra-ui/react";

const Footer = () => {
  const bg = useColorModeValue("#fff", "#1A202C");
  return (
    <Box bg={bg} px={{ base: 5, md: 10, lg: 20 }} py={5}>
      Copyright &copy; 2024 ZED-COMMERCE
    </Box>
  );
};

export default Footer;
