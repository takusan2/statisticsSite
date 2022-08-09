import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Footer } from "./Footer";
import { Head } from "./Head";

import Header from "./Header";

type DefaultLayoutProps = {
  children: ReactNode;
};

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <Box fontSize="20px" boxSizing="border-box" minH="0" h="auto">
      <Head />
      <Header />
      <Box overflowY="scroll" m="2%" pb="50">
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default DefaultLayout;
