import Card from "../card/card";


export default function CardList(){
    return(
        <div className="conteiner">
            <Card CompanyName="Apple" ticker="AAPL" price={110}/>
            <Card CompanyName="Microsoft" ticker="MSFT" price={200}/>
            <Card CompanyName="Tesla" ticker="TSLA" price={320}/>
        </div>
    )
}