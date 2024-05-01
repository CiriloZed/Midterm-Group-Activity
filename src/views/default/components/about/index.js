import { Box, Flex, Text, Heading, Link, useColorModeValue } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa6";
const AboutSection = () => {
    const bg = useColorModeValue("#fff", "#11151D");
    const headingColor = useColorModeValue("#1A202C", "#fff");
    const descColor = useColorModeValue("#73788C", "whiteAlpha.800");
    const valueColor = useColorModeValue("#f4f4f4", "#1A202C")
    return (
        <Box bg={bg} pt={{ base: 10, lg: 20 }} px={{ base: 5, md: 10, lg: 20 }}>
            <Box py={5}>
                <Flex
                    pt={{ base: 10, lg: 20 }}
                    px={{ base: 5, md: 10, lg: 20 }}
                    flexDirection={{ base: "column", lg: "row" }}
                >
                    <Box flex="1" data-aos="fade-up" data-aos-delay="250">
                        <Text
                            fontWeight="semibold"
                            color="#69b99d"
                            fontFamily="Inter, sans-serif"
                            fontSize="18px"
                        >
                            About Zed-Commerce
                        </Text>
                        <Heading
                            as="h2"
                            fontWeight="bold"
                            mb={3}
                            color={headingColor}
                            fontFamily="Poppins, sans-serif"
                        >
                            The story behind Zed-Commerce
                        </Heading>
                        <Text
                            fontSize="16px"
                            fontFamily="Poppins, sans-serif"
                            color={descColor}
                            mb={4}
                        >
                            Our story is rooted in our passion for innovation and dedication
                            to empowering businesses. From humble beginnings to becoming a
                            trusted partner for countless entrepreneurs, we've always strived
                            to exceed expectations and drive success.
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
                        <Flex flexDirection="row" py={3} alignItems={"center"}>
                            <Link
                                mx={2}
                                href="#"
                                fontFamily="Poppins, sans-serif"
                                color="#69b99d"
                            >
                                Read more
                            </Link>
                            <Box
                                bg="#69b99d"
                                boxShadow="0px 0px 20px #69b99d"
                                borderRadius="50%"
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                width="32px"
                                height="32px"
                            >
                                <FaArrowRight color="white" />
                            </Box>
                        </Flex>
                    </Flex>
                </Flex>
                <Flex
                    flexDirection={{ base: "column", lg: "row" }}
                    justifyContent={{ base: "center", sm: "center", lg: "flex-start" }}
                    py={{ base: 10, lg: 20 }}
                    px={{ base: 5, md: 10, lg: 20 }}
                >
                    <Box
                        flex={{ base: "none", sm: "1" }}
                        mb={{ base: 4, sm: 0 }}
                        mr={{ base: 0, sm: 4 }}
                        data-aos="fade-up"
                        data-aos-delay="250"
                    >
                        <Box
                            d="flex"
                            flexDir="column"
                            alignItems={{ base: "center", sm: "flex-start" }}
                        >
                            <Text
                                rounded="lg"
                                p={8}
                                bg={valueColor}
                                fontFamily="Poppins, sans-serif"
                            >
                                Putting our customers first is at the core of everything we do.
                                We prioritize their needs, listen attentively, and go above and
                                beyond to ensure their satisfaction.
                            </Text>
                            <Flex mt={2}>
                                <Text
                                    fontWeight="semibold"
                                    d="flex"
                                    alignItems="center"
                                    color="#69B99D"
                                    mb={0}
                                    mx={1}
                                    fontFamily="Poppins, sans-serif"
                                >
                                    Centric Approach
                                </Text>
                            </Flex>
                        </Box>
                    </Box>
                    <Box
                        flex={{ base: "none", sm: "1" }}
                        mb={{ base: 4, sm: 0 }}
                        mr={{ base: 0, sm: 4 }}
                        data-aos="fade-up"
                        data-aos-delay="250"
                    >
                        <Box
                            d="flex"
                            flexDir="column"
                            alignItems={{ base: "center", sm: "flex-start" }}
                        >
                            <Text
                                rounded="lg"
                                p={8}
                                bg={valueColor}
                                fontFamily="Poppins, sans-serif"
                            >
                                We embrace innovation as a driving force for progress.
                                Constantly pushing boundaries and exploring new ideas, we strive
                                to stay ahead of the curve and deliver innovative solutions that
                                set our clients apart.
                            </Text>
                            <Flex mt={2}>
                                <Text
                                    fontWeight="semibold"
                                    d="flex"
                                    alignItems="center"
                                    color="#69B99D"
                                    mb={0}
                                    mx={1}
                                    fontFamily="Poppins, sans-serif"
                                >
                                    Innovation Excellence
                                </Text>
                            </Flex>
                        </Box>
                    </Box>
                    <Box
                        flex={{ base: "none", sm: "1" }}
                        mb={{ base: 4, sm: 0 }}
                        data-aos="fade-up"
                        data-aos-delay="250"
                    >
                        <Box
                            d="flex"
                            flexDir="column"
                            alignItems={{ base: "center", sm: "flex-start" }}
                        >
                            <Text
                                rounded="lg"
                                p={8}
                                bg={valueColor}
                                fontFamily="Poppins, sans-serif"
                            >
                                Trust is the foundation of our business. We conduct ourselves
                                with honesty, transparency, and integrity in all interactions,
                                building trust with our clients and partners every step of the
                                way.
                            </Text>
                            <Flex mt={2}>
                                <Text
                                    fontWeight="semibold"
                                    d="flex"
                                    alignItems="center"
                                    color="#69B99D"
                                    mb={0}
                                    mx={1}
                                    fontFamily="Poppins, sans-serif"
                                >
                                    Integrity and transparency
                                </Text>
                            </Flex>
                        </Box>
                    </Box>
                </Flex>
            </Box>
        </Box>
    );
};

export default AboutSection;
