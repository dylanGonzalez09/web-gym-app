import { useContext } from "react";
import SearchContext from "../context/SearchProvider";
import { Box } from "@mui/material";
import BodyPart from "./BodyPart";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";

const HorizontalScrollBar = () => {
  const { bodyParts } = useContext(SearchContext);

  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {bodyParts.map((item) => (
        <Box
          key={item.id || item}
          itemID={item.id || item}
          title={item.id || item}
          m="0 40px"
        >
          <BodyPart item={item} />
        </Box>
      ))}
    </ScrollMenu>
  );
};

export default HorizontalScrollBar;
