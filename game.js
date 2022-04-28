var height = 1;
var width = 5;
var level = 1;
var row = 0;
var col = 0;
var attempts = 0;
const word = ["qwert","yuiobcvbnm","tacroqlbtmpgiqe"];
const ques = [["First letter of a colour related to bull","First letter of source of oxygen","The Great _all of China",
            "First letter of animal which has a trunk","First letter of the name of holy book of muslims"],["First letter of a vehicle that runs on water",
            "First letter of the only country which has an ocean named after it","First letter of an object that can attract metal objects to it",
            "_oga","First letter of the spot where birds lay eggs","First letter of the thing that is required in rain","First letter of synonym of prohibit",
            "First letter of second planet from the Sun","First letter of the word which is both colour and fruit","First letter of the capital of Egypt"],
            ["Which letter is like a ring around your finger?","Which letter of the alphabet wants to know the reasons all the time?","I am a letter that buzzes around.Who am I?",
            "What letter is a drink?","What letter is a vegetable?","What is the end of everything?","What letter is a body of water?","Alphabet which is most curious",
            "What comes once in a minute, twice in a moment, but never in a thousand years?","Which letter always comes first?","What is the beginning of eternity and the end of time and space?",
            "I am in a river, but not in a lake, I am in computer, but not in a T.V, and I am in rain, but not in snow.","What is the difference between here and there ?",
            "Which letter of the alphabet is a part of your face?","What part of London is in Brazil?"]];
const ans = [["r","t","w","e","q"],["b","i","m","y","n","u","b","v","o","c"],["o","y","b","t","p","g","c","y","m","a","e","r","t","i","l"]];
var correct = 0;
window.onload = function(){
    initialize();
}

function res()
{
    location.reload();
}


function initialize()
{
    var h = 70*level;
    document.getElementById("board").style.height = h + "px";
    for(let r = 0; r < level; r++)
    {
        for(let c = 0; c < width; c++)
        {
            let tile = document.createElement("span");
            tile.id = r.toString() + "-" + c.toString();
            tile.classList.add("tile");
            tile.innerText = word[level-1][(r*5)+c];
            document.getElementById("board").appendChild(tile);
        }
    }
    
    document.getElementById("question").innerHTML = ques[level-1][correct];
    var text = document.createTextNode("\n"+level);
    var lev = document.getElementById("level");
    if(level != 1)
    {
        lev.removeChild(lev.lastChild);
    }
    lev.appendChild(text);
    var text = document.createTextNode("\n"+attempts);
    var atp = document.getElementById("attempt");
    if(level != 1)
    {
        atp.removeChild(atp.lastChild);
    }
    atp.appendChild(text);
    var grids = document.getElementsByClassName("tile");
    for(var i = 0; i < grids.length; i++)
    {
        grids[i].addEventListener('click', function(){
            
            if(event.target.innerText == ans[level-1][correct])
            {
                event.target.style.backgroundColor = "#009900";
                correct++;
                document.getElementById("question").innerHTML = ques[level-1][correct];
                var atp = document.getElementById("attempt");
                var text = document.createTextNode("\n"+attempts);
                atp.removeChild(atp.lastChild);
                atp.appendChild(text);
                if(correct == 5*level)
                {
                    correct = 0;
                    if(attempts == 0)
                    {
                        level++;
                        var div = document.getElementById('board');
                        while(div.firstChild)
                        {
                            div.removeChild(div.firstChild);
                        }
                        if(level == 4)
                        {
                            let h2 = document.createElement('h2');
                            h2.textContent = "Congratulations you Won the game !! click Restart button to play again";
                            div.appendChild(h2);
                            document.getElementById("question").style.display = "none";
                        }
                        else
                        {
                            initialize(); 
                        }    
                    }
                    else
                    {
                        alert("Finish level without giving any wrong answer to proceed to next level")
                        location.reload();
                    }              
                }
            }
            else
            {
                event.target.style.backgroundColor = "red";
                attempts++;
                var atp = document.getElementById("attempt");
                var text = document.createTextNode("\n"+attempts);
                atp.removeChild(atp.lastChild);
                atp.appendChild(text);
                if(attempts == 3)
                {
                    alert("GAME OVER");
                    location.reload();
                }
            }
        })
    }
}