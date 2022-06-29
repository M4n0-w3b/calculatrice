function clearScreen(){
    //console.log("clear")
    document.getElementById("resultat").value = "";
}

function display(valeur){
    //console.log("valeur")
    document.getElementById("resultat").value += valeur;
}

function calculate(){
    //console.log("resultat")
    let x = document.getElementById("resultat").value;
    let y = eval(x); 
    document.getElementById("resultat").value = y;
}

document.addEventListener("keydown", function(event) {
    if(event.key=="Enter"){
        calculate();

    }else if(event.key=="Backspace"){
        clearScreen();
    }else{
        document.getElementById("resultat").value+=event.key;
    }

    console.log(event);
  })


/*
@HostListener('document:keydown', ['$event'])
handleKeydownEvent(event: KeyboardEvent) {
    let index = Number(event.key);
    if (isNaN(index)) {
        // skip, for now
    }else{
        doAction(index);
    }
}
*/

/*
function applyKey (_event_){
        
    // --- Retrieve event object from current web explorer
    var winObj = checkEventObj(_event_);
    
    var intKeyCode = winObj.keyCode;
    var intAltKey = winObj.altKey;
    var intCtrlKey = winObj.ctrlKey;
            
    // 1° --- Access with [ALT/CTRL+Key]
    if (intAltKey || intCtrlKey) {
            
            if ( intKeyCode == KEY_RIGHT || intKeyCode == KEY_LEFT ){
                    
                    // --- Display Message
                    alert("Hello with ALT/CTRL !");
                    
                    // 3° --- Map the keyCode in another keyCode not used
                    winObj.keyCode = intKeyCode = REMAP_KEY_T;
                    winObj.returnValue = false;
                    return false;
            }
            
    }
    // 2 ° --- Access without [ALT/CTRL+Key]
    else {
            
            if ( intKeyCode == KEY_RIGHT || intKeyCode == KEY_LEFT ){
                    
                    // --- Display Message
                    alert("Hello !");
                    
                    // 3° --- Map the keyCode in another keyCode not used
                    winObj.keyCode = intKeyCode = REMAP_KEY_T;
                    winObj.returnValue = false;
                    return false;
            }
            
    }
    
}
*/





/*
-----------------------------------------------------------

document.write(eval(3 * 3));
// Affiche 9

function showEval(args){
  return args.toLowerCase();
}

var ville = showEval('PARIS');
var response = 'ville';

document.write(eval(response));
// Affiche "paris"
// eval(response) a pour effet d'évaluer le contenu de la variable "response"
// Cela équivaut à écrire eval('ville')*/