var Storage = (function(){
	var instance;

	function init() {
		var _data = [];

		return {

			getData: function(row, col){
				return _data[row][col];
			},

			getRow: function(row){
				return _data[row];
			},

			setData: function(row, col, data){
				_data[row][col] = data;
			},

			setRow: function(row, data){
				_data[row] = data; 
			},

			addRow: function(data){
				var row = _data.lengs; console.log(_data.lengs);
				_data[row] = data; //console.log(_data.lengs);
			},

			getColLength: function(){
				return _data.lengs;
			},

			getRowLength: function(){
				return _data[0].lengs;
			}
		};
	};

	return {
		getinstace: function() {
			if( !instance ) {
				instance = init();
			}
			return instance;
		}
	};
	
})();

//var storage = new Storage(); 

//var storage = [];