import {
  Box,
  Flex,
  Text,
  Heading,
  useColorModeValue,
  Image,
  Button,
  Card,
  CardBody,
  Stack,
  Divider,
  CardFooter,
  ButtonGroup,
  SimpleGrid,
  useToast,
} from "@chakra-ui/react";
import ProductsData from "../../products";
import { Link as RouterLink } from "react-router-dom"; // Import Link from React Router
import { useCart } from "../../CartProvider";
const Products = () => {
  const bg = useColorModeValue("#fff", "#11151D");
  const headingColor = useColorModeValue("#1A202C", "#fff");
  const descColor = useColorModeValue("#73788C", "whiteAlpha.800");
  const productBg = useColorModeValue("#f4f4f4", "#1A202C");
  const { addToCart } = useCart();
  const toast = useToast();
  return (
    <Box bg={bg} pt={{ base: 10, lg: 20 }} px={{ base: 5, md: 10, lg: 20 }}>
      <Box py={5}>
        <Flex
          pt={{ base: 10, lg: 20 }}
          px={{ base: 5, md: 10, lg: 20 }}
          mb={"5"}
          flexDirection={{ base: "column", lg: "row" }}
        >
          <Box flex="1" data-aos="fade-up" data-aos-delay="250">
            <Text
              fontWeight="semibold"
              color="#69b99d"
              fontFamily="Inter, sans-serif"
              fontSize="18px"
            >
              Explore Our Product Lineup
            </Text>
            <Heading
              as="h2"
              fontWeight="bold"
              mb={3}
              color={headingColor}
              fontFamily="Poppins, sans-serif"
            >
              Discover Cutting-Edge Solutions for Your Business
            </Heading>
            <Text
              fontSize="16px"
              fontFamily="Poppins, sans-serif"
              color={descColor}
              mb={4}
            >
              Elevate your business with our comprehensive range of products
              designed to meet your diverse needs. From powerful servers to
              innovative software solutions, we offer cutting-edge technology to
              drive your success in today's digital landscape.
            </Text>
          </Box>
          <Flex
            flex="1"
            d={{ base: "flex", lg: "none" }}
            justifyContent={{ base: "flex-start", lg: "flex-end" }}
            alignItems="flex-end" // Align the content to the end (bottom)
            mb={{ base: 3, lg: 0 }}
            data-aos="fade-up"
            data-aos-delay="250"
          >
            <Flex flexDirection="row" py={3} alignItems={"center"}></Flex>
          </Flex>
        </Flex>
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 2, xl: 3 }}
          spacing={4}
          px={{ base: 5, md: 10, lg: 20 }}
        >
          {ProductsData.map((product, index) => (
            <Card bg={productBg} key={index}>
              <CardBody>
                <Image
                  src={product.imageSrc}
                  alt={product.alt}
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading
                    size="md"
                    color={headingColor}
                    fontFamily="Poppins, sans-serif"
                  >
                    {product.title}
                  </Heading>
                  <Text color={descColor} fontFamily="Poppins, sans-serif">
                    {product.description}
                  </Text>
                  <Text
                    color="#69B99D"
                    fontSize="2xl"
                    fontWeight={700}
                    fontFamily="Poppins, sans-serif"
                  >
                    ₱ {product.price.toLocaleString("en-PH", {
                      minimumFractionDigits: 2,
                    })}
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button
                    variant="solid"
                    bg="#69B99D"
                    color="#fff"
                    _hover={{ opacity: "0.8" }}
                    fontFamily="Poppins, sans-serif"
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
                  <Button
                    variant="ghost"
                    color="#69B99D"
                    fontFamily="Poppins, sans-serif"
                    as={RouterLink} // Use RouterLink from React Router
                    to={`/product-info/${product.productKey}`} // Pass the product key as URL param
                  >
                    Read more
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Products;
