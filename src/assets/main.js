let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');

    if (answer == '' || attempt == '') {
        setHiddenFields();
    }
    if (!validateInput(input.value)) {
        return false;
    } else {
        attempt++;
    }
    if (getResults() == true) {
        setMessage("You Win! :)");
        showAnswer(true);
        showReplay();
    } else if (getResults() == false) {
        setMessage("You Lose! :(");
        showAnswer(false);
        showReplay();
    } else {
        document.getElementById('message').innerHTML = "Incorrect, try again.";
    }
}


function getResults(input) {
    let html = '<div class="row"><span class="col-md-6">' + input + '</span><div class="col-md-6">';
    let correct = 0;
    for (var i = 0; i < input.value.length; i++) {
        if (input.value.charAt(i) == answer.value.charAt(i)) {
            html += '<span class="glyphicon glyphicon-ok"></span>';
            correct++;
        } else if (answer.value.indexOf(input.value.charAt(i)) == true) {
            html += '<span class="glyphicon glyphicon-transfer"></span>';
        } else {
            html += '<span class="glyphicon glyphicon-remove"></span>';
        }
    }
    html += '</div></div>';

    document.getElementById(results).innerHTML = html;
    if (correct == 4) {
        return true;
    } else {
        return false;
    }
}



function setHiddenFields() {
    answer.value = Math.floor(Math.random() * 9999).toString();
    while (answer.value.length < 4) {
        answer.value += "0" + answer.value;
    }
    attempt = 0;
}

function setMessage(message) {
    document.getElementById("message").innerHTML = message;
}

function validateInput(input) {
    if (input.length == 4) {
        return true;
    } else {
        setMessage("Guesses must be exactly 4 characters long.");
        return false;
    }
}

function showAnswer(success) {
    document.getElementById('code').innerHTML = answer.value;
    if (success == true) {
        document.getElementById('code').className = ' success';
    } else if (success == false) {
        document.getElementById('code').className = ' failure';
    }
}

function showReplay() {
    document.getElementById('guessing-div').style.display = 'none';
    document.getElementById('replay-div').style.display = 'block';
}



let pr = '1234';

let h = '4321';

console.log(h.indexOf(4));
for (var i = 0; i < pr.length; + i++) {
    if (pr.charAt(1) == h.charAt(1)) {
        console.log(pr.charAt(1));
        console.log(h.charAt(1));

        console.log(a);
        console.log('es exacto');
    } else if (pr.indexOf(i) == true) {
        console.log("si esta, pero no es exacto");
    }
}