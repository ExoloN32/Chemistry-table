$(document).ready(function() 
{
	$(".button1").click(function()
	{
		var o = $(".table.open");
		var k = $(".table.close");
		var oi = $(".button1.open");
		var ki = $(".button1.close")
		k.removeClass('close').addClass('open');
		o.removeClass('open').addClass('close');
		ki.removeClass('close').addClass('open');
		oi.removeClass('open').addClass('close');
	});
});