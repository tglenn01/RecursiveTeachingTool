import { useContext } from "react";
import CallsContext from "../contexts/CallsContext";

const CallNode = ({ node }) => {
  const context = useContext(CallsContext);
  const { nodeDatum, onNodeClick } = node;
  const { name, attributes } = nodeDatum;

  const handleClick = (e) => {
    onNodeClick(e);
  };

  const fillColor =
    context.selectedCall?.attributes.id === attributes.id
      ? context.selectedNodeColor
      : "#b7e3e4";

  const textColor =
    context.selectedCall?.attributes.id === attributes.id ? "white" : "black";

  return (
    <>
      <ellipse
        rx="60"
        ry="30"
        onClick={handleClick}
        style={{ fill: fillColor }}
      />

      <text
        onClick={handleClick}
        textAnchor="middle"
        width="60"
        strokeWidth="1"
        fill={textColor}
        stroke={textColor}
      >
        <tspan x="0">{name}</tspan>
        <tspan x="0" dy="1em">
          ID: {attributes.id}
        </tspan>
      </text>
    </>
  );
};
export default CallNode;
