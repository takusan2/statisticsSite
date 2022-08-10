import { HStack, Text } from "@chakra-ui/react";
import Image from "next/image";
import Icon from "../../images/folderIcon.png";

type FolderIconProps = {
  label?: string;
};

export const FolderIcon = ({ label }: FolderIconProps) => {
  return (
    <HStack>
      <Image width="40" height="40" src={Icon} alt="folderIcon" />
      <Text fontSize="20">{label}</Text>
    </HStack>
  );
};
