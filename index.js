  function insertnum(number){

    var existingNumbers = $("#result").val();
      

      $("#result").val(existingNumbers + number)
  }

  function clearres(){

    $("#result").val('')

  }
    
    function calculate(){
        var result = eval($("#result").val())
        $("#result").val(result)
    }

    function deleteNums(){
        var del = $("#result").val();
        if (del!=''){
            $("#result").val(del.slice (0,-1)); 
        }
    }