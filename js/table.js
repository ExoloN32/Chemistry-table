// console.log('Table');


//////////////////////////////////////////////////////////////////////////////////////////////////
//  Template function for test. Loading array.                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////
(function(){
	console.log('data add');
	var storage = Storage; //.getInstance();           
	var a, b, dt;
	for (var i = 0; i < 5; i++) {
		a = Math.random()*100;
		a = parseFloat(a.toFixed(4));
		b = Math.random()*100;
		b = parseFloat(b.toFixed(4));
		dt = [i+1, a, b];
		storage.addRow(dt);
	}
})(); 


$(function(){
	console.log('data get');
	var storage = Storage; 
	
	var t_row, t_col;           //console.log(storage.getRowLength()+' '+storage.getColLength());
	for(var row=0; row<storage.getColLength(); ++row){
		t_row = document.createElement("tr");
		for(var col=0; col<storage.getRowLength(); ++col){
			t_col = document.createElement("td");
			t_col.textContent = storage.getData(row, col);
			t_row.append(t_col);
		}
		$("table").append(t_row);
	}
}); 

