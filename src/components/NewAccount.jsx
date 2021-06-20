import React from 'react'

const NewAccount = () => {
    return (
        <React.Fragment>
            <div class="login-div">
                    <h2>Ingresa tus datos</h2>
                        {/* <!-- <div class="redes">
                            <div class="twitter">
                                <a href="">
                                    <span>twitter</span>
                                </a>
                            </div>
                            <div class="facebook">
                                <a href="">
                                    <span>facebook</span>
                                </a>
                            </div>
                        </div> --> */}
                    <div class="form-div">
                        <form action="ajax/registro.php" method="post" name="registro" class="form" >
                            <div class="input name-form">
                                <h3>Nombre:</h3>
                                <label for="name">
                                    <input type="text" name="name" placeholder="Tu nombre" id="name" required />
                                </label>
                            </div>
                            <div class="input lastname-form">
                                <h3>Apellido:</h3>
                                <label for="lastname">
                                    <input type="text" placeholder="Tu apellido" id="lastname" name="lastname" required />
                                </label>
                            </div>
                            <div class="input age-form">
                                <h3>Edad:</h3>
                                <label for="age">
                                    <input type="number" placeholder="00" id="age" name="age" required />
                                </label>
                            </div>
                            <div class="input date-form">
                                <h3>Fecha de nacimiento:</h3>
                                <label for="date">
                                    <input type="date" id="date" name="date" required />
                                </label>
                            </div>
                            <div class="input country-form">
                                <h3>País:</h3>
                                <label for="country">
                                        <input type="text" placeholder="Tu pais" id="country" name="country" required />
                                </label>
                            </div>
                            <div class="input email-form">
                                <h3>Correo:</h3>
                                <label for="email">
                                    <input type="email" placeholder="example@gmail.com" id="email" name="email" required />
                                </label>
                            </div>
                            <div class="input password-form">
                                <h3>Crear contraseña: </h3>
                                <label for="pass">
                                    <input type="password" placeholder="contraseña" id="pass" name="pass" required />
                                </label>
                            </div>
                            <div class="input password-form">
                                <h3>Repite contraseña: </h3>
                                <label for="pass2">
                                    <input type="password" placeholder="contraseña" id="pass2" name="pass2" required />
                                </label>
                            </div>
                            <input type="submit" value="Crear Cuenta" class="iniciar-sesion" id="enviar" />
                        </form>
                        <div class="preloader" id="preloader"></div>
                        <div id="respuesta"></div>
                    </div>
                </div>
        </React.Fragment>
    )
}

export default NewAccount