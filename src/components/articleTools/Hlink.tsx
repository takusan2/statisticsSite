import { Link } from "@chakra-ui/react";
import { ReactNode } from "react";

type HlinkProps = {
  href: string;
  children: ReactNode;
};

export const Hlink = ({ href, children }: HlinkProps) => {
  return (
    <Link color="teal.500" href={href}>
      {children}
    </Link>
  );
};
