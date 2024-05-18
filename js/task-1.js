const categories = document.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}`);

categories.forEach(categori => {
    const category = categori.querySelector('h2');
    const elements = categori.querySelectorAll('ul li');
console.log(`Category: ${category.textContent}`);
console.log(`Elements: ${elements.length}`)
});

