import { Box } from "@chakra-ui/react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/cjs/styles/prism";

type CodeBlockProps = {
  children: string;
  language: string;
};

const CodeBlock = ({ children, language }: CodeBlockProps) => {
  return (
    <Box w="auto" fontSize="20px">
      <SyntaxHighlighter language={language} style={dark}>
        {children}
      </SyntaxHighlighter>
    </Box>
  );
};

export default CodeBlock;
