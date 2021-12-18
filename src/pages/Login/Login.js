import React, {useState} from "react";

export const Login = props => {

    const[loginForm, setLoginForm] = useState({user: "", password: ""});
    const[show, setShow] = useState(false);

    const handleClick = () => {
      console.log(loginForm);
      setShow(false);
      authenticateUser(loginForm.user, loginForm.password);
    }

    const authenticateUser = (email, password) => {
        fetch(`http://localhost:8080/api/user/${email}/${password}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            if(!data.id){
              alert("no");
              setShow(true);
            }
            else{
              sessionStorage.setItem("user_", data);
            }
        });
    };

  return (
    <div className="flex place-content-center p-20">
      <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm p-4 sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form className="space-y-6" action="#">
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">
            Iniciar Sesión
          </h3>
          <div>
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
            >
              Usuario
            </label>
            <input
              type="text"
              name="user"
              id="user"
              value={loginForm.user}
              onChange={e => setLoginForm({...loginForm, user: e.target.value})}
              placeholder="nombre@correo.com"
              className={show ? "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white border border-red-500" :
              "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"}
            />
            {show ? <p className="p-2 text-red-500 text-xs italic">Debe ingresar ususario</p> : <p></p>}            
          </div>
          <div>
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
            >
              Contraseña
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={loginForm.password}
              onChange={e => setLoginForm({...loginForm, password: e.target.value})}
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required=""
            />
            {show ? <p className="p-2 text-red-500 text-xs italic">Debe ingresar Contraseña</p> : <p></p>}
          </div>
          <button
            onClick={handleClick}
            type="button"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Ingresar
          </button>
          {show ? <p className="text-red-500 text-xs italic">Usuario o contraseña Incorrecto</p> : <p></p>}
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            No tiene una cuenta?{" "}
            <a
              href="./SignForm.js"
              className="text-blue-700 hover:underline dark:text-blue-500"
            >
              Crear cuenta
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
