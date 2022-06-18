import { createContext } from "react";

const context = createContext({
  callTree: {},
  callArray: [],
  selectedCall: null,
  setSelectedCall: null,
  selectedNodeColor: "",
});

export default context;
