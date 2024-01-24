import CardService from "./CardService"
import { Props } from "../model/models"



export default function UpdateCard({setCards}: Props){

    const onClick = () => {
        const getCards = async () => {
            const data =  await CardService.getAll();
            setCards(data);
        };
        void getCards();
    };

    return (
        <div className="update__wrapper">
            <h2>Notes</h2>
            <button className="update__btn" onClick={onClick}>🗘</button>
        </div>
    )
}