//challnge 1:your age in days

function ageindays(){
    var birthyear=prompt('what year were you born...good friend?');
    var ageindayss=(2020-birthyear)*365;
    var h1=document.createElement('h1');
    var textanswer=document.createTextNode('you are ' + ageindayss + ' days old');
   h1.setAttribute('id','ageindays');
   h1.appendChild(textanswer);
   document.getElementById('flex-box-result').appendChild(h1);  
}
function reset(){
    document.getElementById('ageindays').remove();

}
//challenge 2:cat generator
function generatecat()
{ 
    var image=document.createElement('img');
    var div=document.getElementById('flex-cat-gen');
    image.src="img/DUN_8837.jpg" ;
    div.appendChild(image);
}

//challenge 3:rock,paper,scissors
function rpsGame(yourchoice)
{
console.log(yourchoice);
var humanchoice, botchoice;
humanchoice=yourchoice.id;
botchoice=numbertochoice(roundtorpsint());
console.log('computerchoice',botchoice);
results=decideWinner(humanchoice,botchoice);//[1,0] human won
console.log(results);
message=finalMessage(results);//(messageyou won color:green  ,lost:red)
console.log(message);
rpsFrontEnd(yourchoice.id,botchoice,message);
}
function roundtorpsint()
{
  return  Math.floor(Math.random()*3);
}
function numbertochoice(number)
{
    return ['rock','paper','scissors'][number];
} 
function decideWinner(yourchoice,computerchoice)
{
    var rpsdatabase={
        'rock':{'scissors':1,'rock':0.5,'paper':0},
        'paper':{'rock':1,'paper':0.5,'scissors':0},
        'scissors':{'paper':1,'scissors':0.5,'rock':0}
    };
    var yourscore=rpsdatabase[yourchoice][computerchoice];
    var computerscore=rpsdatabase[computerchoice][yourchoice];
    return [yourscore,computerscore];
}
function finalMessage( [myscore,computerscore])
{
    if (myscore===0) {
        return {'message':'you lost!','color':'red'};
        
    } else  if(myscore===0.5)
        {
            return {'message':'you tied!','color':'yellow'};
        
    }
else{
    return {'message':'you won!','color':'green'};
}
}
function rpsFrontEnd(humanImageChoice,botImageChoice,finalMessage)
{
    var imageDataBase={
        'rock':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissors':document.getElementById('scissors').src
    }
    //lets remove images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();


    var humanDiv=document.createElement('div');
    var botDiv=document.createElement('div');
    var messageDiv=document.createElement('div');
    humanDiv.innerHTML="<img src='" +imageDataBase[humanImageChoice]+ "' height=150px width=150px style='box-shadow:0px 10px 50px rgba(37,50,233,1);'>";
    messageDiv.innerHTML="<h1 style='color: "+ finalMessage['color']+"; font-size:60px; padding:30px; '> " + finalMessage['message'] + "</h1>";
    botDiv.innerHTML="<img src='" +imageDataBase[botImageChoice]+ "' height=150px width=150px style='box-shadow:0px 10px 50px rgba(243,38,24,1);'>";
    
    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
}