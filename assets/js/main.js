(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();

        $('.mailchemp-form').ajaxChimp({
        	url:'https://netlify.us19.list-manage.com/subscribe/post?u=b4ca09ff60236c98a82f8805a&amp;id=b3df65c8e5'
        });

        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	