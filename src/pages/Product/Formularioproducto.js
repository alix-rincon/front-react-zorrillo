import React, { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
//import ProductTable from "../../components/Table/ProductTable";

const Formularioproducto = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [Entradas, setEntradas] = useState([]);

  const onSubmit = (data, e) => {
      debugger;
      e.preventDefault();
    console.log(data);
    setEntradas([...Entradas, data]);

    fetch("http://localhost:8080/api/fragance/new", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => {
        return res.text()
      })
      .then((data) => {
        console.log(data);
        //resolve(data ? JSON.parse(data) : {})
      })
      .catch((err) => console.error(err));

    e.target.reset();
  };

  return (
    <Fragment>      
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="container mx-auto p-20"
      ><h5 class="text-xl font-medium leading-tight mt-0 mb-5 text-blue-600">Formulario Crear Producto</h5>
        <div className="flex flex-wrap -mx-3 mb-6">
          
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="reference"
            >
              REFERENCIA
            </label>
            <input
              type="text"
              name="reference"
              placeholder="Referencia"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              {...register("reference", { required: true })}
            />
            {errors.reference && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="brand"
            >
              MARCA
            </label>
            <input
              type="text"
              name="brand"
              placeholder="Marca"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              {...register("brand", { required: true })}
            />
            {errors.brand && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="description"
            >
              DESCRIPCION
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="description"
              name="description"
              type="text"
              placeholder="Descripción"
              {...register("description", { required: true })}
            />
            <p className="text-gray-600 text-xs italic">
              Descripción del producto
            </p>
            {errors.description && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="presentation"
            >
              Presentación
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="presentation"
              name="presentation"
              type="text"
              placeholder="Presentación"
              {...register("presentation", { required: true })}
            />
            {errors.presentation && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="category"
            >
              Categoría
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="category"
                name="category"
                {...register("category", { required: true })}
              >
                <option value="">Seleccione</option>
                <option value="CATEGORIA 1">Categoría 1</option>
                <option value="CATEGORIA 1">Categoría 2</option>
                <option value="CATEGORIA 1">Categoría 3</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
            {errors.category && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="photography"
            >
              Fotografía
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="photography"
              name="photography"
              type="text"
              placeholder="Fotografía"
              {...register("photography", { required: true })}
            />
            {errors.photography && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-8 md:mb-1">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="availability"
            >
              Disponible
            </label>
            <label className="text-gray-700 inline-flex items-center">
              <input
                type="radio"
                className="form-radio"
                name="availability"
                value="true"
                {...register("avaliability")}
              />
              <span className="ml-2">Si</span>
            </label>
            <label className="text-gray-700 inline-flex items-center ml-6">
              <input
                type="radio"
                className="form-radio"
                name="availability"
                value="false"
                {...register("avaliability")}
              />
              <span className="ml-2">No</span>
            </label>
          </div>
        </div>
        <div className="flex flex-wrap -mx-2 mb-6">
          <div className="w-full md:w-1/2 px-2 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="price"
            >
              Precio
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="price"
              name="price"
              type="number"
              placeholder="Precio"
              {...register("price")}
            />
          </div>
          <div className="w-full md:w-1/2 px-2 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="quantity"
            >
              Cantidad
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="quantity"
              name="quantity"
              type="number"
              placeholder="Cantidad"
              {...register("quantity")}
            />
          </div>
        </div>
        <button
          type="submit"
          className="mb-2 w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Registrar
        </button>
      </form>
    </Fragment>
  );
};

export default Formularioproducto;
