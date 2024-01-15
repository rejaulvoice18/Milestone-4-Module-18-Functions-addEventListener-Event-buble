function explain_callback(name, age, task){
    console.log("Hello", name);
    console.log("Your age is:", age);
    task();
}

function washHand(){
    console.log('wash hand with soap');
}
function takShower(){
    console.log('Take shower');
}
function scrollFacebook(){
    console.log('Scroll facebook but dont like any post');
}


explain_callback('Sogir Uddin', 17, washHand);
explain_callback('Rejaul Karim', 28, scrollFacebook);
explain_callback('Emran hossain', 29, takShower);

