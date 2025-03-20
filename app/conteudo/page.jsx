import "./conteudo.css";
import Card from "../../components/Cards";
import produto1 from "../../public/produto-1.jpg";
import produto2 from "../../public/produto-2.jpg";
import produto3 from "../../public/produto-3.jpg";
import produto4 from "../../public/produto-4.jpg";

export default function Conteudo() {
    return (
        <div className="container">
            <div className="content">
            <div className="container-1">
                <Card image={produto1} title="colar best seller ✨" text="joias em prata 925 e zircônia"/>
                <Card image={produto2} title="colar best seller ✨" text="joias em prata 925 e zircônia"/>
                <Card image={produto3} title="colar best seller ✨" text="joias em prata 925 e zircônia"/>
            </div>
            
            <div className="container-1">
                <Card image={produto4} title="colar best seller ✨" text="joias em prata 925 e zircônia"/>
                <Card image={produto1} title="colar best seller ✨" text="joias em prata 925 e zircônia"/>
                <Card image={produto1} title="colar best seller ✨" text="joias em prata 925 e zircônia"/>
            </div>

            <div className="container-1">
                <Card image={produto1} title="colar best seller ✨" text="joias em prata 925 e zircônia"/>
                <Card image={produto1} title="colar best seller ✨" text="joias em prata 925 e zircônia"/>
                <Card image={produto1} title="colar best seller ✨" text="joias em prata 925 e zircônia"/>
            </div>
        </div>
        </div>
    );
}