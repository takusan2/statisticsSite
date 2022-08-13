import { Box, Container } from "@chakra-ui/react";
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
      boxSizing="border-box"
      minH="100vh"
      pb="100"
      fontSize="20px"
    >
      <Head />
      <Header />
      <Container maxWidth="150vh">
        <Box h="auto" mb="10%">
          <MathJaxContext>{children}</MathJaxContext>
        </Box>
      </Container>

      <Footer />
    </Box>
  );
};

export default DefaultLayout;
