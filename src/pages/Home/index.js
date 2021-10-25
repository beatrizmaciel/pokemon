import "./style.scss";
import { useHistory } from "react-router-dom";

export function Home() {
    const history = useHistory();

    return (
        <main className="main-home">
            <h1>Quem é esse</h1>
            <h1>POKÉMON?!</h1>

            <button onClick={() => history.push("/jogo")}>Começar</button>
        </main>
    )
}