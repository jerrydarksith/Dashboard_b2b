$(document).ready(function() {
	$('.vi-aside-menu__item').on('click', function(e) {
		e.preventDefault(); 
		$('.vi-aside-menu__item').removeClass('vi-aside-menu__item--active');
		$(this).addClass('vi-aside-menu__item--active');
	});
	$('.vi-pagination__item').click(function() {
		var $this = $(this);
		if ($this.hasClass('vi-pagination__item--more') || 
			$this.hasClass('vi-pagination__item--last') || 
			$this.hasClass('vi-pagination__item--previosly') || 
			$this.hasClass('vi-pagination__item--next')) {
		  return;
		}
		if (!$this.hasClass('vi-pagination__item--active')) {
		  $('.vi-pagination__item').removeClass('vi-pagination__item--active');
		  $this.addClass('vi-pagination__item--active');
		}
	  });
	
	  $('.vi-pagination__item--previosly, .vi-pagination__item--next').click(function() {
		var $this = $(this);
		var currentPage = $('.vi-pagination__item.vi-pagination__item--active').index();
		var lastPage = $('.vi-pagination__item').not('.vi-pagination__item--previosly, .vi-pagination__item--next, .vi-pagination__item--more').length;
	
		if ($this.hasClass('vi-pagination__item--previosly') && currentPage > 1) {
		  $('.vi-pagination__item').removeClass('vi-pagination__item--active');
		  $('.vi-pagination__item').not('.vi-pagination__item--previosly, .vi-pagination__item--next, .vi-pagination__item--more').eq(currentPage - 2).addClass('vi-pagination__item--active');
		} else if ($this.hasClass('vi-pagination__item--next') && currentPage < lastPage) {
		  $('.vi-pagination__item').removeClass('vi-pagination__item--active');
		  $('.vi-pagination__item').not('.vi-pagination__item--previosly, .vi-pagination__item--next, .vi-pagination__item--more').eq(currentPage).addClass('vi-pagination__item--active');
		}
	  });



  $("#menu-open").click(function () {
    $(".vi-submenu").toggleClass("vi-submenu--active");
  });
  $("#open-search").click(function () {
    $(".vi-search-panel").toggleClass("vi-search-panel--active");
  });
  $(".vi-close-button-search").click(function () {
    $(".vi-search-panel").removeClass("vi-search-panel--active");
  });


$("#open-gamburger").click(function () {
	if ($("aside").hasClass("vi-show")) {
	  $("aside").animate({ opacity: 0, height: 0 }, 500, function () {
		$(this).css("display", "none").removeClass("vi-show");
		$("header, footer, main").removeClass("vi-not-show");
		$(this).removeAttr("style");
	  });
	} else {
	  $("aside").css("display", "block").addClass("vi-show").animate({ opacity: 1, height: "auto" }, 500);
	  $("header, footer, main").addClass("vi-not-show");
	}
  });
  
  $(".vi-close-button-hamburger").click(function () {
	$("aside").animate({ opacity: 0, height: 0 }, 500, function () {
	  $(this).css("display", "none").removeClass("vi-show");
	  $("header, footer, main").removeClass("vi-not-show");
	  $(this).removeAttr("style");
	});
  });
});
  











