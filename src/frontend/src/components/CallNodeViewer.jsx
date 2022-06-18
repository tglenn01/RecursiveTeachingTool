import { useContext } from "react";
import { Collapse, Table } from "antd";
import CallsContext from "../contexts/CallsContext";
import "./components.css";

const { Panel } = Collapse;

const CallNodeViewer = () => {
  const context = useContext(CallsContext);
  const { selectedCall } = context;

  let callParams = [];
  if (selectedCall != null) {
    callParams = Object.entries(selectedCall.attributes.params).map(
      ([key, value]) => ({
        variable: key,
        value,
        key,
      })
    );
  }

  const columns = [
    {
      title: "",
      dataIndex: "variable",
      key: "name",
    },
    {
      title: "",
      dataIndex: "value",
      key: "value",
    },
  ];

  return (
    <div className="CallNodeViewer FillHeight">
      <h2 className="CardTitle">Call State</h2>
      <Collapse ghost={true}>
        <Panel header="Parameters" key="1">
          {selectedCall != null && (
            <Table
              columns={columns}
              dataSource={callParams}
              pagination={false}
            />
          )}
        </Panel>
        <Panel header="Variables" key="2">
          None
        </Panel>
        <Panel header="Return Value" key="3">
          None
        </Panel>
      </Collapse>
    </div>
  );
};

export default CallNodeViewer;
