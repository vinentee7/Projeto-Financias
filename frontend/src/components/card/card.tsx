import "./card.css"
import { iCard } from "./iCard"

export default function Card(props: iCard){

    return(
        <div className="card">
            <img
            src="https://tse4.mm.bing.net/th/id/OIP.j13NUfy-lSRgtMi2QbwAMwHaJn?rs=1&pid=ImgDetMain&o=7&rm=3"
            alt="Image"
            ></img>
            <div className="details">
                <h2>{props.CompanyName} {props.ticker}</h2>
                <p>{`R$${props.price},00`}</p>
            
                <p>
                    Card contem informação a resporito do protudo acima, assim como seu valor
                </p>
            </div>
        </div>
    )
}