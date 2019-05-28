
    $("#btnCheck").click(function(){
      if($("#btnCheck").text()=="In" || $("#btnCheck").text()=="Enter"){
       
        $("#btnCheck").text("Checked");
 
      }
      else if($("#btnCheck").text()=="Checked" || $("#btnCheck").text()=="Out"){

        $("#btnCheck").attr("data-toggle","modal");
        $("#btnCheck").attr("data-target","#myModal");
      }
    });

    $("#btnLeave").click(function(){

     {      
      $("#btnCheck").text("Enter");
      $("#btnCheck").attr("data-toggle","");
      $("#btnCheck").attr("data-target","");
    }

  });
    $("#btnOut").click(function(){

     {     
      $("#btnCheck").text("Out");
      $("#btnCheck").attr("data-toggle","");
      $("#btnCheck").attr("data-target","");
    }

  });

   