$(document).ready(function(){
   /*
	* TrungLV background image home page move
	*/
	$('.body .top').backgroundMove({
	  	movementStrength:'50'
	});

	/*
	* TrungLV  toggle info when click btn "thông tin chi tiết"
	*/ 
	$(document).on('click', '.btn_info', function(e){
		e.preventDefault();
		let parent = $(this).parents('.card');
		parent.find('.col_btn_info').toggleClass('col_btn_info_show');
		console.log(parent);
	});
})