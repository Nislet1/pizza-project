// Global variable to store selected items
const selectedItems = [];
const totalPriceElement = document.getElementById("totalPrice"); // Assuming you have an element with this ID for displaying the total price

function choose(a) {
    var elem = document.createElement("img");
    elem.src = a.src;
    elem.classList.add("paprika");

    // Check if the item is already present
    var mypizza = document.getElementById("fullpizza");
    for (let i = 0; i < mypizza.childNodes.length; i++) {
        if (mypizza.childNodes[i].isEqualNode(elem)) {
            return;
        }
    }

    // Create a new container for the selected item and animated icon
    var itemContainer = document.createElement("div");
    itemContainer.classList.add("selected-item-container");

    // Create a new animated icon for the selected item
    var animatedIcon = document.createElement("div");
    animatedIcon.innerHTML = '<lord-icon src="https://cdn.lordicon.com/skkahier.json" trigger="hover" colors="primary:#f32013" style="position: absolute; right: 5%; top:5%; width: 20px; height: 20px; transition: all 250ms ease-in-out; animation: popup 500ms; -webkit-filter: drop-shadow(0px 0px 5px #F32013); filter: drop-shadow(0px 0px 5px #F32013); z-index: 99"></lord-icon>';
    animatedIcon.classList.add("animated-icon");

    // Append the animated icon to the container
    itemContainer.appendChild(animatedIcon);

    // Add a class to the container for styling
    itemContainer.classList.add("selectable");

    // Append the container to the parent container of the selected item
    a.parentElement.appendChild(itemContainer);

    // Add click event listener to the animated icon for removal
    animatedIcon.onclick = function () {
        // Remove the item from the selected items array
        const itemName = a.nextElementSibling.textContent;
        const itemPrice = parseFloat(a.nextElementSibling.nextElementSibling.textContent);
        const selectedItemIndex = selectedItems.findIndex(item => item.name === itemName);

        if (selectedItemIndex !== -1) {
            selectedItems.splice(selectedItemIndex, 1);
        }

        // Update the total price
        updateTotalPrice();

        // Add the 'removing' class to initiate the removal animation
        elem.classList.add("removing");
        itemContainer.classList.add("removing");

        // Delay the removal to match the animation duration
        setTimeout(function () {
            elem.remove();
            itemContainer.remove();
        }, 500); // Adjust this timeout to match the animation duration
    };

    // Add the selected item to the array
    const itemName = a.nextElementSibling.textContent;
    const itemPrice = parseFloat(a.nextElementSibling.nextElementSibling.textContent);
    selectedItems.push({ name: itemName, price: itemPrice });

    // Update the total price
    updateTotalPrice();

    // Append the item to the pizza
    mypizza.appendChild(elem);
}

// Function to update the total price
function updateTotalPrice() {
    let totalPrice = 0;

    // Calculate the total price by summing up the prices of selected items
    selectedItems.forEach(item => {
        totalPrice += item.price;
    });

    // Update the total price in the UI
    totalPriceElement.textContent = `Total: ${totalPrice} dh`;
}
