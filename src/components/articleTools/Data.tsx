import { Td, Tr } from "@chakra-ui/react";

type DataProps = {
  id: string;
  sex: string;
  age: string;
  fruit: string;
};

export const Data = ({ id, sex, age, fruit }: DataProps) => {
  return (
    <Tr>
      <Td>{id}</Td>
      <Td>{sex}</Td>
      <Td>{age}</Td>
      <Td>{fruit}</Td>
    </Tr>
  );
};
