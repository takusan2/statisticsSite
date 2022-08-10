import { Box } from "@chakra-ui/react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import syntaxStyle from "react-syntax-highlighter/dist/cjs/styles/prism/tomorrow";

type CodeBlockProps = {
  children: string;
  language: string;
};

export const CodeBlock = ({ children, language }: CodeBlockProps) => {
  return (
    <Box w="auto" fontSize="20px">
      <SyntaxHighlighter language={language} style={syntaxStyle}>
        {children}
      </SyntaxHighlighter>
    </Box>
  );
};

export default CodeBlock;
