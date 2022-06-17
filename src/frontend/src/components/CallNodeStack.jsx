import { useContext, useEffect, useState, useRef } from "react";
import Tree from "react-d3-tree";
import CallsContext from "../contexts/CallsContext";
import CallNode from "./CallNode";
import "./components.css";

const parseCallStack = (callArray) => {
  const baseOfStack = { children: [] };
  let currentStackPoint = baseOfStack;
  callArray.forEach((call) => {
    currentStackPoint.children.push({
      ...call,
      attributes: {
        id: call.id,
        params: { ...call.params },
      },
      children: [],
    });
    currentStackPoint = currentStackPoint.children[0];
  });
  return baseOfStack.children[0];
};

const CallNodeStack = () => {
  const [currentWidth, setCurrentWidth] = useState(0);
  const divRef = useRef(null);
  const context = useContext(CallsContext);

  const handleNodeClick = (node) => {
    context.setSelectedCall(node.data);
  };

  const handleRenderNode = (node) => {
    return <CallNode node={node} />;
  };

  useEffect(() => {
    const resizeObserver = new ResizeObserver((event) => {
      setCurrentWidth(event[0].contentBoxSize[0].inlineSize);
    });
    resizeObserver.observe(divRef.current);
  });

  return (
    <div className="CallNodeStack FillHeight" ref={divRef}>
      <h2 className="CardTitle">Call Stack</h2>
      <Tree
        data={parseCallStack(context.callArray)}
        translate={{ x: currentWidth / 2, y: 50 }}
        nodeSize={{ x: 140, y: 70 }}
        orientation="vertical"
        enableLegacyTransitions={true}
        transitionDuration={300}
        renderCustomNodeElement={handleRenderNode}
        onNodeClick={handleNodeClick}
        collapsible={false}
        zoomable={false}
        hasInteractiveNodes={true}
      />
    </div>
  );
};

export default CallNodeStack;
