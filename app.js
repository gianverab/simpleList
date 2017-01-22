var counterItem = 1;

var heading = document.getElementById('heading');

var btn = document.getElementById('btn');

var list = document.getElementById('list');

var listItems = list.getElementsByTagName('li');

list.addEventListener('click', activateItem);

function activateItem(e) {
	if (e.target.nodeName == 'LI') {
		heading.innerHTML = e.target.innerHTML;
		for (var i=0; i<e.target.parentNode.children.length; i++){
			e.target.parentNode.children[i].classList.remove('active');
		}
		e.target.classList.add('active');
	}
}

btn.addEventListener('click', createItem);

function createItem() {
	list.innerHTML += '<li>New Item ' + counterItem + '</li>';
	counterItem++;
}


