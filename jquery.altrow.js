"use strict";


(function($) {

		 $.fn.UpdateTable = function() {
			 
	   var rows  = this[0].getElementsByTagName('tr');

	 
	   // change header of table, i know there is a better way to this!
	   rows[0].className = "header";
	   
	   return this.each(function() {
        // Do something to each element here.
		for(var counter = 1; counter < rows.length; counter++){
			// check for even or odd
			if (counter % 2) {
			rows[counter].className = "odd";
			}
			else{	
				rows[counter].className = "even";
			}
		}
    });
	     
		   } 
    }	(jQuery));
		 
	



