const Park = (props) => {
  let goatCost = 0;
  let treeCost = 0;
  props.dinos.forEach((dino) => {
    if (dino.carnivore) {
      goatCost += Math.floor(dino.weight / 5 + 1);
    } else {
      treeCost += Math.floor(dino.weight / 5 + 1);
    }
  });

  const dinoCounts = [];
  props.dinos.forEach((dino) => {
    const species = dinoCounts.find((species) => species.name === dino.name);
    if (species) {
      species.count++;
    } else {
      dinoCounts.push({ name: dino.name, count: 1 });
    }
  });

  return (
    <div>
      <h1>Your Park</h1>
      <h3>Food Per Day:</h3>
      <p>
        {goatCost} goats, {treeCost} trees
      </p>
      <h3>Dinosaurs:</h3>
      <div>
        {dinoCounts.map((species) => (
          <p key={species.name}>
            {species.name}: x{species.count}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Park;
