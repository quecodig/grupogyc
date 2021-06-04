/**
@Author: Edinson Tique
@Versión: 1.3
@Method: Bootstrap Structure
@Year: 2017
@Contact: www.fb.com/QueCodigoPG
**/
(function ($){
	jQuery.fn.addItem = function(option){
		$(document).ready(function() {
			$('#'+options.id+"1 input").each(function (e){
				$(this).val('');
			});
			$(option.btn).each(function (e){
				$(this).bind("click", addItems);
			});
			$(option.rmBtn).each(function (e){
				$(this).bind("click", delRow);
			});
		});
		function addItems(){
			var defaults = {
				id: "div_",
				MaxItem: 0,
				form: "form",
				icon: "remove",
				addClass: "btn-danger",
				removeClass: "btn-info",
			}

			var options = $.extend({}, defaults, option);

			var element = $(options.form).children("div").find(".element-clone").children("tr").eq(-2);
			console.log(element);
			var eventID = parseInt(element.attr('id').replace(options.id,''));
			var newEvent = (eventID+1);
			$newClone = $('#'+options.id+eventID).clone(true);
			$newClone.attr("id",options.id+newEvent).attr("data-num",newEvent).removeClass("hidden");
			console.log($newClone);
			$newClone.children('td').children("input").eq(0).val('');
			$newClone.children('td').children("input").eq(1).val('');
			$newClone.children('td.name-element').html('');
			$newClone.children('td.price-element').html(0);
			var numA = Math.floor(Math.random() * (9 - 1) + 9);
			$newClone.children('td.price-element').attr("data-price", numA+"000");
			format($newClone.children('td.price-element'));
			//$newClone.children('div').children("input").eq(2).attr("id",newEvent);
			$newClone.children('div').children("button").eq(0).attr("id",newEvent);
			$newClone.insertAfter($('#'+options.id+eventID));
			$("#"+eventID).html('<i class="qicon-'+options.icon+'"></i>').removeClass(options.removeClass).addClass(options.addClass);
			$("#"+eventID).bind("click",delRow);
			calcular_total();
		};
		function delRow() {
			$(this).parent('td').parent('tr').fadeOut("slow").remove();
			var element = $(options.form).children("div").eq(-2);
			calcular_total();
		};
	};
})(jQuery);