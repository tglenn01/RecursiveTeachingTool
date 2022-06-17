import { useState } from "react";
import CallsContext from "./contexts/CallsContext";
import { CallNodeStack, CallNodeTree, CallNodeViewer } from "./components";
import "./Main.css";

const callTree = {
  id: 1,
  name: "FOO",
  params: { x: 0, y: 1 },
  subcalls: [
    {
      id: 2,
      name: "FOO",
      params: { x: 2 },
      subcalls: [
        {
          id: 3,
          name: "FOO",
          params: { x: 4 },
          subcalls: [],
        },
        {
          id: 4,
          name: "FOO",
          params: { x: 6 },
          subcalls: [],
        },
      ],
    },
    {
      id: 5,
      name: "FOO",
      params: { x: 8 },
      subcalls: [
        {
          id: 6,
          name: "FOO",
          params: { x: 10 },
          subcalls: [],
        },
        {
          id: 7,
          name: "FOO",
          params: { x: 12 },
          subcalls: [],
        },
      ],
    },
  ],
};

const callArray = [
  {
    id: 1,
    name: "FOO",
    params: { x: 0 },
  },
  {
    id: 2,
    name: "FOO",
    params: { x: 2 },
  },
  {
    id: 3,
    name: "FOO",
    params: { x: 4 },
  },
  {
    id: 4,
    name: "FOO",
    params: { x: 6 },
  },
  {
    id: 5,
    name: "FOO",
    params: { x: 8 },
  },
  {
    id: 6,
    name: "FOO",
    params: { x: 10 },
    subcalls: [],
  },
  {
    id: 7,
    name: "FOO",
    params: { x: 12 },
    subcalls: [],
  },
];

const Main = () => {
  const [selectedCall, setSelectedCall] = useState(null);
  return (
    <CallsContext.Provider
      value={{
        callTree,
        callArray,
        selectedCall,
        setSelectedCall,
        selectedNodeColor: "#167C80",
      }}
    >
      <div className="Main">
        <div className="Tree">
          <CallNodeTree />
        </div>
        <div className="Viewer">
          <CallNodeViewer />
        </div>
        <div className="Stack">
          <CallNodeStack />
        </div>
      </div>
    </CallsContext.Provider>
  );
};
export default Main;
