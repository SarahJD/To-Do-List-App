// 1. Adding a new item to the list of items:
function newItem() {
let li = $('<li></li>');
let inputValue = $('#input').val();
li.append(inputValue)

if(inputValue === ' ') {
	alert("You must write something!");
} else {
	$('#list').append(li);
}}

// 2. Crossing out an item from the list of items:
function crossOut() {
	let li = $('<li></li>');
	li.toggleClass("strike");
}

let li = $('<li></li>');
li.on('dblclick', crossOut());

// 3. Deleting an item from the list of items
// 3.1. Adding the delete button "X":
let crossOutButton = $('<button class="crossOutButton"></button>');
crossOutButton.append (document.createTextNode('X'));
li.append(crossOutButton);

// 3.2 Adding CLASS DELETE
crossOutButton.on('click', deleteListItem);
function deleteListItem() {
	li.addClass("delete");
};

// 4. Reordering the items:
$('#list').sortable();
