import React from "react";
import { Link } from "react-router-dom";

import Constantes from "../Constantes";
import Swal from '../../node_modules/sweetalert2/dist/sweetalert2.all'
import Cookies from 'universal-cookie'

class AccountSing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datos: {
        correo: "",
        clave: "",
      },

      sesion: [],
    };

    // Indicarle a las funciones a quién nos referimos con "this"
    this.Formulario = this.Formulario.bind(this);
    this.manejarCambio = this.manejarCambio.bind(this);
  }

  async Formulario(evento) {
    evento.preventDefault();

    const cargaUtil = JSON.stringify(this.state.datos);

    const respuesta = await fetch(`${Constantes.RUTA_API}/SignIn.php`, {
      method: "POST",
      body: cargaUtil,
    });

    const respuesta_json = await respuesta.json();

    if (respuesta_json) {
      this.setState({ sesion: respuesta_json });

      if (
        this.state.sesion.privilegio === "usuario" ||
        this.state.sesion.privilegio === "administrador"
      ) {
        const cookies = new Cookies();

        cookies.set("id", this.state.sesion.id, { path: "/", maxAge: 604800 });
        cookies.set("nombre", this.state.sesion.nombre, {
          path: "/",
          maxAge: 604800,
        });
        cookies.set("apellido", this.state.sesion.apellido, {
          path: "/",
          maxAge: 604800,
        });
        cookies.set("correo", this.state.sesion.correo, {
          path: "/",
          maxAge: 604800,
        });
        cookies.set("privilegio", this.state.sesion.privilegio, {
          path: "/",
          maxAge: 604800,
        });
      }

      if (this.state.sesion.privilegio === "administrador") {
        Swal.fire("Bienvenido/a", this.state.sesion.nombre, "success").then(
          (result) => {
            if (result.isConfirmed) {
              window.location.href = "/";
            }
          }
        );
      } else if (this.state.sesion.privilegio === "usuario") {
        Swal.fire("Bienvenido/a", this.state.sesion.nombre, "success").then(
          (result) => {
            if (result.isConfirmed) {
              window.location.href = "/";
            }
          }
        );
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

      datosActualizados[clave] = valor;
      return {
        datos: datosActualizados,
      };
    });
  }

  render() {
    return (
      <React.Fragment>
        <div class="login-div">
          <div class="form-div">
            <h2>Ingresa tus datos</h2>
            <div id="respuesta"></div>
            <form onSubmit={this.Formulario} className="form">
              <div class="email-form">
                <label for="email">
                  <input
                    type="email"
                    placeholder="Tu correo"
                    id="correo"
                    onChange={this.manejarCambio}
                    value={this.state.datos.correo}
                  />
                </label>
              </div>
              <div class="password-form">
                <label for="pass">
                  <input
                    type="password"
                    placeholder="Tu contraseña"
                    id="clave"
                    onChange={this.manejarCambio}
                    value={this.state.datos.clave}
                  />
                </label>
              </div>
              <label for="sesion">
                <input
                  type="submit"
                  name="sesion"
                  class="iniciar-sesion"
                  value="Iniciar Sesión"
                  id="enviar"
                />
              </label>
            </form>
          </div>
          <div class="registrar">
            <p>Aun no tienes cuenta?</p>
            <div class="registrar-div">
              <Link to="/iniciar-sesion/crear-cuenta/">
                <button class="registrar-button">
                  <span>Registrate</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AccountSing;

