$(document).ready(function() {
    $('#fullpage').fullpage(
    	{
        anchors: ['start', 'basics', 'lebensmittel', 'test','rezepte', 'credits'],
        verticalCentered: true,
        resize : true,
        slidesColor : ['', '#ccc', '#ccc', '#ccc'],
        scrollingSpeed: 700,
        easing: 'easeInQuart',
        navigation: true,
        navigationPosition: 'right',
        loopBottom: false,
        loopTop: false,
        menu: '#myMenu',
        loopHorizontal: true,
        autoScrolling: true,
        scrollOverflow: false,
        css3: false,
        paddingTop: '3em',
        paddingBottom: '10px',
        keyboardScrolling: true,
        touchSensitivity: 15,
        continuousVertical: false,
        animateAnchor: true,

        //events
        onLeave: function(index, nextIndex, direction){},
        afterLoad: function(anchorLink, index){},
        afterRender: function(){},
        afterResize: function(){},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
        onSlideLeave: function(anchorLink, index, slideIndex, direction){}
    });

	$("#section1button").click(function(){
		$("#section1button").prop('disabled', true).text('Hier warst du schon');

		$.fn.fullpage.moveSectionDown();
	});

	$("#section2button").click(function(){
		$("#section2button").prop('disabled', true).text('Hier warst du schon');

		$.fn.fullpage.moveSectionDown();
	});

	$("#section3button").click(function(){
		$("#section3").addClass("has-success");
		$("#section3button").prop('disabled', true).text('Yeah, fertig!');
        $("#section3button").addClass("btn-success");

	})

});