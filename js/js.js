$(document).ready(function(){
        $('.input').click(function(){
            /*  var text = $(this).text();
              $('.result').val(text);  */
            
            
            $(".result").val($(".result").val() + $(this).text());
            
            
    });
    
    /* button hover */
    
    
            $('.input').hover(function(){
                
                $(this).css({"background-color": "#80ced6" , color : "white" , fontSize : "1.5em"});
                 },
                function(){
                $(this).css({"background-color" : "#F0FFFF" , color : "black" , fontSize : ".9em"});
});
            
  /* button hover end */

            
            
            
  
    
    
    //= equal button
    $('.equal').click(function(){
        $('.result').val(eval($('.result').val()));
    });
  });

   // clear  button
$('.clear').click(function(){
    $('.result').val("");
});
