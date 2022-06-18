import { useContext, useEffect, useRef, useState } from "react";
import Tree from "react-d3-tree";
import CallsContext from "../contexts/CallsContext";
import CallNode from "./CallNode";

const parseCallTree = (call) => {
  return {
    ...call,
    attributes: {
      id: call.id,
      params: { ...call.params },
    },
    children: call.subcalls.map(parseCallTree),
  };
};

const CallNodeTree = () => {
  const context = useContext(CallsContext);
  const [currentWidth, setCurrentWidth] = useState(0);
  const divRef = useRef(null);

  const handleNodeClick = (node) => {
    context.setSelectedCall(node.data);
  };

  const handleRenderNode = (node) => {
    return <CallNode node={node} showArgs={true} />;
  };

  useEffect(() => {
    const resizeObserver = new ResizeObserver((event) => {
      setCurrentWidth(event[0].contentBoxSize[0].inlineSize);
    });
    resizeObserver.observe(divRef.current);
  });

  return (
    // `<Tree />` will fill width/height of its container; in this case `#treeWrapper`.
    <div className="CallNodeTree FillHeight" ref={divRef}>
      <h2 className="CardTitle">Call Tree</h2>
      <Tree
        data={parseCallTree(context.callTree)}
        translate={{ x: currentWidth / 2, y: 50 }}
        orientation="vertical"
        enableLegacyTransitions={true}
        transitionDuration={300}
        renderCustomNodeElement={handleRenderNode}
        onNodeClick={handleNodeClick}
        collapsible={false}
        pathClassFunc={() => "CallNodePath"}
      />
    </div>
  );
};

export default CallNodeTree;
