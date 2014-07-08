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
        navigationTooltips: ['Start', 'Basics', 'Lebensmittel', 'Test', 'Rezepte', 'Credits'],

        //events
        onLeave: function(index, nextIndex, direction){},
        afterLoad: function(anchorLink, index){},
        afterRender: function(){},
        afterResize: function(){},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
        onSlideLeave: function(anchorLink, index, slideIndex, direction){}
    });
    
    $.extend({
	  jYoutube: function( url, size ){
	    if(url === null){ return ""; }
	
	    size = (size === null) ? "big" : size;
	    var vid;
	    var results;
	
	    results = url.match("[\\?&]v=([^&#]*)");
	
	    vid = ( results === null ) ? url : results[1];
	
	    if(size == "small"){
	      return "http://img.youtube.com/vi/"+vid+"/2.jpg";
	    }else {
	      return "http://img.youtube.com/vi/"+vid+"/0.jpg";
	    }
	  }
	});
    
    $( ".accordion" ).accordion({
	    heightStyle: "content"
    });
    
    $('a.gallery').colorbox({ opacity:0.9 });
    
    $('.youtube').colorbox({iframe: true, width: 640, height: 390, href:function(){
        var videoId = new RegExp('[\\?&]v=([^&#]*)').exec(this.href);
        if (videoId && videoId[1]) {
            return 'http://youtube.com/embed/'+videoId[1]+'?rel=0&wmode=transparent';
        }
    }});
    
    $('.youtube').each(function(){
	    var url = $(this).attr('href');
	    url = $.jYoutube(url);
	    console.log(url);
	    $(this).html("<img class='col-md-4 img-responsive' src='" + url + "'><span class='playButton col-md-4 glyphicon glyphicon-play-circle'></span>");
    })
    
    
        
});