import React, { Fragment, useState, useEffect } from "react";
import {
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
} from "@material-ui/core";
import axios from "axios";
import { useParams } from "react-router-dom";

const TableProducts = ({ props }) => {
  
  const baseUrl = "http://localhost:8080/api/order/salesman/" + 3;
  const [data_, setData] = useState([]);
  const [dataproducts, setDataProducts] = useState([]);

  const getProducts = async () => {
    axios.get(baseUrl).then((res) => {
      const queryString = window.location.pathname.split("/")[2];
      setData(res.data.filter((x) => x.id == queryString));
      setDataProducts(res.data.products);
    });
  };

  useEffect(async () => {
    await getProducts();
  }, []);

  return (
    <Fragment>
      <h1>Listado de productos</h1>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Referencia</TableCell>
            <TableCell>Marca</TableCell>
            <TableCell>Disponibilidad</TableCell>
            <TableCell>Cantidad</TableCell>
            <TableCell>Stock</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data_.map((reg) =>
            Object.keys(reg.products).map((reg_, i) => (
              <TableRow key={reg_}>
                <TableCell>{reg.products[reg_].reference}</TableCell>
                <TableCell>{reg.products[reg_].brand}</TableCell>
                <TableCell>
                  {reg.products[reg_].availability ? "si" : "no"}
                </TableCell>
                <TableCell>{reg.products[reg_].quantity}</TableCell>
                <TableCell>{reg.products[reg_].quantity}</TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </Fragment>
  );
};

export default TableProducts;
