import CardService from "../CardService"

interface Props{
    data: {id:string, content:string},
    setCards : React.Dispatch<React.SetStateAction<never[]>>
}

export default function Card({data, setCards} : Props) {

    const onClick = () => {
        
        CardService.delete(data.id)

        const getCards = async () => {
            const data =  await CardService.getAll()
            setCards(data)
        }
        setTimeout(() => void getCards(), 0)
    }

    return (
        <div className="post" id={data.id}>
            <div className="post__text">{data.content}</div>
            <button className="post__btn" onClick={onClick}>X</button>
        </div>
    )
}