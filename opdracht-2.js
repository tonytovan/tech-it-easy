let soldItems = 0;

for (let i = 0; i < inventory.length; i++) {
    soldItems = soldItems + inventory[i].sold;
}

console.log(soldItems);

const soldItemsContainer = document.getElementById('items-sold');

soldItemsContainer.innerHTML = `
<h3>Aantal verkochte items</h3>
<h2>${soldItems}</h2>
`;

let totalOriginalStock = 0;

for (let i = 0; i < inventory.length ; i++) {
    totalOriginalStock = totalOriginalStock + inventory[i].originalStock;
}

console.log(totalOriginalStock);

const originalItemsContainer = document.getElementById("original-items");

originalItemsContainer.innerHTML = `
<h3>Aantal ingekochte items</h3>
<h2>${totalOriginalStock}</h2>
`;

const itemsLefttoSellContainer = document.getElementById('items-left-to-sell');


  itemsLefttoSellContainer.innerHTML = `
    <h3>Items te verkopen<h3>
    <h2>${totalOriginalStock - soldItems}</h2>
     `;