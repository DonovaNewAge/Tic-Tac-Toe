
var p1Score = 0;
var p2Score = 0;
var tie = 0;
var whoseTurn = 1;
var turnCounter = 0;

$(".box").click(function(){
    if(whoseTurn===1){
        $(this).text("X");
        $(this).addClass("X");
        whoseTurn = 2
        $("#turn-count").text("P2")
        winCondition("X")
    }
    else{
        $(this).text("O");
        $(this).addClass("O");
        whoseTurn = 1
        $("#turn-count").text("P1")
        winCondition("O")
    }
});

function winCondition(player){

    turnCounter++;
    if($(".row-1 .box." + player).length === 3 ||
    $(".row-2 .box." + player).length === 3 ||
    $(".row-3 .box." + player).length === 3 ||
    
    $(".col-1." + player).length === 3 ||
    $(".col-2." + player).length === 3 ||
    $(".col-3." + player).length === 3 ||
    $("#1").hasClass(player) && $("#5").hasClass(player) && $("#9").hasClass(player)||
    $("#3").hasClass(player) && $("#5").hasClass(player) && $("#7").hasClass(player)
    )
    {
        if(player == "X"){
            p1Score = p1Score+1
            $("#p1-score").text(p1Score)
            alert("Point goes to Player 1")
            
        }
        else{       
            p2Score = p2Score+1
            $("#p2-score").text(p2Score)
            alert("Point goes to Player 2")
        }     
       clearButton()
    }
    else if(turnCounter===9){
        tie = tie + 1;
        $("#tie-count").text(tie)
        clearButton()
    }

}

function clearButton(){

for(i = 1; i < 4; i++){
    timer = (i+1)*1000
    console.log(timer)
    setTimeout(countdown("turn-count", 4-i), timer) 

}

    $("#turn-count").text("gay")
    $(".X").empty()
    $(".O").empty()
    $(".X").removeClass("X")
    $(".O").removeClass("O")


    turnCounter = 0;
    whoseTurn = 1;
    $("#turn-count").text("P1")


}


function countdown(where, number){
    console.log(where)
    console.log(number)
  document.getElementById(where).innerHTML = number;
}
