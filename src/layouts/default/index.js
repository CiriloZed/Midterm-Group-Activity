import { Box, ChakraProvider, useColorModeValue } from "@chakra-ui/react";
import Navbar from "../../components/navbar";
import theme from "../../theme.js";
import Footer from "../../components/footer";
const Layout = (Component) => {
  const DefFunction = (props) => {
    let bg = useColorModeValue("#f5f5f5", "#1A202C");
    return (
        <ChakraProvider theme={theme}>
        <Box bg={bg}>
          <Navbar />
          <Box>
            <Component {...props} />
          </Box>
          <Footer />
        </Box>
      </ChakraProvider>
    );
  };
  return DefFunction;
};

export default Layout;
