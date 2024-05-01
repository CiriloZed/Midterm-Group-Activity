import { IconButton, useColorMode } from "@chakra-ui/react";
const NavThemeToggle = (props) => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <>
            <IconButton
                bg="transparent"
                _hover={{ bg: "transparent", opacity: "0.8" }}
                _active={{ bg: "transparent" }}
                onClick={toggleColorMode}
                aria-label="Toggle theme"
                icon={colorMode === "dark" ? props.lightIcon : props.darkIcon}
            />
        </>
    );
};
export default NavThemeToggle;
