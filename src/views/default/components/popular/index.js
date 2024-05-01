import {
    useColorModeValue,
    Flex,
    Box,
    Text,
    Heading,
    Button,
    UnorderedList,
    ListItem,
    Center,
  } from "@chakra-ui/react";
  import Products from "../../../../products";
  
  const Popular = () => {
    const bg = useColorModeValue("#f5f5f5", "#1A202C");
    const headingColor = useColorModeValue("#1A202C", "#fff");
    const descColor = useColorModeValue("#73788C", "whiteAlpha.800");
  
    // Generate a random index within the range of Products array
    const randomIndex = Math.floor(Math.random() * Products.length);
    // Select a random product from Products array
    const randomProduct = Products[randomIndex];
  
    return (
      <Box bg={bg} py={{ base: 10, lg: 20 }} px={{ base: 5, md: 10, lg: 20 }}>
        <Flex py={{ base: 10, lg: 20 }}>
          <Flex direction={{ base: "column", xl: "row" }}>
            <Box
              flex={{ base: "1", md: "1", lg: "1" }}
              p={{ base: 4, md: 5 }}
              py={{ base: 5, md: 5 }}
              px={{ base: 5, md: 10, lg: 20 }}
              color="white"
            >
              <Text
                fontWeight="semibold"
                color="#69B99D"
                fontFamily="Poppins, sans-serif"
                fontSize="18px"
              >
                Best Selling
              </Text>
              <Heading
                as="h2"
                fontWeight="bold"
                mb={3}
                color={headingColor}
                fontFamily="Poppins, sans-serif"
              >
                {randomProduct.title}
              </Heading>
              <Text
                fontSize="16px"
                fontFamily="Poppins, sans-serif"
                color={descColor}
                mb={4}
              >
                {randomProduct.description}
                <UnorderedList>
                  {Object.entries(randomProduct.features).map(
                    ([feature, description]) => (
                      <ListItem key={feature}>
                        <strong>{feature}:&nbsp;</strong>
                        {description}
                      </ListItem>
                    )
                  )}
                </UnorderedList>
              </Text>
              <Box my={3}>
                <Button
                  variant="outline"
                  size="lg"
                  fontWeight="normal"
                  borderRadius="0"
                  transition="all 0.2s"
                  py={3}
                  color="#fff"
                  bg="#69B99D"
                  _hover={{ bg: "#69B99D" }}
                >
                  View product
                </Button>
              </Box>
            </Box>
            <Flex>
              <Center>
                <img
                  src={randomProduct.imageSrc}
                  alt={randomProduct.alt}
                />
              </Center>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    );
  };
  
  export default Popular;
  