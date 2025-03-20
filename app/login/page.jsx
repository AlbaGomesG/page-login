import "./login.css";
import Button from "../../components/Button";

export default function Login() {
    return (
        <div className="container">
            <div className="container-1">
                <h1 className="title">Welcome</h1>
                <h1 className="title">Back - Opulence</h1>
                <p className="text">Faça login para acessar sua conta e aproveitar todos os nossos benefícios exclusivos.</p>
            </div>

            <form className="information">
                <input className="input" type="text" name="username" placeholder="Username"/>
                <input className="input" type="password" name="password" placeholder="Password"/>
                <Button text="Login In"/>
            </form>
        </div>
    )
}