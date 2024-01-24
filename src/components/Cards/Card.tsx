import CardService from "../CardService"

interface Props{
    data: {id: string, content: string},
    setCards: React.Dispatch<React.SetStateAction<never[]>>
}

export default function Card({data, setCards}: Props) {

    const onClick = () => {
        const getCards = async () => {
           await CardService.delete(data.id);
           setTimeout( async () => {
            const res = await CardService.getAll();
            setCards(res);
           }, 100 );           
        };
        void getCards();
    };

    return (
        <div className="post" id={data.id}>
            <div className="post__text">{data.content}</div>
            <button className="post__btn" onClick={onClick}>X</button>
        </div>
    )
}