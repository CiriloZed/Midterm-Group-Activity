import { InputGroup, InputRightAddon, Input } from '@chakra-ui/react';

const SearchNav = props => {
    return (
        <>
            <InputGroup
                display={{ base: "none", lg: "flex" }}>
                <Input placeholder={props.placeholder} p="3" />
                <InputRightAddon>
                    {props.icon}
                </InputRightAddon>
            </InputGroup>
        </>
    )
}

export default SearchNav;