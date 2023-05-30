import "react-horizontal-scrolling-menu/dist/styles.css";
import { Box } from "@mui/material";
import BodyPart from "./BodyPart";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";
import ExerciseCard from "./ExerciseCard";

const HorizontalScrollBar = ({ data, isBodyParts }) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item) => (
        <Box
          key={item.id || item}
          itemID={item.id || item}
          title={item.id || item}
          m="0 40px"
        >
          {isBodyParts ? (
            <BodyPart item={item} />
          ) : (
            <ExerciseCard exercise={item} />
          )}
        </Box>
      ))}
    </ScrollMenu>
  );
};

export default HorizontalScrollBar;
