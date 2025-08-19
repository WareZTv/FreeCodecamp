const inputElement = document.getElementById("search-input");

const searchBtn = document.getElementById("search-button");
const creatureNameElement = document.getElementById("creature-name");
const creatureIdElement = document.getElementById("creature-id");
const weightElement = document.getElementById("weight");
const heightElement = document.getElementById("height");
const typesElement = document.getElementById("types");
const specialNameElement = document.getElementById("special-name");
const specialDescriptionElement = document.getElementById("special-description");

const hpElement = document.getElementById("hp");
const attackElement = document.getElementById("attack");
const defenseElement = document.getElementById("defense");
const specialAttackElement = document.getElementById("special-attack");
const specialDefenseElement = document.getElementById("special-defense");
const speedElement = document.getElementById("speed");

const statElements = [hpElement, attackElement, defenseElement, specialAttackElement, specialDefenseElement, speedElement]

const creatureBaseLink = "https://rpg-creature-api.freecodecamp.rocks/api/creature";

const getCreatureData = async (creatureDenomination) => {
  try {
    const creatureDataRes = await fetch(`${creatureBaseLink}/${creatureDenomination}`);
    const creatureDataObject = await creatureDataRes.json();
    return creatureDataObject;
  } catch (err) {
    alert("Creature not found");
    return ""
  }
}

const showStats = creatureDataObject => {
  const {id, name, weight, height, special, stats, types} = creatureDataObject;
  creatureNameElement.textContent = name.toUpperCase();
  creatureIdElement.textContent = id;
  weightElement.textContent = weight;
  heightElement.textContent = height;
  typesElement.innerHTML = types.map(({name}) => `<div class="type ${name}">${name.toUpperCase()}</div>`).join("");
  specialNameElement.textContent = special.name;
  specialDescriptionElement.textContent = special.description;
  statElements.forEach((statElement, index) => {
    statElement.textContent = stats[index].base_stat;
  })
}

const fillData = async () => {
  const inputValueFormated = inputElement.value.trim().toLowerCase();
  const creatureData = await getCreatureData(inputValueFormated);
  if (creatureData !== "") {
    showStats(creatureData)
  }
}

searchBtn.addEventListener("click", fillData);
