import { Box } from "@chakra-ui/react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import a11yDark from "react-syntax-highlighter/dist/cjs/styles/prism/a11y-dark";

type CodeBlockProps = {
  children: string;
  language: string;
};

const CodeBlock = ({ children, language }: CodeBlockProps) => {
  return (
    <Box fontSize="15">
      <SyntaxHighlighter
        language={language}
        style={a11yDark}
        children={children}
        showLineNumbers
      />
    </Box>
  );
};

export default CodeBlock;
