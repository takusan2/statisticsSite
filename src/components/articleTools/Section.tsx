import { Heading } from "@chakra-ui/react";

type SectionProps = {
  title: string;
};

const Section = ({ title }: SectionProps) => {
  return (
    <Heading
      fontSize="45px"
      pb="1"
      pl="4"
      pr="4"
      mb="4"
      style={{ borderBottom: "2px grey solid" }}
    >
      {title}
    </Heading>
  );
};

export default Section;
