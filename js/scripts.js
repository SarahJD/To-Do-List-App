// 1. Adding a new item to the list of items:
function newItem() {
let li = $('<li></li>');
let inputValue = $('#input').val();
li.append(inputValue)

if(inputValue === ' ') {
	alert("You must write something!");
} else {

	// Appending list item to list
	$('#list').append(li);

	// adding the button "X"
	crossOutButton = $('<button class="crossOutButton"></button>');
	crossOutButton.append(document.createTextNode('X'));
	crossOutButton.on('click', deleteListItem);

	// Adding the class "delete"
	function deleteListItem() {
		li.addClass("delete");
	};

	// Appending the X-Button to the list item
	li.append(crossOutButton);

	// Adding eventListener vor crossOut function
	li.on('dblclick', crossOut)

	// Crossing out an item from the list of items
	function crossOut() {
		li.toggleClass("strike");
	}

// Clearing input-field
$('#input').val("");
}}

// Reordering the items
$('#list').sortable();
