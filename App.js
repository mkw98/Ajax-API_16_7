var baseUrl = 'https://kodilla.com/pl/bootcamp-api';
var myHeaders = {
  'X-Client-Id': 3423,
  'X-Auth-Token': '11ef702a8084e417cf1f9b25fb30d8d6'
};
$.ajaxSetup({
	headers: myHeaders
});

$.ajax({
	url: baseUrl +  '/board',
	method: 'GET',
	success: function(response) {
		setupColumns(response.colmns);
	}
});

function setupColumns(columns) {
	columns.forEach(function (column) {
		
		var col = new Column (column.id, column.name);
	board.createColumn(col);
	setupCards(col, column.cards);	
	});
}

function setupCards(col, cards) {
	cards.forEach(function (card) {
	var cardObj = new Card(card.id, card.name, card.bootcamp_kanban_column_id);
		
	col.createCard(cardObj);
	
	})

}
	
// OGÓLNA FUNKCJA juz nie jest potrzebna!
//function randomString() {
//	var chars = '0123456789abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXTZ'.split();
//	var str = '', i;
//	for (i = 0; i < 10; i++) {
//	  str += chars[Math.floor(Math.random() * chars.length)];
//	}
//	return str;
// }

// to tez juz nie bedzie potrzebne
//TWORZENIE NOWYCH EGZEMPLARZY KOLUMN
//var todoColumn = new Column('To do');
//var doingColumn = new Column('Doing');
//var doneColumn = new Column('Done');

// DODAWANIE KOLUMN DO TABLICY
//board.createColumn(todoColumn);
//board.createColumn(doingColumn);
//board.createColumn(doneColumn);

// TWORZENIE NOWYCH EGZEMPLARZY KART
//var card1 = new Card('Nowe zadanie');
//var card2 = new Card('stworzyc tablice kanban');

// DODAWANIE KART DO KOLUMN
//todoColumn.createCard(card1);
//doingColumn.createCard(card2);
