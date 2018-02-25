//*******************************************************************************
//   Data stream. Singleton. 
//*******************************************************************************
'use strict';

var Storage = (function(){
	var instance;

	function init(){
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
				_data.push(data); 
			},

			getColLength: function(){ 
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

