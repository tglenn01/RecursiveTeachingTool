import { useContext } from "react";
import CallsContext from "../contexts/CallsContext";
import "./components.css";

const CallNodeViewer = () => {
  const context = useContext(CallsContext);
  const { selectedCall } = context;

  let callParams = "N/A";
  if (selectedCall != null) {
    callParams = Object.entries(selectedCall.attributes.params)
      .map(([key, value]) => {
        return `${key}: ${value}`;
      })
      .join(", ");
  }

  return (
    <div
      className="CallNodeViewer FillHeight"
      style={{ backgroundColor: context.selectedNodeColor }}
    >
      <h2 className="CardTitle">Call State</h2>
      Parameters: {callParams}
      <br />
      <br />
      Variables: VARS
      <br />
      <br />
      Return Value: RET
    </div>
  );
};

export default CallNodeViewer;
