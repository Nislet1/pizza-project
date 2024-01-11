const database = {
    cheese: [
        { name: "Cheese", src: "assets/PIZZA-ITEMS/CHEESE/CHEESE.webp", prix: 10 },
        { name: "Mozzarella Cheese", src: "assets/PIZZA-ITEMS/CHEESE/MOZARELLACHEESE.webp", prix: 5 },
        { name: "BLUE CHEESE", src: "assets/PIZZA-ITEMS/CHEESE/BLUECHEESE.webp", prix: 5 },
        { name: "PAPMESAN CHEESE", src: "assets/PIZZA-ITEMS/CHEESE/PAPMESANCHEESE.webp", prix: 5 },
        { name: "EXTRA VEGAN CHEESE", src: "assets/PIZZA-ITEMS/CHEESE/EXTRAVEGANCHEESE.webp", prix: 5 },
        
    ],
    vegetables: [
        { name: "Paprika", src: "assets/PIZZA-ITEMS/VEGETABLES/PAPRIKA.webp", prix: 12 },
        { name: "Mushrooms", src: "assets/PIZZA-ITEMS/VEGETABLES/MUSHROOMS.webp", prix: 12 },
        { name: "TOMATOES", src: "assets/PIZZA-ITEMS/VEGETABLES/TOMATOE.webp", prix: 12 },
        { name: "ONIONS", src: "assets/PIZZA-ITEMS/VEGETABLES/ONIONS.webp", prix: 12 },
        { name: "JALAPENO PEPPER", src: "assets/PIZZA-ITEMS/VEGETABLES/JALAPENOPEPPER.webp", prix: 12 },
        { name: "FRESH SPINACH", src: "assets/PIZZA-ITEMS/VEGETABLES/FRESHSPINACH.webp", prix: 12 },
        { name: "CORN", src: "assets/PIZZA-ITEMS/VEGETABLES/CORN.webp", prix: 12  },
        { name: "CHERRY TOMATOES", src: "assets/PIZZA-ITEMS/VEGETABLES/CHERRYTOMATOE.webp", prix: 12 },
        { name: "CAPER", src: "assets/PIZZA-ITEMS/VEGETABLES/CAPER.webp", prix: 12 },
        { name: "GREEN OLIVES", src: "assets/PIZZA-ITEMS/VEGETABLES/GREENOLIVES.webp", prix: 12 },
        { name: "BLACK OLIVES", src: "assets/PIZZA-ITEMS/VEGETABLES/BLACKOLIVES.webp", prix: 12 },
        { name: "BEANS", src: "assets/PIZZA-ITEMS/VEGETABLES/BEANS.webp", prix: 12 },
        { name: "PARSLEY", src: "assets/PIZZA-ITEMS/VEGETABLES/PARSLEY.webp", prix: 12 },
        { name: "PICKLED PEPPER", src: "assets/PIZZA-ITEMS/VEGETABLES/PICKLEDPEPPERS.webp", prix: 12 },
        { name: "PICKLES", src: "assets/PIZZA-ITEMS/VEGETABLES/PICKLES.webp", prix: 12 },
        { name: "RUKOLA", src: "assets/PIZZA-ITEMS/VEGETABLES/RUKOLA.webp", prix: 12 },
        { name: "SESAME SEED", src: "assets/PIZZA-ITEMS/VEGETABLES/SESAMESEED.webp", prix: 12 },
    ],
    meat: [
        { name: "SALMON", src: "assets/PIZZA-ITEMS/MEAT/SALMON.webp", prix: 12 },
        { name: "TUNA", src: "assets/PIZZA-ITEMS/MEAT/TUNA.webp", prix: 12 },
        { name: "CHICKEN KEBAB", src: "assets/PIZZA-ITEMS/MEAT/CHICKENKEBABA.webp", prix: 12 },
        { name: "PEPPERONI", src: "assets/PIZZA-ITEMS/MEAT/PEPPERONI.webp", prix: 12 },
        { name: "MINCED BEAF", src: "assets/PIZZA-ITEMS/MEAT/MINCEDBEAF.webp", prix: 12 },
        
    ],
};



// Function to create items dynamically
function createItems(category, containerId) {
    const container = document.getElementById(containerId);

    database[category].forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("rec");
        itemDiv.innerHTML = `
            <img onclick="choose(this)" src="${item.src}" alt="">
            <p>${item.name}</p>
            <p class="prix">${item.prix} dh</p>
            <div class="lineaire"></div>
        `;

        container.appendChild(itemDiv);
    });
}


// Call the function to create cheese items
createItems("cheese", "cheeseItemsList");
createItems("vegetables", "vegetableItemsList");
createItems("meat", "meatItemsList");


