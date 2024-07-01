//first of all we call aor div by id "main".

let button = document.getElementById("main");
// now we call our paragraph below button by id "showlater".
let paragraph = document.getElementById("showlater");
//now we change our button html after click from click me to unclick so we call button html by first call button by "btn" id.
let html =document.getElementById('btn');





// now we call a function which perform when we click button which we already add in our html button tag .
 function btnclick() {
    //in this we add newclass in new class we perform our css  cursor : none.
    button.classList.add("newClass");
    //add message paragraph after click button
    paragraph.innerHTML = "cursor has been removed inside a div!!!";
    //change button htnl after click 
   html.innerHTML = "unclick";
  
};