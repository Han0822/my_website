/* Stylesheet by han liu, 2016 */


//initialize function called when the script loads
 
 
//function to create a table with cities and their populations
function cities(){
    //define two arrays for cities and population
    var cityPop = [
        { 
            city: 'beijing',
            population: 12150000
        },
        {
            city: 'newyork',
            population: 8491079
        },
        {
            city: 'tokyo',
            population: 13219000
        },
        {
            city: 'chicago',
            population: 2719000
        }
    ];

    //append the table element to the div
    $("#mydiv").append("<table>");

    //append a header row to the table
    $("table").append("<tr>");

    //add the "City" and "Population" columns to the header row
    $("tr").append("<th>City</th><th>Population</th>");
 
    //loop to add a new row for each city
    for (var i = 0; i < cityPop.length; i++){
      
        //assign longer html strings to a variable
        var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
        //add the row's html string to the table
        $("table").append(rowHtml);
    };
    //call the function
addColumns(cityPop);

 
};

//call the initialize function when the document has loaded
$(document).ready(initialize);





function addColumns(cityPop){
    
    $('tr').each(function(i){

    	if (i == 0){

    		$(this).append('<th>City Size</th>');
    	} else {

    		var citySize;

    		if (cityPop[i-1].population < 100000){
    			citySize = 'Small';

    		} else if (cityPop[i-1].population < 500000){
    			citysize = 'Medium';

    		} else {
    			citySize = 'Large';
    		};

    		$(this).append('<td>' + citySize + '</td>');
    	};
    });
};


//define AJAX function
function initialize(){
    
       cities();
    
    
    //basic jQuery ajax method
    $.ajax("data/map.geojson", {
        dataType: "json",
        success: callback
    });
};

//define callback function
function callback(response){

    //TASKS USING THE DATA GO HERE
    console.log(response);

};


 //callback function
function debugCallback(response){
	
	$(mydiv).append('GeoJSON data: ' + JSON.stringify(response));
};

//ajax function
function debugAjax(){
	
	$.ajax("data/map.geojson", {
		dataType: "json",
		success: function(response){
			//callback function
			debugCallback(response);
		}
	});

	 
};

debugAjax();