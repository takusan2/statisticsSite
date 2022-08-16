import { Box, Heading } from "@chakra-ui/react";

type SubSubSectionProps = {
  title: string;
};
const SubSubSection = ({ title }: SubSubSectionProps) => {
  return (
    <Box m="1" pl="1" mt="6">
      <Heading fontSize="18" pb="1">
        〜 {title} 〜
      </Heading>
    </Box>
  );
};

export default SubSubSection;
