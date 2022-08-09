import {
  CalendarIcon,
  CloseIcon,
  EditIcon,
  HamburgerIcon,
} from "@chakra-ui/icons";
import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { useState } from "react";

const MenuBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Menu closeOnBlur={false}>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
        onClick={toggleIsOpen}
        color="black"
      />
      <MenuList>
        <a href="/">
          <MenuItem icon={<CalendarIcon />} onClick={toggleIsOpen}>
            Home
          </MenuItem>
        </a>
        <MenuItem icon={<EditIcon />} command="⌘O" onClick={toggleIsOpen}>
          Open File...
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default MenuBar;
