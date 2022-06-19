import { useEffect, useRef, useState } from "react";
import CallsContext from "./contexts/CallsContext";
import { CallNodeStack, CallNodeTree, CallNodeViewer } from "./components";
import { Layout, Button } from "antd";
import { RightCircleTwoTone, UploadOutlined } from "@ant-design/icons";
import "./Main.css";

const { Header, Content, Sider } = Layout;

const SELECTED_COLOR_HEX = "#1F1135";

// Dummy data... transfer data from backend here into similar format
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
  const fileInputRef = useRef(null);
  const [file, setFile] = useState(null);
  const [selectedCall, setSelectedCall] = useState(null);
  const [viewerSidebarCollapsed, setViewerSidebarCollapsed] = useState(true);

  useEffect(() => {
    if (selectedCall !== null) {
      setViewerSidebarCollapsed(false);
    }
  }, [selectedCall]);

  return (
    <CallsContext.Provider
      value={{
        callTree,
        callArray,
        selectedCall,
        setSelectedCall,
        selectedNodeColor: SELECTED_COLOR_HEX,
      }}
    >
      <Layout className="Main">
        {/* <Header>header</Header> */}
        <Layout>
          <Sider
            collapsedWidth={40}
            collapsed={viewerSidebarCollapsed}
            collapsible={true}
            trigger={null}
          >
            <div className="Viewer">
              {viewerSidebarCollapsed ? null : <CallNodeViewer />}
              <RightCircleTwoTone
                className="SidebarTrigger"
                style={{ fontSize: "250%" }}
                onClick={() => setViewerSidebarCollapsed((prev) => !prev)}
                twoToneColor={SELECTED_COLOR_HEX}
                rotate={viewerSidebarCollapsed ? 0 : 180}
              />
            </div>
          </Sider>
          <Content>
            <div className="Tree">
              {file ? (
                <CallNodeTree title={file.name} />
              ) : (
                <div className="FileInputContainer">
                  <Button
                    type="primary"
                    shape="round"
                    icon={<UploadOutlined />}
                    onClick={() => fileInputRef.current.click()}
                  >
                    Upload (.java) file
                  </Button>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".java"
                    className="Hidden"
                    onChange={(e) => {
                      setFile(fileInputRef.current.files[0]);
                    }}
                  />
                </div>
              )}
            </div>
          </Content>
          <Sider width="20%">
            <div className="Stack">{file && <CallNodeStack />}</div>
          </Sider>
        </Layout>
      </Layout>
    </CallsContext.Provider>
  );
};
export default Main;
