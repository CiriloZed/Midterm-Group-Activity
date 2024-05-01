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
  useToast
} from "@chakra-ui/react";
import Products from "../../products";
import { useParams } from "react-router";
import { useCart } from "../../CartProvider";
const ProductInfo = () => {
  const { productKey } = useParams(); // Invoke the useParams hook to get the params
  const bg = useColorModeValue("#f5f5f5", "#1A202C");
  const headingColor = useColorModeValue("#1A202C", "#fff");
  const descColor = useColorModeValue("#73788C", "whiteAlpha.800");
  const product = Products.find((p) => p.productKey === parseInt(productKey));
  const { addToCart } = useCart();
  const toast = useToast();
  if (!product) {
    // Handle case when product is not found
    return (
      <Box py={10} textAlign="center" bg={bg} color={headingColor}>
        <Heading>No product found</Heading>
      </Box>
    );
  }
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
              {product.title}
            </Heading>
            <Text
              fontSize="16px"
              fontFamily="Poppins, sans-serif"
              color={descColor}
              mb={4}
            >
              {product.description}
              <UnorderedList>
                {Object.entries(product.features).map(
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
                onClick={() => {
                  addToCart(product);
                  toast({
                    title: `${product.title}`,
                    description: "has been added to your cart.",
                    status: "success",
                    duration: 9000,
                    isClosable: true,
                  });
                }}
              >
                Add to cart
              </Button>
            </Box>
          </Box>
          <Flex>
            <Center>
              <img src={product.imageSrc} alt={product.alt} />
            </Center>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default ProductInfo;
