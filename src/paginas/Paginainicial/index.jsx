
import Banner from "../../componentes/Banner";
import Cabecalho from "../../componentes/Cabecalho/index";
import Galeria from "../../componentes/Galeria";
import Rodape from "../../componentes/Rodape";


export default function PaginaInicial() {
    return (
        <>
            <Cabecalho />
            <Banner />
            <div>
                <Galeria />
            </div>

            <Rodape />
        </>
    );
}