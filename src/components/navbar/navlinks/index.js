import { Flex, Text } from "@chakra-ui/react";
import routes from "../../../routes";
import { useLocation, Link } from "react-router-dom";
const NavLinks = (props) => {
  const location = useLocation();
  return (
    <Flex
      as="nav"
      col={12}
      col-lg="auto"
      me={{ base: "auto", lg: "0" }}
      mb={{ base: 2, md: 0 }}
      justifyContent="center"
      display={{ base: "none", lg: "flex" }}
    >
      {routes.map((route, index) => (
        <Link key={index} to={route.path}>
          <Text
            px={2}
            fontWeight={location.pathname === route.path ? "700" : "500"}
            color={location.pathname === route.path ? "#85C5AF" : "inherit"}
            className="raleway"
            style={{ textDecoration: "none" }}
            _hover={{ color: "#85C5AF" }}
          >
            {route.name}
          </Text>
        </Link>
      ))}
    </Flex>
  );
};
export default NavLinks;
