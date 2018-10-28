function Column(id, name) {

	var self = this; //czy to jest potrzebne?
>>>>>>> fef0fe1c31a6895300b2d78341c3b70fb4aac2a5
	
	this.id = id;
	this.name = name;
	this.element = createColumn();

	function createColumn() {
		// TWORZENIE NOWYCH WĘZŁÓW
		var column = $('<div class="column"></div>');
		var columnTitle = $('<h2 class="column-title">' + self.name + '</h2>');
		var columnCardList = $('<ul class="card-list"></ul>');
		var columnDelete = $('<button class="btn-delete">x</button>');
		var columnAddCard = $('<button class="column-add-card">Dodaj kartę</button>');
		
			// KONSTRUOWANIE ELEMENTU KOLUMNY
		column.append(columnTitle)
			.append(columnDelete)
			.append(columnAddCard)
			.append(columnCardList);
			return column;
		}
	}
Column.prototype = {
	createCard: function(card) {
	  this.element.children('ul').append(card.element);
	},
	deleteColumn: function() {
	   var self = this;
	   $.ajax({
		   url: baseUrl + '/.column/' + self.id,
		   method: 'DELETE',
		   
	  //this.element.remove();
	}
};
