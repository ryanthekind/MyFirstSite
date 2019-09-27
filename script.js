function newPicture() {
    
    document.getElementById("image").src="./images/jhlogo.jpg"; 
    }
    
    function oldPicture() {
    
    document.getElementById("image").src="./images/corporatepride.jpg" ;
    }

    $("#image").click(function(){
         window.open("https://www.johnhancock.com/");
    });

    $(document).ready(function(){
     $('[data-toggle="tooltip"]').tooltip();   
    });

    