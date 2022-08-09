import { HStack } from "@chakra-ui/react";
import Image from "next/image";
import Icon from "src/images/fileIcon.png";
type FileIconProps = {
  label?: string;
};

export const FileIcon = ({ label }: FileIconProps) => {
  return (
    <HStack>
      <Image src={Icon} width="35" height="40" />
      <p>{label}</p>
    </HStack>
  );
};
