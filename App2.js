
import React, { useState, useEffect } from "react";
import { Col, Row } from "reactstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [productos, setProductos] = useState([]);
  const valorInicial = {
    categoria: "",
    nombre: "",
    descripcion: "",
    precio: "",
    disponibilidad: "",
    id: null,
    stock: "",
  };
  const [producto, setProducto] = useState(valorInicial);

  useEffect(() => {
    consultarProductos();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto({ ...producto, [name]: value });
  };

  const consultarProductos = () => {
    fetch("http://localhost:8080/api/productos/all")
      .then((res) => res.json())
      .then((data) => {
        setProductos(data);
        console.log(data);
      });
  };

  const addProducto = (e) => {
    e.preventDefault();

    if (producto.id == null) {
      fetch("http://localhost:8080/api/productos/save", {
        method: "POST",
        body: JSON.stringify(producto),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setProducto(valorInicial);
          consultarProductos();
        })
        .catch((err) => console.error(err));
    } else {
      fetch(`http://localhost:8080/api/productos/update`, {
        method: "PUT",
        body: JSON.stringify({
          id: producto.id,
          categoria: producto.categoria,
          nombre: producto.nombre,
          descripcion: producto.descripcion,
          precio: producto.precio,
          disponibilidad: producto.disponibilidad,
          stock: producto.stock,
          urlfoto: producto.urlfoto,
        }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setProducto(valorInicial);
          consultarProductos();
        });
    }
  };

  const deleteProducto = (id) => {
    if (window.confirm("Realmente desea eliminar el producto")) {
      fetch(`http://localhost:8080/api/productos/${id}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }).then((data) => {
        console.log(data);
        consultarProductos();
      });
    }
  };

  const editProducto=(prodid)=> {
    fetch(`http://localhost:8080/api/productos/${prodid}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducto({
          id: data.id,
          categoria: data.categoria,
          nombre: data.nombre,
          descripcion: data.descripcion,
          precio: data.precio,
          disponibilidad: data.disponibilidad,
          stock: data.stock,         
        });
      });
  }

  return (
    <div className="container">
      <Row>
        <Col sm="7">
          <h4>Listado de productos</h4>
          <table border="1" className="table">
            <thead className="thead-dark">
              <tr>
                <th>Nombre</th>
                <th>Categoria</th>
                <th>Disponible</th>
                <th>Precio</th>
                <th>Stock</th>
              </tr>
            </thead>
            <tbody>
              {productos.map((prod) => {
                return (
                  <tr key={prod.id}>
                    <td>{prod.nombre}</td>
                    <td>{prod.categoria}</td>
                    <td>{prod.disponibilidad}</td>
                    <td>{prod.precio}</td>
                    <td>{prod.stock}</td>
                    <td>
                      <button
                        onClick={()=>deleteProducto(prod.id)}
                        type="button"
                        className="btn btn-primary"
                      >
                        Borrar
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={()=>editProducto(prod.id)}
                        type="button"
                        className="btn btn-primary"
                      >
                        Editar
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Col>
        <Col sm="5">
          <h4>Nuevo Producto</h4>
          <form onSubmit={addProducto}>
            <div className="mb-3">
              <input
                name="categoria"
                className="form-control"
                onChange={handleChange}
                value={producto.categoria}
                type="text"
                placeholder="Categoria"
                autoFocus
              />
            </div>
            <div className="mb-3">
              <input
                name="precio"
                className="form-control"
                onChange={handleChange}
                value={producto.precio}
                type="text"
                placeholder="precio"
              />
            </div>
            <div className="mb-3">
              <input
                name="nombre"
                className="form-control"
                onChange={handleChange}
                value={producto.nombre}
                type="text"
                placeholder="nombre"
              />
            </div>
            <div className="mb-3">
              <input
                name="descripcion"
                className="form-control"
                onChange={handleChange}
                value={producto.descripcion}
                type="text"
                placeholder="descripción"
              />
            </div>
            <div className="mb-3">
              <input
                name="disponibilidad"
                className="form-control"
                onChange={handleChange}
                value={producto.disponibilidad}
                type="text"
                placeholder="disponibilidad"
              />
            </div>

            <div className="mb-3">
              <input
                name="stock"
                className="form-control"
                onChange={handleChange}
                value={producto.stock}
                type="text"
                placeholder="stock"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Guardar
            </button>
          </form>
        </Col>
      </Row>
    </div>
  );
}

export default App;