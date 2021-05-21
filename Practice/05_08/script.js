/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at adding, removing, or modifying
 * attributes, classes, and inline styles on elements.
 */

/**
 * Assignment:
 * 1. Find an element and add two different classes.
 * 2. Remove only one of the new classes.
 * 3. Add a new attribute to an element.
 * 4. Request the value of the attribute.
 * 5. Change the value of the attribute.
 * 6. Add some inline CSS to an element by specifying the style property and setting its value.
 * 7. Query the style property of an element in the console to get a list of all style properties available.
 */

// Assignment - 1
const backpackArticle = document.querySelector(".backpack");
backpackArticle.classList.add("greenPack");
backpackArticle.classList.add("bigPack");

// Assignment - 2
backpackArticle.classList.remove("greenPack");

// Assignment - 3
backpackArticle.setAttribute("title", "Big Pack");

// Assignment - 4
backpackArticle.getAttribute("title");

// Assignment - 5
backpackArticle.setAttribute("title", "Big Pack, Not Green");

// Assignment - 6
backpackArticle.style.color = "blue";

// Assignment - 7
backpackArticle.style;
