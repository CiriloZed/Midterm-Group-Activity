import {
  Box,
  Flex,
  useColorModeValue,
  Stack,
  CardBody,
  Heading,
  Text,
  Divider,
  Card,
  SimpleGrid,
} from "@chakra-ui/react";
import { useCart } from "../../CartProvider";
const Cart = () => {
  const bg = useColorModeValue("#fff", "#11151D");
  const headingColor = useColorModeValue("#1A202C", "#fff");
  const descColor = useColorModeValue("#73788C", "whiteAlpha.800");
  const productBg = useColorModeValue("#f4f4f4", "#1A202C");
  const { cart } = useCart();
  let totalPrice = 0;
  cart.forEach((item) => {
    totalPrice += item.price;
  });
  return (
    <Box bg={bg} py={{ base: 10, lg: 20 }} px={{ base: 5, md: 10, lg: 20 }}>
      <Flex py={{ base: 10, lg: 20 }}>
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
              Explore Our Best Product Lineup
            </Text>
            <Heading
              as="h2"
              fontWeight="bold"
              mb={3}
              color={headingColor}
              fontFamily="Poppins, sans-serif"
            >
              Your cart.
            </Heading>
            <Text
              fontSize="16px"
              fontFamily="Poppins, sans-serif"
              color={descColor}
              mb={4}
            >
              Welcome to our virtual cart, where convenience meets exceptional
              deals! Dive into a treasure trove of must-have items and
              irresistible offers. From daily essentials to luxury indulgences,
              our curated selection caters to your every need.
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
      </Flex>
      <Box px={{ base: 5, md: 10, lg: 20 }}>
        <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={4}>
          {cart.map((item, index) => (
            <Card bg={productBg} key={index}>
              <CardBody>
                <Stack mt="6" spacing="3">
                  <Heading
                    size="md"
                    color={headingColor}
                    fontFamily="Poppins, sans-serif"
                  >
                    {item.title}
                  </Heading>
                  <Text
                    color="#69B99D"
                    fontSize="2xl"
                    fontWeight={700}
                    fontFamily="Poppins, sans-serif"
                  >
                    ₱ {item.price.toLocaleString("en-PH", {
                      minimumFractionDigits: 2,
                    })}
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
            </Card>
          ))}
        </SimpleGrid>
        <Flex justifyContent={"flex-end"} py="4">
          <Text
            fontWeight="semibold"
            fontFamily="Inter, sans-serif"
            fontSize="18px"
          >
            Total Price: {totalPrice.toLocaleString("en-PH", {
                      minimumFractionDigits: 2,
                    })}
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};
export default Cart;
