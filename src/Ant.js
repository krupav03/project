import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import "./App.css";
import { Table } from "antd";
import { Pagination } from "antd";
import { Input, Space } from "antd";

const Ant = () => {
  const { Search } = Input;

  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);
  // const [search, setSearch] = useState("");
  // const onSearch = (value) => console.log(value);
  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((data) => {
        setDataSource(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  const columns = [
    {
      key: "1",
      title: "Post Id",
      dataIndex: "postId",
    },
    {
      key: "2",
      title: "Id",
      dataIndex: "id",
      sorter: (record1, record2) => {
        return record1.id > record2.id;
      },
    },
    {
      key: "3",
      title: "Name",
      dataIndex: "name",
    },
    {
      key: "4",
      title: "Email",
      dataIndex: "email",
    },
    {
      key: "5",
      title: "Body",
      dataIndex: "body",
    },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <center>
          <h1 style={{ fontFamily: "sans-serif", fontWeight: "bold" }}>
            Sorting Table
          </h1>
          {/* <Search
            placeholder="input search text"
            allowClear
            onSearch={onSearch}
            style={{
              width: 200,
            }}
          /> */}
        </center>

        {/* <input
            type="text"
            placeholder="search here"
            className="input"
            onChange={(e) => {
              setSearch(e.target.value);
            }} */}

        <Table
          style={{ backgroundColor: "#FFD1D1" }}
          className="table"
          loading={loading}
          columns={columns}
          dataSource={dataSource}
          // pagination={{
          //   current: page,
          //   pageSize: pageSize,
          //   total: 500,
          //   onChange: (page, pageSize) => {
          //     setPage(page);
          //     setPageSize(pageSize);
          //   }
        >
          {/* {dataSource.filter((item) => {
            if (search == "") {
              return item;
            } else if (item.name.toLowerCase().includes(search.toLowerCase())) {
              return item;
            }
          })} */}
          <Pagination defaultCurrent={1} total={500} />
        </Table>
      </header>
    </div>
  );
};

export default Ant;
