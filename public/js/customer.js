$(document).ready(function(){
   /*
	* TrungLV background image home page move
	*/
	// $('.body .top').backgroundMove({
	//   	movementStrength:'50'
	// });

	/*
	* TrungLV  toggle info when click btn "thông tin chi tiết"
	*/ 
	$(document).on('click', '.btn_info', function(e){
		e.preventDefault();
		$('.col_btn_info, .col_btn_register, .col_input_info').removeClass('col_btn_info_show');
		let parent = $(this).parents('.card');
		parent.find('.col_btn_info').toggleClass('col_btn_info_show');
	});

	/*
	* TrungLV show form info register ticket
	*/
	$(document).on('click','.submit-step1', function(e){
		e.preventDefault();
		$('.col_btn_info, .col_btn_register').removeClass('col_btn_info_show');
		let parent = $(this).parents('.card');
		parent.find('.col_input_info').addClass('col_btn_info_show');
	})

	// /*
	// * TrungLV  toggle info when click btn "thông tin chi tiết"
	// */ 
	// var step1 = [];
	// $(document).on('click', '.iconEmpty', function(e){
	// 	e.preventDefault();
	// 	$(this).toggleClass('iconCheck');
	// 	// let id = $(this).attr('data-id');
	// 	// let check     = step1.indexOf(id);
	// 	// if(check == -1)
	// 	// 	step1.push(id);
	// 	// else
	// 	// 	step1.splice(check, 1);
	// 	// localStorage.setItem('step1', step1);
	// });

	/*
	* TrungLV  toggle info when click btn "thông tin chi tiết"
	*/ 
	$(document).on('click', '.btn_register_ticket', function(e){
		e.preventDefault();
		// step1 = []; //clear value id seat car when click btn đặt vé
		// localStorage.setItem('step1', step1);
		$('.col_btn_info, .col_btn_register, .col_input_info').removeClass('col_btn_info_show');
		let parent = $(this).parents('.card');
		parent.find('.col_btn_register').toggleClass('col_btn_info_show');
	});

	/*
	 * TrungLV click button close  
	 */
	$(document).on('click', '.closeToggle', function(e){
		e.preventDefault();
		$('.col_btn_info, .col_btn_register, .col_input_info').removeClass('col_btn_info_show');
	});

	/*
	* TrungLV  when click btn roll back register ticket step 2
	*/
	$(document).on('click','.btn-rollback', function(e){
		e.preventDefault();
		$('.col_btn_info, .col_input_info').removeClass('col_btn_info_show');
		let parent = $(this).parents('.card');
		parent.find('.col_btn_register').toggleClass('col_btn_info_show');
	});

	//show tag child home admin when click tag menu
	$(document).ready(function(){
		$(document).on('click', '.menu-toggle', function(e){
			e.preventDefault();
			$(this).find('.icon-toggle').toggleClass('hide-icon');
			$(this).siblings('.menu-child-toggle').toggle();
		})
	});
	//menu admin
	$(document).ready(function(){
		$(document).on('click', '.navbar-toggler', function(e){
			e.preventDefault();
			$(this).siblings('#content').toggle();
		})
	});

	//toggle btn and menu
	$(window).resize(function(){
		if($('.admin').width() < 950 && $('.admin').width() >600){
			$('.toggleBtnMenu').css('display','initial');
			$('.admin-left').css('display','none ');
			$('.admin-right').addClass('col-sm-12 col-md-12');
		}if($('.admin').width() > 950){
			$('.toggleBtnMenu').css('display','none ');
			$('.admin-left').css('display','initial');
			$('.admin-right').removeClass('col-sm-12 col-md-12')
			$('.admin-right').addClass('col-sm-8 col-md-9')
		}else{
			$('.admin-right').addClass('col-sm-12');
		}
	});
	if($('.admin').width() < 950 && $('.admin').width() >600){
		$('.toggleBtnMenu').css('display','initial');
		$('.admin-left').css('display','none');
		$('.admin-right').addClass('col-sm-12 col-md-12');
	}else if($('.admin').width() < 600){
		$('.toggleBtnMenu').css('display','initial');
	}
	else{
		$('.toggleBtnMenu').css('display','none');
	}
	let dem = 0;
	$(document).on('click','.toggleBtnMenu', function(event){
		event.preventDefault();
		dem++;
		if(dem % 2 == 0){
			$('.admin-left').css('display','none');
			$('.admin-right').addClass('col-sm-12 col-md-12');
		}else{
			$('.admin-left').css('display','initial');
			$('.admin-right').removeClass('col-sm-12 col-md-12');
			$('.admin-right').addClass('col-sm-12 col-md-9');
		}
	})
})