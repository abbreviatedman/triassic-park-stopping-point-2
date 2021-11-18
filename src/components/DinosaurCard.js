const DinosaurCard = (props) => {
  const { image, name, weight, carnivore } = props.dinosaur;

  return (
    <div
      className="dinosaur-item-container"
      onClick={() => props.handleDinosaurClick(props.dinosaur)}
    >
      <img className="dino-image" src={image} alt={name} />
      <div>Name: {name}</div>
      <div>Weight: {weight} tons</div>
      <div>{carnivore ? "Carnivore" : "Herbivore"}</div>
    </div>
  );
};

export default DinosaurCard;
