var board = {
	name: 'Tablica Kanban',
	createColumn: function(column) {
	  this.element.append(column.element);
	  initSortable();
	},
	element: $('#board .column-container')
};

$('.create-column').click(function(){
		var columnName = prompt('Wpisz nazwę kolumny');
		board.createColumn(new Column(columnName));
		$.ajax({
			url: baseUrl + '/column',
			method: 'POST',
			data: {
			name: columnName
			},
			succes: function(response){
				var column = new Column(response.id, columnName);
				board.create.Column(column);
			}
		});
	});
	
function initSortable() {
    $('.card-list').sortable({
      connectWith: '.card-list',
      placeholder: 'card-placeholder'
    }).disableSelection();
  }
