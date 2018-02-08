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
				_data.push(data); //console.log(_data.lengs);
			},

			getColLength: function() //{ console.log(_data.length);
				return _data.length;
			},

			getRowLength: function(){
				return _data[0].length;
			}
		};
	};

	return {
		getInstace: function() {
			if( !instance ) {
				instance = init();
			}
			return instance;
		}
	};
	
})();

Storage = Storage.getInstace();
//var storage = new Storage(); 

//var storage = [];
