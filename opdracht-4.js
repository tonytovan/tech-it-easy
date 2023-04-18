function creatTvName(tv) {
    return `${tv.brand} ${tv.type} - ${tv.name}`;
}

creatTvName(inventory[0]);

console.log(creatTvName(inventory[0]));

function createTvPrice(price) {
    return `€${price},-`;
}

createTvPrice("379");

console.log(createTvPrice("379"));

function createScreenSizesString(sizesArray) {
    let output = '';

    for (let i = 0; i < sizesArray.length; i++) {
        const currentSizeInches = sizesArray[i];
        const currentSizeCm = sizesArray[i] * 2.54;

        // Format de string
        output = output + `${currentSizeInches} inch (${currentSizeCm} cm)`;

        // Als we nog NIET bij de laatste size zijn, voeg dan een | toe aan het eind
        if (i < sizesArray.length - 1) {
            output = `${output} | `;
        }
    }

    return output;
}

const singleTvContainer = document.getElementById('single-tv');

singleTvContainer.innerHTML = `
  <h3>${creatTvName(inventory[3])}</h3>
  <h4>${createTvPrice(inventory[3].price)}</h4>
  <p>${createScreenSizesString(inventory[3].availableSizes)}</p>
`;

function generateTvList(tvArray) {
    const tvModelList = document.getElementById('inventory-models');

    const modelItems = tvArray.map((tvObject) => {
        return `
      <li>
        <h3>${creatTvName(tvObject)}</h3>
        <h4>${createTvPrice(tvObject.price)}</h4>
        <p>${createScreenSizesString(tvObject.availableSizes)}</p>
      </li>
    `;
    });

    tvModelList.innerHTML = `${modelItems.join('')}`;
}

generateTvList(inventory);


