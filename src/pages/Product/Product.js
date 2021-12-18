import React from 'react'

const Product = () => {
    return (
        <div>
            <form>
                <div>
                    <label htmlFor="reference">Referencia</label>
                    <input type="text" id="reference" name="reference" placeholder="Cod Referencia" />
                </div>
                <div>
                    <label htmlFor="brand">Nombre</label>
                    <input type="text" id="brand" name="brand" placeholder="Marca" />
                </div> 
                <div>
                    <label htmlFor="brand">Categoría</label>
                    <input type="text" id="category" name="category" placeholder="Categoría" />
                </div>      
                <button type="submit">Enviar</button>              
            </form>
        </div>
    )
}

export default Product;