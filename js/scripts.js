// 1. Adding a new item to the list of items:
function newItem() {
	let inputValue = $('#input').val();
	if(inputValue === '') {
		alert("You must write something!");
	} else {
		let list = $('#list');
		let li = list.append("<li>inputValue</li>");
		list.append(li);
	}}

// 2. Crossing out an item from the list of items:
function crossOut() {
	$('li').addClass('strike');
}

$('li').on('dblclick', crossOut);

// 3. Deleting an item from the list of items
// 3(i). Adding the delete button "X":
let crossOutButton = $('<div class='crossOutButton'>X</div>');
$('li').append(crossOutButton);

crossOutButton.on('click', deleteListItem);

// 3(ii). Adding CLASS DELETE
function deleteListItem() {
	$('li').addClass('delete');
}

// 4. Reordering the items:
$('#list').sortable();
