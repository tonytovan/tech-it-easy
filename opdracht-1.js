const tvTypeNames = inventory.map((tv) => {
    return tv.type;
})

console.log(tvTypeNames);


const tvSoldout = inventory.filter((tv) => {
    return tv.originalStock === tv.sold;
});

console.log(tvSoldout);

const hasAmbilight = inventory.filter((ambi) => {
    return ambi.options.ambiLight ===true;
});

console.log(hasAmbilight);

inventory.sort((a, b) => {
    return a.price - b.price;
})

console.log(inventory);