var gameovermusic=new Audio("gameover.mp3");
var turnmusic=new Audio("ting.mp3");
var turn="X";
var gameover=false;

$(".reset").click(function(){
    $(".box").text("");
    turn="X"
    $(".info").text("Turn for "+turn);
    $(".imgbox").css("visibility","hidden")
    gameover=false;
})

function checkanswer(id,turn)
{
    if(id==="no1")
    {
        if($("#no2").text()===turn)
        {
            if($("#no3").text()===turn)
            {
                $(".info").text(turn+" has won");
                gameover=true;
                gameovermusic.play();
                $(".imgbox").css("visibility","visible");

                console.log(turn+" has won");
            }
        }
        if($("#no4").text()===turn)
        {
            if($("#no7").text()===turn)
            {
                console.log(turn+" has won");

                $(".info").text(turn+" has won");
                gameover=true;
                gameovermusic.play();
                $(".imgbox").css("visibility","visible");
            }
        }
        if($("#no5").text()===turn)
        {
            if($("#no9").text()===turn)
            {
                console.log(turn+" has won");

                $(".info").text(turn+" has won");
                gameover=true;
                gameovermusic.play();
                $(".imgbox").css("visibility","visible");
            }
        }
    }

    if(id==="no2")
    {
        if($("#no5").text()===turn)
        {
            if($("#no7").text()===turn)
            {
                console.log(turn+" has won");

                $(".info").text(turn+" has won");
                gameover=true;
                gameovermusic.play();
                $(".imgbox").css("visibility","visible");
            }
        }
        if($("#no1").text()===turn)
        {
            if($("#no3").text()===turn)
            {
                console.log(turn+" has won");

                $(".info").text(turn+" has won");
                gameover=true;
                gameovermusic.play();
                $(".imgbox").css("visibility","visible");
            }
        }
    }

    if(id==="no3")
    {
        if($("#no6").text()===turn)
        {
            if($("#no9").text()===turn)
            {
                console.log(turn+" has won");

                $(".info").text(turn+" has won");
                gameover=true;
                gameovermusic.play();
                $(".imgbox").css("visibility","visible");
            }
        }
        if($("#no5").text()===turn)
        {
            if($("#no7").text()===turn)
                
            {
                $(".info").text(turn+" has won");

                console.log(turn+" has won");
   
                gameover=true;
                gameovermusic.play();
                $(".imgbox").css("visibility","visible");         }
        }
        if($("#no2").text()===turn)
        {
            if($("#no1").text()===turn)
            {
                $(".info").text(turn+" has won");

                console.log(turn+" has won");
   
                gameover=true;
                gameovermusic.play();
                $(".imgbox").css("visibility","visible");         }
        }
    }

    if(id==="no4")
    {
        if($("#no1").text()===turn)
        {
            if($("#no7").text()===turn)
            {
                $(".info").text(turn+" has won");

                console.log(turn+" has won");
   
                gameover=true;
                gameovermusic.play();
                $(".imgbox").css("visibility","visible");         }
        }
        if($("#no5").text()===turn)
        {
            if($("#no6").text()===turn)
            {
                $(".info").text(turn+" has won");

                console.log(turn+" has won");
   
                gameover=true;
                gameovermusic.play();
                $(".imgbox").css("visibility","visible");         }
        }
    }

    if(id==="no5")
    {
        if($("#no2").text()===turn)
        {
            if($("#no7").text()===turn)
            {
                $(".info").text(turn+" has won");

                console.log(turn+" has won");
   
                gameover=true;
                gameovermusic.play();
                $(".imgbox").css("visibility","visible");         }
        }
        if($("#no4").text()===turn)
        {
            if($("#no6").text()===turn)
            {
                console.log(turn+" has won");

                $(".info").text(turn+" has won");
                gameover=true;
                gameovermusic.play();
                $(".imgbox").css("visibility","visible");
            }
        }
        if($("#no1").text()===turn)
        {
            if($("#no9").text()===turn)
            {
                $(".info").text(turn+" has won");

                console.log(turn+" has won");
   
                gameover=true;
                gameovermusic.play();
                $(".imgbox").css("visibility","visible");         }
        }
        if($("#no3").text()===turn)
        {
            if($("#no7").text()===turn)
            {
                $(".info").text(turn+" has won");

                console.log(turn+" has won");
   
                gameover=true;
                gameovermusic.play();
                $(".imgbox").css("visibility","visible");         }
        }
    }

    if(id==="no6")
    {
        if($("#no9").text()===turn)
        {
            if($("#no3").text()===turn)
            {
                $(".info").text(turn+" has won");

                console.log(turn+" has won");
   
                gameover=true;
                gameovermusic.play();
                $(".imgbox").css("visibility","visible");         }
        }
        if($("#no4").text()===turn)
        {
            if($("#no5").text()===turn)
            {
                $(".info").text(turn+" has won");

                console.log(turn+" has won");
   
                gameover=true;
                gameovermusic.play();
                $(".imgbox").css("visibility","visible");         }
        }
        if($("#no5").text()===turn)
        {
            if($("#no9").text()===turn)
            {
                $(".info").text(turn+" has won");

                console.log(turn+" has won");
   
                gameover=true;
                gameovermusic.play();
                $(".imgbox").css("visibility","visible");         }
        }
    }

    if(id==="no7")
    {
        if($("#no5").text()===turn)
        {
            if($("#no3").text()===turn)
            {
                $(".info").text(turn+" has won");

                console.log(turn+" has won");
   
                gameover=true;
                gameovermusic.play();
                $(".imgbox").css("visibility","visible");         }
        }
        if($("#no4").text()===turn)
        {
            if($("#no1").text()===turn)
            {
                $(".info").text(turn+" has won");

                console.log(turn+" has won");
   
                gameover=true;
                gameovermusic.play();
                $(".imgbox").css("visibility","visible");         }
        }
        if($("#no8").text()===turn)
        {
            if($("#no9").text()===turn)
            {
                $(".info").text(turn+" has won");

                console.log(turn+" has won");
   
                gameover=true;
                gameovermusic.play();
                $(".imgbox").css("visibility","visible");         }
        }
    }

    if(id==="no8")
    {
        if($("#no2").text()===turn)
        {
            if($("#no5").text()===turn)
            {
                $(".info").text(turn+" has won");

                console.log(turn+" has won");
   
                gameover=true;
                gameovermusic.play();
                $(".imgbox").css("visibility","visible");         }
        }
        if($("#no9").text()===turn)
        {
            if($("#no7").text()===turn)
            {
                $(".info").text(turn+" has won");

                console.log(turn+" has won");
   
                gameover=true;
                gameovermusic.play();
                $(".imgbox").css("visibility","visible");         }
        }
    }

    if(id==="no9")
    {
        if($("#no6").text()===turn)
        {
            if($("#no3").text()===turn)
            {
                $(".info").text(turn+" has won");

                console.log(turn+" has won");
   
                gameover=true;
                gameovermusic.play();
                $(".imgbox").css("visibility","visible");         }
        }
        if($("#no8").text()===turn)
        {
            if($("#no7").text()===turn)
            {
                $(".info").text(turn+" has won");

                console.log(turn+" has won");
   
                gameover=true;
                gameovermusic.play();
                $(".imgbox").css("visibility","visible");         }
        }
        if($("#no5").text()===turn)
        {
            if($("#no1").text()===turn)
            {
                $(".info").text(turn+" has won");

                console.log(turn+" has won");
   
                gameover=true;
                gameovermusic.play();
                $(".imgbox").css("visibility","visible");         }
        }
    }
}

$(".box").click(function(){
    if(gameover===false)
    {
        if($(this).text()!=="X" && $(this).text()!=="O")
        {
            if(turn==="X")
            {
                $(this).text(turn);
                turnmusic.play();
                checkanswer(this.id,turn);
                if(gameover===false)
                {turn="O"
                $(".info").text("Turn for "+turn);}
    
            }
            else
            {
                $(this).text("O");
                turnmusic.play();
                checkanswer(this.id,turn);
                if(gameover===false)
                {turn="X"
                $(".info").text("Turn for "+turn)};
            }
        }
        
    }
    
 
    
    
    
})
// audio.play();