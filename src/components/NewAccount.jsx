import React from "react";

import Constantes from "../Constantes";
import Swal from "../../node_modules/sweetalert2/dist/sweetalert2.all";

import "./styles/NewAccount.css";

class NewAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datos: {
        nombre: "",
        apellido: "",
        edad: "",
        fecha_nacimiento: "",
        pais: "",
        correo: "",
        clave: "",
        clave2: "",
      },
    };
    // Indicarle a las funciones a quién nos referimos con "this"
    this.Formulario = this.Formulario.bind(this);
    this.manejarCambio = this.manejarCambio.bind(this);
  }

  async Formulario(evento) {
    evento.preventDefault();

    const cargaUtil = JSON.stringify(this.state.datos);

    const respuesta = await fetch(`${Constantes.RUTA_API}/NewAccount.php`, {
      method: "POST",
      body: cargaUtil,
    });

    const respuesta_json = await respuesta.json();

    if (respuesta_json) {
      if (respuesta_json === "S") {
        Swal.fire(
          "¡Felicidades!",
          "Tu cuenta ha sido creada. Ya puedes iniciar sesión.",
          "success"
        ).then((result) => {
          if (result.isConfirmed) {
            window.location.href = "/iniciar-sesion/";
          }
        });

        this.setState({
          datos: {
            nombre: "",
            apellido: "",
            edad: "",
            fecha_nacimiento: "",
            pais: "",
            correo: "",
            clave: "",
            clave2: "",
          },
        });
      } else {
        Swal.fire("Oops", respuesta_json, "error");
      }
    } else {
      Swal.fire("Oops", "Ha ocurrido un error. Intente nuevamente.", "error");
    }
  }

  manejarCambio(evento) {
    const clave = evento.target.id;
    let valor = evento.target.value;

    this.setState((state) => {
      const datosActualizados = state.datos;

      if (clave === "edad") {
        valor = parseFloat(valor);
      }

      datosActualizados[clave] = valor;
      return {
        datos: datosActualizados,
      };
    });
  }

  render() {
    return (
      <React.Fragment>
        <section className="login-account">
          <div className="login-container__account">
            <h2>Ingresa tus datos</h2>
            <div className="form-container__account">
              <form className="form" onSubmit={this.Formulario}>
                <div className="input name-form">
                  <h3>Nombre:</h3>
                  <label for="nombre">
                    <input
                      type="text"
                      placeholder="Tu nombre"
                      id="nombre"
                      required
                      onChange={this.manejarCambio}
                      value={this.state.datos.nombre}
                    />
                  </label>
                </div>
                <div className="input lastname-form">
                  <h3>Apellido:</h3>
                  <label for="apellido">
                    <input
                      type="text"
                      placeholder="Tu apellido"
                      id="apellido"
                      required
                      onChange={this.manejarCambio}
                      value={this.state.datos.apellido}
                    />
                  </label>
                </div>
                <div className="input age-form">
                  <h3>Edad:</h3>
                  <label for="edad">
                    <input
                      type="number"
                      placeholder="00"
                      id="edad"
                      required
                      onChange={this.manejarCambio}
                      value={this.state.datos.edad}
                    />
                  </label>
                </div>
                <div className="input date-form">
                  <h3>Fecha de nacimiento:</h3>
                  <label for="fecha_nacimiento">
                    <input
                      type="date"
                      id="fecha_nacimiento"
                      required
                      onChange={this.manejarCambio}
                      value={this.state.datos.fecha_nacimiento}
                    />
                  </label>
                </div>
                <div className="input country-form">
                  <h3>País:</h3>
                  <label for="pais">
                    <input
                      type="text"
                      placeholder="Tu pais"
                      id="pais"
                      required
                      onChange={this.manejarCambio}
                      value={this.state.datos.pais}
                    />
                  </label>
                </div>
                <div className="input email-form">
                  <h3>Correo:</h3>
                  <label for="correo">
                    <input
                      type="email"
                      placeholder="example@gmail.com"
                      id="correo"
                      required
                      onChange={this.manejarCambio}
                      value={this.state.datos.correo}
                    />
                  </label>
                </div>
                <div className="input password-form">
                  <h3>Crear contraseña: </h3>
                  <label for="clave">
                    <input
                      type="password"
                      placeholder="contraseña"
                      id="clave"
                      required
                      onChange={this.manejarCambio}
                      value={this.state.datos.clave}
                    />
                  </label>
                </div>
                <div className="input password-form2">
                  <h3>Repite contraseña: </h3>
                  <label for="clave2">
                    <input
                      type="password"
                      placeholder="contraseña"
                      id="clave2"
                      required
                      onChange={this.manejarCambio}
                      value={this.state.datos.clave2}
                    />
                  </label>
                </div>
                <input
                  type="submit"
                  value="Crear Cuenta"
                  className="create-account"
                  id="enviar"
                />
              </form>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default NewAccount;
