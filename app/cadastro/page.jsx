import "./cadastro.css";
import Button from "@/components/Button";

export default function Cadastro() {
    return (
        <div className="container">

            <div className="container-1">
                <h2 className="title">Cadastre-se agora!</h2>
                <p className="text">A elegância está nos detalhes. Cadastre-se agora e descubra um universo de joias exclusivas.💎</p>
            </div>

            <div className="information">
                <form className="registration">
                    <input className="input" type="text" name="password" placeholder="E-mail"/>
                    <input className="input" type="password" name="password" placeholder="Password"/>
                    <input className="input" type="password" name="password" placeholder="Confirm your password"></input>
                    <Button text="Cadastre-se"/>
                </form>
            </div>
        </div>
    );
}