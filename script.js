itemInput.addEventListener("input", () => {
    let inputValue = itemInput.value;

    // Limit total input length to 20 characters
    if (inputValue.length > 20) {
        inputValue = inputValue.slice(0, 20); // Truncate to 20 characters
    }

    // Split the input by commas and check each item's length
    const items = inputValue.split(",").map(item => item.trim());
    const trimmedItems = items.map(item => item.slice(0, 13)); // Limit each item to 13 characters

    // Join the items back to the input field
    itemInput.value = trimmedItems.join(",").trim();
});

// Event listener for the 'Add Items' button
addItemBtn.addEventListener("click", () => {
    const inputValue = itemInput.value.trim(); // Get the input value and trim whitespace

    if (inputValue !== "") {
        // Split the input by commas to get multiple items
        const items = inputValue.split(",").map(item => item.trim());

        // Loop through the array of items and add each one as a new list item
        items.forEach(item => {
            if (item !== "") {  // Only add non-empty values
                const listItem = document.createElement("li");

                // Create the text node for the list item
                const textNode = document.createTextNode(item);

                // Create the remove button
                const removeBtn = document.createElement("button");
                removeBtn.textContent = "Remove";
                removeBtn.classList.add("remove-btn"); // Add the class for specific remove button styling

                // Attach an event listener to the remove button to remove the item
                removeBtn.addEventListener("click", () => {
                    listItem.remove();
                });

                // Append the text node and remove button to the list item
                listItem.appendChild(textNode);
                listItem.appendChild(removeBtn);

                // Append the list item to the dynamic list
                dynamicList.appendChild(listItem);
            }
        });

        // Clear the input field after adding items
        itemInput.value = "";
    } else {
        alert("Please enter one or more items to add to the list!");
    }
});
