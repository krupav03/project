import React, { useState } from "react";
import { Progress } from "antd";
import {
  DownOutlined,
  DownloadOutlined,
  PoweroffOutlined,
  SmileOutlined,
  HomeOutlined,
  HeartTwoTone,
} from "@ant-design/icons";
import { Button, Tooltip, Radio, Space, Dropdown, Menu } from "antd";
import { Carousel } from "antd";
// import type { MenuProps } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { Timeline } from "antd";
import { Drawer } from "antd";
import "./App.css";

const Boot = () => {
  const [size, setSize] = useState("large");
  const [loadings, setLoadings] = useState([]);

  // /loadings
  const enterLoading = (index) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });
    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 6000);
  };

  const menu = (
    <Menu
      items={[
        {
          label: <a href="https://www.antgroup.com">1st menu item</a>,
          key: "0",
        },
        {
          label: <a href="https://www.aliyun.com">2nd menu item</a>,
          key: "1",
        },
        {
          type: "divider",
        },
        {
          label: "3rd menu item",
          key: "3",
        },
      ]}
    />
  );

  const contentStyle = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <h1>Button Styling</h1>
      <Button type="primary" block>
        Primary Button
      </Button>{" "}
      &nbsp;
      <Button>Default Button</Button> &nbsp;
      <Button type="dashed">Dashed Button</Button> &nbsp;
      <Button type="text">Text Button</Button> &nbsp;
      <Button type="link">Link Button</Button> &nbsp;
      {/* icon in button */}
      <br />
      <br />
      <Tooltip title="search">
        <Button
          type="primary"
          shape="circle"
          icon={<SearchOutlined style={{ color: "black" }} />}
        />
      </Tooltip>{" "}
      &nbsp;
      <br />
      <br />
      <Button type="primary" shape="circle" style={{ fontSize: 15 }}>
        A
      </Button>{" "}
      &nbsp;
      <br />
      <br />
      <Button type="primary">Search</Button> &nbsp;
      <br />
      <br />
      <Tooltip title="search">
        <Button shape="circle" icon={<SearchOutlined />} />
      </Tooltip>{" "}
      &nbsp;
      <br />
      <br />
      <Button icon={<SearchOutlined />}>Search</Button> &nbsp;
      <br />
      <br />
      <Tooltip title="search">
        <Button shape="circle" icon={<SearchOutlined />} />
      </Tooltip>
      <br />
      <br />
      <Button icon={<SearchOutlined />}>Search</Button>
      <br />
      <br />
      <Tooltip title="search">
        <Button type="dashed" shape="circle" icon={<SearchOutlined />} />
      </Tooltip>
      <br />
      <br />
      <Button type="dashed" icon={<SearchOutlined />}>
        Search
      </Button>
      <br />
      <br />
      <Button icon={<SearchOutlined />} href="https://www.google.com" />
      <br />
      <br />
      <Tooltip title="search">
        <Button
          type="primary"
          shape="circle"
          icon={<SearchOutlined />}
          size="large"
        />
      </Tooltip>
      <br />
      <br />
      <Button type="primary" shape="circle" size="large">
        A
      </Button>
      <br />
      <br />
      <Button type="primary" icon={<SearchOutlined />} size="large">
        Search
      </Button>
      <br />
      <br />
      <Tooltip title="search">
        <Button shape="circle" icon={<SearchOutlined />} size="large" />
      </Tooltip>
      <br />
      <br />
      <Button icon={<SearchOutlined />} size="large">
        Search
      </Button>
      <br />
      <br />
      <Tooltip title="search">
        <Button shape="circle" icon={<SearchOutlined />} size="large" />
      </Tooltip>
      <br />
      <br />
      <Button icon={<SearchOutlined />} size="large">
        Search
      </Button>
      <br />
      <br />
      <Tooltip title="search">
        <Button
          type="dashed"
          shape="circle"
          // icon={<SearchOutlined />}
          icon={<DownloadOutlined />}
          size="large"
        />
      </Tooltip>
      <br />
      <br />
      <Button type="dashed" icon={<SearchOutlined />} size="large">
        Search
      </Button>
      <br />
      <br />
      <Button
        icon={<SearchOutlined />}
        size="large"
        href="https://www.google.com"
      />
      <br />
      <br />
      <Radio.Group value={size} onChange={(e) => setSize(e.target.value)}>
        <Radio.Button value="large">Large</Radio.Button>
        <Radio.Button value="default">Default</Radio.Button>
        <Radio.Button value="small">Small</Radio.Button>
        <br />
        <br />
      </Radio.Group>
      <br />
      <br />
      <Button type="primary" size={size}>
        Primary
      </Button>{" "}
      &nbsp; &nbsp;
      <Button size={size}>Default</Button> &nbsp; &nbsp;
      <Button type="dashed" size={size}>
        Dashed
      </Button>
      <br />
      <Button type="link" size={size}>
        Link
      </Button>
      <br />
      <Button type="primary" icon={<DownloadOutlined />} size={size} /> &nbsp;
      &nbsp;
      <Button
        type="primary"
        shape="circle"
        icon={<DownloadOutlined />}
        size={size}
      />{" "}
      &nbsp; &nbsp;
      <Button
        type="primary"
        shape="round"
        icon={<DownloadOutlined />}
        size={size}
      />{" "}
      &nbsp; &nbsp;
      <Button
        type="primary"
        shape="round"
        icon={<DownloadOutlined />}
        size={size}
      >
        Download
      </Button>{" "}
      &nbsp; &nbsp;
      <Button type="primary" icon={<DownloadOutlined />} size={size}>
        Download
      </Button>
      {/* loading */}
      <Space style={{ width: "100%" }}>
        <Button type="primary" loading>
          Loading
        </Button>
        <Button type="primary" size="small" loading>
          Loading
        </Button>
        <Button type="primary" icon={<PoweroffOutlined />} loading />
      </Space>
      <Space style={{ width: "100%" }}>
        <Button
          type="primary"
          loading={loadings[0]}
          onClick={() => enterLoading(0)}
        >
          Click me!
        </Button>
        <Button
          type="primary"
          icon={<PoweroffOutlined />}
          loading={loadings[1]}
          onClick={() => enterLoading(1)}
        >
          Click me!
        </Button>
        <Button
          type="primary"
          icon={<PoweroffOutlined />}
          loading={loadings[2]}
          onClick={() => enterLoading(2)}
        />
      </Space>
      <h1>Icon Styling</h1>
      <SmileOutlined spin style={{ fontSize: 50 }} />
      <HomeOutlined style={{ fontSize: 50 }} rotate={180} />
      <HeartTwoTone twoToneColor="#eb2f96" style={{ fontSize: 50 }} />
      <br />
      {/* dropdown */}
      <h1>Dropdown</h1>
      <Dropdown overlay={menu} trigger={["click"]}>
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            Click me
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
      <br />
      {/* carousel */}
      <Carousel autoplay>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
      {/* Timeline */}
      <h1>Timeline</h1>
      <Timeline>
        <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
        <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
        <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
        <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
      </Timeline>
      <br />
      {/* Drawer */}
      <h1>Drawer</h1>
      <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
      <Drawer
        title="Basic Drawer"
        placement="right"
        onClose={onClose}
        open={open}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
      {/* Progress */}
      <h1>Progress</h1>
      <Progress percent={30} />
      <Progress percent={50} status="active" />
      <Progress percent={70} status="exception" />
      <Progress percent={100} />
      <Progress percent={50} showInfo={false} />
    </div>
  );
};

export default Boot;
