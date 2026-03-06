// Select DOM Elements
const input = document.getElementById('itemInput');
const addBtn = document.getElementById('addBtn');
const clearBtn = document.getElementById('clearBtn');
const list = document.getElementById('itemList');
const counter = document.getElementById('counter');

// Task 6: Function to update the item counter
function updateCounter() {
    const totalItems = list.children.length;
    counter.textContent = `Total Items: ${totalItems}`;
}

// Task 1 & 2: Add Item logic
addBtn.addEventListener('click', () => {
    const text = input.value.trim();

    // Task 2: Prevent empty items
    if (text === "") {
        alert("Item cannot be empty");
        return;
    }

    // Task 1: Create element dynamically
    const li = document.createElement('li');
    li.textContent = text;
    li.style.listStyle = "none"
    list.appendChild(li);

    // Reset input and update counter
    input.value = "";
    updateCounter();
});

// Task 3 & 4: Event Delegation on <ul>
list.addEventListener('click', (event) => {
    // Task 3: Remove item on single click
    if (event.target.tagName === 'LI') {
        event.target.remove();
        updateCounter();
    }
});

list.addEventListener('dblclick', (event) => {
    // Task 4: Toggle completed class on double click
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('completed');
    }
});

// Task 5: Clear All Items
clearBtn.addEventListener('click', () => {
    list.innerHTML = ""; // Removes all children
    updateCounter();
});