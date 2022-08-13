import { Box, Heading } from "@chakra-ui/react";

type SubSectionProps = {
  title: string;
};
const SubSection = ({ title }: SubSectionProps) => {
  return (
    <Box borderLeft="5px grey solid" m="1" pl="1" mt="6">
      <Heading size="1xl" pb="1">
        {title}
      </Heading>
    </Box>
  );
};

export default SubSection;
