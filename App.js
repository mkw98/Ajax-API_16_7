var baseUrl = 'https://kodilla.com/pl/bootcamp-api';
var myHeaders = {
  'X-Client-Id': 3423,
  'X-Auth-Token': '11ef702a8084e417cf1f9b25fb30d8d6'
};

$.ajaxSetup({
	headers: myHeaders
});

$.ajax({
    url: baseUrl + '/board',
    method: 'GET',
    success: function(response) {
      setupColumns(response.columns);
    }
});

function setupColumns(columns) {
    columns.forEach(function (column) {
  		var col = new Column(column.id, column.name);
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
//czy poniższy zapis jest OK?
//Column.prototype = {
//	createCard: function(card) {
//	  this.element.children('ul').append(card.element);
//	},
//	deleteColumn: function() {
//	  this.element.remove();
//	}
//};