import { Link, useColorModeValue, Icon } from "@chakra-ui/react";
import { FaBagShopping } from "react-icons/fa6";
const Logo = props => {
    const logoColor = useColorModeValue("#85C5AF", "#85C5AF");
    return (
        <>
            <Link to="#">
                <Icon as={FaBagShopping} w={8} h={8} color={logoColor} />
            </Link>
        </>
    );
}

export default Logo;