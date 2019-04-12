// item is the variable (object), qty & name are properties ("props")
const formNew = document.getElementById('newItem');
const theList = document.getElementById('taskList');
const catFilter = document.getElementById('filterCategories');


let shoppingList = [
    { qty: 4, name: `Update GitHub`, cat: `Web-Development` },
    { qty: 5, name: `Create Storyboard`, cat: `3D`  },
    { qty: 1, name: `Installation Prep`, cat: `Prototype`  },
    { qty: 7, name: `Complete 3D`, cat: `3D`  },
    { qty: 7, name: `Finish CSS & HTML`, cat: `Web-Development`  },
];

// Print any array
function printList(list = shoppingList) {

    // Check the value of the category filter (radio)
    let filterBy = catFilter.category.value;

    // Pre-filter the list based on radio button that's selected
    if (filterBy != 'all')
        list = list.filter(item => item.cat == filterBy)

    theList.innerHTML = list.map(item => `<li class="${item.cat}">${item.qty} ${item.name}</li>`).join(``);
}

formNew.addEventListener('submit', event => {
    // Prevent the form from submitting (which is its defauly behavior)
    event.preventDefault();

    // Take the value out of the <input> field
    let item = formNew.item.value;

    // Push a new "item" onto the shoppinglist Array
    shoppingList.push({ qty: 1, name: item, cat: false })

    // Clear out the input field (the entire form, actually)
    formNew.reset();

    // Reprint the list
    printList();

});

catFilter.addEventListener('click', event => printList() );



// Initial print of the entire list
printList();
