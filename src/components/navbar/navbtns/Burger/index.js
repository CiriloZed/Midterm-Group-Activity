import React, { useState } from 'react';
import { IconButton, Box, Link } from "@chakra-ui/react";
import routes from '../../../../routes';
import { useLocation } from 'react-router';
const Burger = props => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOverlay = () => {
        setIsOpen(!isOpen);
    };
    const location = useLocation();
    return (
        <>
            <IconButton
                bg="transparent"
                _hover={{ bg: "transparent", opacity: "0.8" }}
                _active={{ bg: "transparent" }}
                hideFrom={"lg"}
                onClick={toggleOverlay}
                aria-label='Mobile menu'
                icon={props.icon}>
            </IconButton>
            {isOpen && (
                <Box
                    position="fixed"
                    top="0"
                    left="0"
                    right="0"
                    bottom="0"
                    bg="rgba(0, 0, 0, 0.8)" // Semi-transparent black background
                    zIndex="9999" // Ensure the overlay is on top of other content
                    onClick={toggleOverlay} // Close the overlay when clicked
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    flexDirection="column"
                >
                    {routes.map((route, index) => (
                        <Link
                            key={index}
                            href={route.path}
                            px={{ base: 4, md: 2 }} // Adjust the padding based on screen size
                            py={2} // Vertical padding remains constant
                            fontSize={{ base: '18px', md: '16px' }}
                            fontWeight={location.pathname === route.path ? "700" : "500"}
                            color={location.pathname === route.path ? "#85C5AF" : "#fff"}
                            className='raleway'
                            style={{ textDecoration: 'none' }}
                            _hover={{ color: "#85C5AF" }}
                        >
                            {route.name}
                        </Link>
                    ))}
                </Box>
            )}
        </>
    )
}

export default Burger;