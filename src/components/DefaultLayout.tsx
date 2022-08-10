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
    <Box
      overflowY="scroll"
      h="auto"
      boxSizing="border-box"
      minH="100vh"
      pb="100"
      fontSize="20px"
    >
      <Head />
      <Header />
      <Box m="2%" h="auto" mb="10%">
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default DefaultLayout;
