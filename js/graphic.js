/*var canvas = document.getElementById("graphic"), 
    context = canvas.getContext("2d");

var w = document.getElementById("cc").clientWidth;
var h = document.getElementById("cc").clientHeight;
canvas.width = w;

var x = 35, y = 35;
var xe = w - 70;
var ye = h - 70;

context.clearRect(0, 0, w, h);

context.strokeRect(50, 40, 100, 100);
context.fillRect(200, 40, 100, 100);

context.fillStyle = "#666666";
context.lineWidth = 1.0;
context.fillRect(x, y, xe, ye);*/

$(function (){
    var data = [];
    var storage = Storage;
    function getData(){
        var res = [];
        for(var i=0; i<storage.getColLength(); i++){
            res.push([storage.getData(i, 0), storage.getData(i, 1)]);
        }
        return res;
    }
    
    var options = {
        series: { shadowSize: 0 }, // drawing is faster without shadows
        yaxis: { show: false }, //{ min: 0, max: 100 },
        xaxis: { show: false }
    };
    
    var plot = $.plot($("#cc"), [ getData() ], options);
    
    var updateInterval = 1000;
    
    function update() {
        plot.setData([ getData() ]);
        // since the axes don't change, we don't need to call plot.setupGrid()
        plot.draw();
        
        setTimeout(update, updateInterval);
    }

    update();
});
