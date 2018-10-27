var baseUrl = 'https://kodilla.com/pl/bootcamp-api';
var myHeaders = {
  'X-Client-Id': 'X-Client-Id',
  'X-Auth-Token': 'X-Auth-Token'
};
$.ajaxSetup({
	headers: myHeaders
});

// OGÓLNA FUNKCJA juz nie jest potrzebna!
//function randomString() {
//	var chars = '0123456789abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXTZ'.split();
//	var str = '', i;
//	for (i = 0; i < 10; i++) {
//	  str += chars[Math.floor(Math.random() * chars.length)];
//	}
//	return str;
// }

// TWORZENIE NOWYCH EGZEMPLARZY KOLUMN
var todoColumn = new Column('To do');
var doingColumn = new Column('Doing');
var doneColumn = new Column('Done');

// DODAWANIE KOLUMN DO TABLICY
board.createColumn(todoColumn);
board.createColumn(doingColumn);
board.createColumn(doneColumn);

// TWORZENIE NOWYCH EGZEMPLARZY KART
var card1 = new Card('Nowe zadanie');
var card2 = new Card('stworzyc tablice kanban');

// DODAWANIE KART DO KOLUMN
todoColumn.createCard(card1);
doingColumn.createCard(card2);
