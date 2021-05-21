$(function() {

    $('.navbar-toggle').click(function() {
        $(this).toggleClass('act');
            if($(this).hasClass('act')) {
                $('.main-menu').addClass('act');
            }
            else {
                $('.main-menu').removeClass('act');
            }
    });

    //jQuery for page scrolling feature - requires jQuery Easing plugin
    $(document).on('click', '.page-scroll a', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.site-header',
        offset: 10
    });

	/* Progress bar */
    var $section = $('.section-skills');
    function loadDaBars() {
	    $('.progress .progress-bar').progressbar({
	        transition_delay: 500
	    });
    }
    
    $(document).bind('scroll', function(ev) {
        var scrollOffset = $(document).scrollTop();
        var containerOffset = $section.offset().top - window.innerHeight;
        if (scrollOffset > containerOffset) {
            loadDaBars();
            // unbind event not to load scrolsl again
            $(document).unbind('scroll');
        }
    });

    /* Counters  */
    if ($(".section-counters .start").length>0) {
        $(".section-counters .start").each(function() {
            var stat_item = $(this),
            offset = stat_item.offset().top;
            $(window).scroll(function() {
                if($(window).scrollTop() > (offset - 1000) && !(stat_item.hasClass('counting'))) {
                    stat_item.addClass('counting');
                    stat_item.countTo();
                }
            });
        });
    };

	// another custom callback for counting to infinity
	$('#infinity').data('countToOptions', {
		onComplete: function (value) {
		  count.call(this, {
		    from: value,
		    to: value + 1
		  });
		}
	});

	$('#infinity').each(count);

	function count(options) {
        var $this = $(this);
        options = $.extend({}, options || {}, $this.data('countToOptions') || {});
        $this.countTo(options);
    }

    // Navigation overlay
    var s = skrollr.init({
            forceHeight: false,
            smoothScrolling: false,
            mobileDeceleration: 0.004,
            mobileCheck: function() {
                //hack - forces mobile version to be off
                return false;
            }
    });
    
});
$(document).ready()
// validation
const validated ={
    name:false,
    email:false,
    phone:false,
    message:false
}
 
 function checkMessage(){
     var messageValue= document.getElementById("message").value;
     if(messageValue.length<=0){
         document.getElementById("messege-alert").innerHTML="Enter Your Message"
         validated.message=false;
     }else{
        document.getElementById("messege-alert").innerHTML=" ";
        validated.message =true
     }
 }
 function nameChek(){
    var nameAlert = document.getElementById('name-alert');
    var name = document.getElementById("fullname").value;
    var expression = /^[a-zA-Z\s]*$/;
   
    if(name == ""){
        validated.name= false;
        nameAlert.innerHTML="*Required"
        
    }else if(name.match(expression)){
        nameAlert.innerHTML="";
        validated.name= true;
    }else{
        nameAlert.innerHTML =" Enter Charecters only"
        validated.name=false
    }

    }
    // email check
    function chekEmail(){
        var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        var emailCheck = document.getElementById('email').value;
        var emailAlert = document.getElementById('email-alert');
        if(emailCheck == ""){
            validated.email= false;
            emailAlert.innerHTML ="*Required"
        }else if(emailCheck.match(pattern)){
            emailAlert.innerHTML="";
            validated.email= true;
        }else{
            emailAlert.innerHTML ="Invalid E-mail"
            validated.email=false
        }
    }
    
    function numberCheck(){
        var phnPattern = /^\d{10}$/;
        var phoneNumber = document.getElementById('phone').value;
        var phoneAlert = document.getElementById('phone-alert');
        if(phoneNumber == ""){
            validated.phone= false;
            phoneAlert.innerHTML ="*Required"
        }else if(phoneNumber.match(phnPattern)){
            phoneAlert.innerHTML="";
            validated.phone= true;
        }else{
            phoneAlert.innerHTML ="Please Enter 10 Digit Mobile Number"
            validated.phone=false
            
        }
    }
   
    function myValidation(){
      
        if(validated.name && validated.phone && validated.email && validated.message){
            return true;
            
            
              
        }else{
            alert("invalid Form Details");
            return false
        }
    }
     