import React, { useEffect, useState } from "react";
import axios from "axios";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./App.css";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { useColumnOrder } from "react-table";
import "antd/dist/antd.css";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const Tsearch = () => {
  // const classes = useStyles();
  const [detail, setDetails] = useState([]);
  const [search, setSearch] = useState("");
  const [sorted, setSorted] = useState({ sorted: "id", reversed: false });

  const getData = async () => {
    try {
      const data = await axios.get(
        "https://jsonplaceholder.typicode.com/comments"
      );
      console.log(data.data);
      setDetails(data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const sortById = () => {
    setSorted({ sorted: "id", reversed: !sorted.reversed });
    const dataCopy = [...detail];
    dataCopy.sort((dataA, dataB) => {
      if (sorted.reversed) {
        return dataA.id - dataB.id;
      }
      return dataB.id - dataA.id;
    });
    setDetails(dataCopy);
  };

  const renderArrow = () => {
    if (sorted.reversed) {
      return <FaArrowUp style={{ fontSize: 25 }} />;
    }
    return <FaArrowDown style={{ fontSize: 25 }} />;
  };

  return (
    <center>
      <div className="width">
        <h1 className="head">Data Fetched from Api Using Material UI</h1>

        <input
          type="text"
          placeholder="search here"
          className="input"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />

        {/* {detail
          .filter((item) => {
            if (search == "") {
              return item;
            } else if (item.name.toLowerCase().includes(search.toLowerCase())) {
              return item;
            }
          })
          .map((item) => {
            return (
              <p>
                {item.body} - {item.email}
              </p>
            );
          })} */}
        <br />
        <br />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Post Id</StyledTableCell>
                <StyledTableCell onClick={sortById}>
                  {/* // onClick={() => { */}
                  {/* //   setSortBy([{ id: useColumnOrder.id, desc: false }]);
                //   console.log(detail);
                // }} */}
                  Id {sorted.sorted === "id" ? renderArrow() : null}
                </StyledTableCell>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell>Email</StyledTableCell>
                <StyledTableCell>Body</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {detail
                .filter((item) => {
                  if (search == "") {
                    return item;
                  } else if (
                    item.name.toLowerCase().includes(search.toLowerCase())
                  ) {
                    return item;
                  }
                })

                .map((item) => {
                  return (
                    // <p>
                    //   {item.body} - {item.email}
                    // </p>
                    <StyledTableRow key={item.id}>
                      <StyledTableCell component="th" scope="row">
                        {item.postId}
                      </StyledTableCell>
                      <StyledTableCell component="th" scope="row">
                        {item.id}
                      </StyledTableCell>
                      <StyledTableCell component="th" scope="row">
                        {item.name}
                      </StyledTableCell>
                      <StyledTableCell component="th" scope="row">
                        {item.email}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {item.body}
                      </StyledTableCell>
                    </StyledTableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </center>
  );
};

export default Tsearch;
// detail.sort((a, b) => (a.id > b.id ? 1 : -1));
