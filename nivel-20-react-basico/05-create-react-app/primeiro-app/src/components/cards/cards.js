import Card from "../card/card";
import "./cards.css";

const cardsTitle = ["Card 1", "Card 2", "Card 3", "Card 4"];

const mostrarTituloCartao = (title) => {
    console.log(title)
}

const Cards = () => {
  return (
    <div>
      <h2>Meus cards</h2>

      <div>
        {cardsTitle.map((cardTitle, index) => (
          <Card key={index} title={cardTitle} mostrarTituloCartao={mostrarTituloCartao}/>
        ))}
      </div>
    </div>
  );
};

export default Cards;
