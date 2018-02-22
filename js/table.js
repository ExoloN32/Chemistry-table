// console.log('Table');


//////////////////////////////////////////////////////////////////////////////////////////////////
//  Template function for test. Loading array.                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////
(function(){
	console.log('data add');           
	var a, b, dt;
	
	for (var i = 0; i < 55; i++) {
		a = Math.random()*100;
		a = parseFloat(a.toFixed(4));
		b = Math.random()*100;
		b = parseFloat(b.toFixed(4));
		dt = [i+1, a, b];
		Storage.addRow(dt);
	}
})(); 

//***********************************************************************************************
//   Create table
//***********************************************************************************************
$(function(){
	var t_row, t_col;      
	for(var row=0; row<Storage.getColLength(); ++row){
		t_row = document.createElement("tr");
		for(var col=0; col<Storage.getRowLength(); ++col){
			t_col = document.createElement("td");
			t_col.textContent = Storage.getData(row, col);
			t_row.append(t_col);
		}
		$("table").append(t_row);
	}
}); 

