import { useContext } from "react";
import CallsContext from "../contexts/CallsContext";

const NODE_COLOR_HEX = "#C8C2D3";

const CallNode = ({ node, showCallId, showArgs }) => {
  const context = useContext(CallsContext);
  const { nodeDatum, onNodeClick } = node;
  const { name, attributes } = nodeDatum;

  const handleClick = (e) => {
    onNodeClick(e);
  };

  const fillColor =
    context.selectedCall?.attributes.id === attributes.id
      ? context.selectedNodeColor
      : NODE_COLOR_HEX;

  const textColor =
    context.selectedCall?.attributes.id === attributes.id ? "white" : "black";

  const argsListString = Object.entries(attributes.params)
    .map(([key, value]) => `${key}=${value}`)
    .join(",");

  return (
    <>
      <ellipse
        rx="60"
        ry="30"
        onClick={handleClick}
        style={{ fill: fillColor, strokeWidth: 0 }}
      />
      {showCallId && (
        <text
          textAnchor="start"
          strokeWidth="1"
          fill={textColor}
          stroke={textColor}
          x="-90"
          y="3"
        >
          {attributes.id}
        </text>
      )}

      <text
        onClick={handleClick}
        textAnchor="middle"
        strokeWidth="1"
        fill={textColor}
        stroke={textColor}
        y={showArgs ? "-3" : "3"}
      >
        <tspan x="0">{name} </tspan>
        {showArgs && (
          <tspan x="0" y="12">
            ({argsListString})
          </tspan>
        )}
      </text>
    </>
  );
};
export default CallNode;
