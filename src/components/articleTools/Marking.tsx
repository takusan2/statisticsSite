import { Mark } from "@chakra-ui/react";
import { useState } from "react";

type MarkingProps = {
  mode?: boolean;
  children: string;
};
export const Marking = ({ mode, children }: MarkingProps) => {
  const [show, setShow] = useState(false);
  const toggleSetShow = () => {
    if (mode === true) {
      setShow(!show);
    }
  };
  let learnMode = show;

  if (mode === true && show == false) {
    learnMode = false;
  } else {
    learnMode = true;
  }
  return (
    <Mark
      bg="#dce5ff"
      color="tomato"
      px="2"
      fontWeight="bold"
      py="1"
      mx="1"
      borderRadius="5px"
      onClick={toggleSetShow}
      display="inline-block"
      _hover={{ cursor: "pointer", color: "red" }}
    >
      {learnMode ? children : "＊".repeat(children.length)}
    </Mark>
  );
};

// mode: false ならば　show:trueの時に true
// mode: false ならば　show:trueの時に true
// mode: true ならば　show:trueの時に true
// mode: true ならば　show:falseの時に false
