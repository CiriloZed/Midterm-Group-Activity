import { Flex } from '@chakra-ui/react';
import { FaBars, FaCartShopping, FaSun, FaMoon } from "react-icons/fa6";
import CartNavButton from './CartNavBtn';
import NavThemeToggle from './NavThemeToggle';
import Burger from './Burger';
const NavButtons = props => {
    return (
        <Flex gap={2} >
            <NavThemeToggle lightIcon={<FaSun />} darkIcon={<FaMoon />} />
            <CartNavButton icon={<FaCartShopping />} />
            <Burger icon={<FaBars />} />
        </Flex>
    )
}

export default NavButtons;