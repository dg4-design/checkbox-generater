import { useState, useCallback } from "react";
import { Styles } from "@/types/styles";

export const useStyles = () => {
  const [styles, setStyles] = useState<Styles>({
    size: "16px",
    color: "#000000",
    borderColor: "#000000",
    borderWidth: "1px",
    borderRadius: "0px",
    checked: false,
  });

  const handleStyleChange = useCallback((newStyles: Partial<Styles>) => {
    setStyles((prevStyles) => ({ ...prevStyles, ...newStyles }));
  }, []);

  return { styles, handleStyleChange };
};
