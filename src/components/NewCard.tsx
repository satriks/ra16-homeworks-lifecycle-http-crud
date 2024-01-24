import { Props } from "../model/models";
import CardService from "./CardService"
import { v4 } from "uuid"


export default function NewCard({setCards}: Props){

    const onClick = (event: React.MouseEvent) => {
        event.preventDefault();
        const eventTarget  = event.target as HTMLElement;
        CardService.create(v4(),(eventTarget.parentElement as HTMLFormElement).text .value );
        (eventTarget.parentElement as HTMLFormElement).reset();
        
        const getCards = async () => {
            const data =  await CardService.getAll()
            setCards(data)
        };
        setTimeout(() => void getCards(), 200);
    };

    return (
        <form className="newCard">
            <span>New Note</span>
            <textarea className="newCard__input" id="text"></textarea>
            <button className="newCard__btn" onClick={onClick}>🡒</button>
        </form>
    )
}