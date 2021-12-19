import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import {
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
} from "@material-ui/core";
import {
    useNavigate
  } from "react-router-dom";

const baseUrl = "http://localhost:8080/api/order/salesman/" + 3;

const ListOrder = () => {
  const [data_, setData] = useState([]);
  const [dataproducts, setDataProducts] = useState([]);

  let navigate = useNavigate();

  const handleClick = (param) => {
    navigate("/tableProducts/"+param,{ replace: true});
  };


  const getProducts = async () => {

    axios.get(baseUrl).then((res) => {
     //console.log(res.data)
      setData(res.data);
      setDataProducts(res.data.products);
    });
  };

  useEffect(async () => {
    await getProducts();
  }, []);
  return (
    <Fragment>
        <h1>Listado de ordenes</h1>
        <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Fecha</TableCell>
            <TableCell>Estado</TableCell>
            <TableCell>Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data_.map((consola) => (
              <TableRow key={consola.id}>
              <TableCell>{consola.id}</TableCell>
              <TableCell>{consola.registerDay}</TableCell>
              <TableCell>{consola.status}</TableCell>
              <TableCell><button onClick={() => handleClick(consola.id)} className="btn">Listar Productos</button></TableCell>
              </TableRow>
          ))}
        </TableBody>
      </Table><br/>     
    </Fragment>
  );
};

export default ListOrder;
