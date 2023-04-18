// const brandsList = document.getElementById('inventory-brands');
//
// const listItems = inventory.map((tv) => {
//     return `<li>${tv.brand}</li>`;
// });
//
// brandsList.innerHTML = `${listItems.join('')}`;

function createBrandList(tvArray) {
    const brandsList = document.getElementById('inventory-brands');

    const listItems = tvArray.map((tv) => {
        return `<li>${tv.brand}</li>`;
    });

    brandsList.innerHTML = `${listItems.join('')}`;
}

createBrandList(inventory);