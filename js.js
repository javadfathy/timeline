$(document).ready(function(){


	var timelineSpan = $(".line-timeline").find("span");
	var contentTimeline = $(".content-timeline").find("p");

	timelineSpan.click(function(){
		var indexSpan = $(this).index();
		
		contentTimeline.removeClass("active-content-timeline");
		setTimeout(function(){
			contentTimeline.eq(indexSpan).addClass("active-content-timeline");
		},600)
		

		timelineSpan.removeClass("active-timeline");
		$(this).addClass("active-timeline");
		
		console.log($(this).index());
	});

	var timerTimeline = setInterval(autoTimeline,3000);


	$('.timeline').hover(function(ev){
	    clearInterval(timerTimeline);
	}, function(ev){
	    timerTimeline = setInterval(autoTimeline,3000);
	});

	function autoTimeline(){
		if($("#timeline6").hasClass("active-timeline")){
				timelineSpan.removeClass("active-timeline");
	    		contentTimeline.removeClass("active-content-timeline");
				timelineSpan.eq(0).addClass("active-timeline");
				contentTimeline.eq(0).addClass("active-content-timeline");
			
		}else{
	    	var indexSpanActive = $(".line-timeline").find(".active-timeline").index();
	    	var indexContentTimelineActive = $(".content-timeline").find(".active-content-timeline").index();

	    	timelineSpan.removeClass("active-timeline");
	    	contentTimeline.removeClass("active-content-timeline");


			timelineSpan.eq(indexSpanActive + 1).addClass("active-timeline");
			contentTimeline.eq(indexContentTimelineActive + 1).addClass("active-content-timeline");
		}
	}


	



})