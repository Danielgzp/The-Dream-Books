import Cookies from 'universal-cookie';

const Logout = () => {
    const cookies = new Cookies();

    cookies.remove("id");
    cookies.remove("nombre");
    cookies.remove("apellido");
    cookies.remove("correo");
    cookies.remove("privilegio");

    window.location.href="/";

}

export default Logout