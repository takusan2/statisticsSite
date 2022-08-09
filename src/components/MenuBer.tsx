import {
  AddIcon,
  CloseIcon,
  EditIcon,
  ExternalLinkIcon,
  HamburgerIcon,
  RepeatIcon,
} from '@chakra-ui/icons'
import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react'
import { useState } from 'react'

const MenuBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleIsOpen = () => {
    setIsOpen(!isOpen)
  }
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
        <MenuItem icon={<AddIcon />} command="⌘T" onClick={toggleIsOpen}>
          New Tab
        </MenuItem>
        <MenuItem
          icon={<ExternalLinkIcon />}
          command="⌘N"
          onClick={toggleIsOpen}
        >
          New Window
        </MenuItem>
        <MenuItem icon={<RepeatIcon />} command="⌘⇧N" onClick={toggleIsOpen}>
          Open Closed Tab
        </MenuItem>
        <MenuItem icon={<EditIcon />} command="⌘O" onClick={toggleIsOpen}>
          Open File...
        </MenuItem>
      </MenuList>
    </Menu>
  )
}

export default MenuBar
