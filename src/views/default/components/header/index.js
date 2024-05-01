import { Box, Flex, Heading, Text, useColorModeValue, Button } from "@chakra-ui/react";

const Header = () => {
    const bg = useColorModeValue("#f5f5f5", "#1A202C")
    const headingColor = useColorModeValue("#1A202C", "#fff");
    const descColor = useColorModeValue("#73788C", "whiteAlpha.800");
    return (
        <Box bg={bg} py={{ base: 10, lg: 20 }} px={{ base: 5, md: 10, lg: 20 }}>
            <Flex py={{ base: 10, lg: 20 }}>
                <Flex direction={{ base: "column", lg: "row" }}>
                    <Box
                        flex={{ base: "1", md: "1", lg: "1" }}
                        p={{ base: 4, md: 5 }}
                        py={{ base: 5, md: 5 }}
                        color="white"
                    >
                        <Text fontWeight="semibold" color="#69B99D" fontFamily="Poppins, sans-serif" fontSize="18px">
                            ZED-COMMERCE
                        </Text>
                        <Heading as="h2" fontWeight="bold" mb={3} color={headingColor} fontFamily="Poppins, sans-serif">
                            Empowering Businesses, Elevating Experiences
                        </Heading>
                        <Text fontSize="16px" fontFamily="Poppins, sans-serif" color={descColor} mb={4}>
                            Dedicated to revolutionizing the way businesses engage with their customers online. Our comprehensive e-commerce platform offers cutting-edge solutions tailored to your specific needs. Whether you're a small startup or a large enterprise, we provide the tools and expertise to help you thrive in the digital marketplace.
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
                                Start your journey
                            </Button>
                        </Box>
                    </Box>
                    <Box
                        flex={{ base: "1", md: "1", lg: "1" }}
                        minH={{ base: "auto", md: "250px" }}
                    >
                        <img
                            src="https://img.freepik.com/premium-photo/digital-canvas-3d-rendering-blank-screen-laptop-smartphone_957479-26915.jpg?w=826"
                            alt="Illustration"
                            className="img-fluid w-100 h-100 fit-cover"
                        />
                    </Box>
                </Flex>
            </Flex>
        </Box>
    )
}

export default Header;