import { Flex, Spacer } from "@chakra-ui/react";
import Image from "next/image";

import Logo from "../images/yuzurihaLogo.png";
import MenuBar from "./MenuBer";

const Header = () => {
  return (
    <>
      <Flex bg="#61F0E8" p="3" mb="2">
        <Image src={Logo} alt="Logo" />
        <Spacer />
        <MenuBar />
      </Flex>
    </>
  );
};

export default Header;
