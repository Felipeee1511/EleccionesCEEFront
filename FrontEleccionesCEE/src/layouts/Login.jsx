import axios from 'axios';

import '../styles/layouts/login.css';

const Login = () => {
const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Ingresando', e.target[0].value, e.target[1].value);
    }
    return (
        <>
            <h1 className='tittle-login'>Login</h1>
            <form className="form-login" onSubmit={handleSubmit}>
                <input className="input-login" type="text" placeholder="Usuario" />
                <input className="input-login" type="password" placeholder="Contraseña" />
                <button className="button-login" type="submit">Ingresar</button>
            </form>
        </>
    )
};
export default Login;