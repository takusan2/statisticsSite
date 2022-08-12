import { Box, Center } from "@chakra-ui/react";
import { MathJaxContext } from "better-react-mathjax";
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
      w="100%"
    >
      <Head />
      <Header />
      <Center>
        <MathJaxContext>
          <Box m="2%" h="auto" mb="10%" maxWidth="150vh">
            {children}
          </Box>
        </MathJaxContext>
      </Center>
      <Footer />
    </Box>
  );
};

export default DefaultLayout;
