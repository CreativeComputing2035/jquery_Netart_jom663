$(document).ready(function(){
    $("button").click(function(){
        var div = $("#div1");
        div.animate({height: '300px', opacity: '0.4'}, "slow");
        div.animate({width: '300px', opacity: '0.8'}, "slow");
        div.animate({height: '100px', opacity: '0.4'}, "slow");
        div.animate({width: '100px', opacity: '0.8'}, "slow");
        
        var div = $("#div2");
        div.animate({height: '350px', opacity: '0.9'}, "slow");
        div.animate({width: '350px', opacity: '0.4'}, "slow");
        div.animate({height: '200px', opacity: '0.9'}, "slow");
        div.animate({width: '200px', opacity: '0.4'}, "slow");
        
        var div = $("#div3");
        div.animate({height: '200px', opacity: '0.7'}, "slow");
        div.animate({width: '200px', opacity: '0.3'}, "slow");
        div.animate({height: '150px', opacity: '0.7'}, "slow");
        div.animate({width: '250px', opacity: '0.3'}, "slow");
        
        var div = $("#div4");
        div.animate({height: '150px', opacity: '0.2'}, "slow");
        div.animate({width: '400px', opacity: '0.9'}, "slow");
        div.animate({height: '300px', opacity: '0.2'}, "slow");
        div.animate({width: '50px', opacity: '0.9'}, "slow");
    });
 
});