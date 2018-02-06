/*(function(){
	for(var i=0; i<5; ++i){
		var dt = [i, 2, 7.6];
		storage.addRow(dt);
		//console.log(storage.getData(i, 0));
	}
}()); 

(function(){
	var tableRef = document.getElementsByTagName("table");
	var t_row, t_col; console.log(storage.getRowLength());
	for(var row=0; row<storage.getRowLength(); ++row){
		t_row = document.createElement("tr");
		for(var col=0; col<storage.getColLenth(); ++col){
			t_col = document.createElement("td");
			t_col.textContent = storage.getData(row, col);
			t_row.appendChild(t_col);
		}
		tableRef.appendChild(t_row);
	}
}()); */



(function(){
	var storage = Storage;
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

(function(){
	var tableRef = document.querySelector("table");
	var t_row, t_col; 
	for(var row=0; row<storage.getColLength(); ++row){
		t_row = document.createElement("tr"); //console.log(storage[row][0]+'  '+storage[0].length);
		for(var col=0; col<storage.getRowLength(); ++col){
			t_col = document.createElement("td");
			t_col.textContent = storage.getData(row, col);//console.log(storage[row][col]);
			t_row.appendChild(t_col); 
		}
		tableRef.appendChild(t_row);
	}
})();