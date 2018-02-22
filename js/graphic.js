

$(function (){
    var data = [];
    function getData(){
        var res = [];
        for(var i=0; i<Storage.getColLength(); i++){
            res.push([Storage.getData(i, 0), Storage.getData(i, 1)]);
        }
        return res;
    }
    /////////////////////////////////////////////////////////////////////////////
    var options = {
        series: { shadowSize: 2 }, // drawing is faster without shadows
        yaxis: { min: 0, max: 100 },
        xaxis: { show: true },
		grid: { borderColor: '#444444',
			backgroundColor: '#222222'}
		
    };
    
    var plot = $.plot($("#graphic"), [ getData() ], options);
    
    var updateInterval = 1000;
    
    function update() {
        plot.setData([ getData() ]);
        // since the axes don't change, we don't need to call plot.setupGrid()
        plot.draw();
        
        setTimeout(update, updateInterval);
    }

    update();
});
