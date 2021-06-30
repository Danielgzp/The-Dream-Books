import React from 'react'
import { Link } from 'react-router-dom'

const AccountSing = () => {
    return (
        <React.Fragment>
            <div class="login-div">
                     {/* <div class="redes">
                        <div class="twitter">
                            <Link to="#">
                                <span>twitter</span>
                            </a>
                        </div>
                        <div class="facebook">
                            <Link to="">
                                <span>facebook</span>
                            </a>
                        </div>
                    </div>  */}
                    <div class="form-div">
                        <h2>Ingresa tus datos</h2>
                        <form action="ajax/login.php" method="post" class="form">
                            <div class="email-form">
                                <label for="email">
                                    <input type="email" placeholder="Tu email" id="email" name="email" />
                                </label>
                            </div>
                            <div class="password-form">
                                <label for="pass">
                                    <input type="password" placeholder="Tu contraseña" id="pass" name="pass" />
                                </label>
                            </div>
                            <label for="sesion">
                                <div class="preloader" id="preloader"></div>
                                <input type="submit" name="sesion" class="iniciar-sesion" value="Iniciar Sesión" id="enviar" />
                            </label>
                            <div id="respuesta"></div>
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
    )
}

export default AccountSing
