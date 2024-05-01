import { IconButton } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom"; // Import Link from React Router
const CartNavButton = props => {
    return (
        <>
            <IconButton
                bg="transparent"
                _hover={{ bg: "transparent", opacity: "0.8" }}
                _active={{ bg: "transparent" }}
                aria-label='Cart'
                icon={props.icon}
                as={RouterLink}
                to={'/cart'}
            />
        </>
    )
}
export default CartNavButton;