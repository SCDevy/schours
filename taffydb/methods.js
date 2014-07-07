var userInput;

function writeLocation(locationIndex) {
    document.getElementById('result').innerHTML = '<div class="result-location">' + locations({index:locationIndex}).first().name + '</div>' + '<div class="times-wrapper">' + '<div class="result-day">Mon:</div><div class="result-openclose">' + locations({index:locationIndex}).first().monday + '</div><br/>' + '<div class="result-day">Tues:</div><div class="result-openclose">' + locations({index:locationIndex}).first().tuesday + '</div><br/>' + '<div class="result-day">Wed:</div><div class="result-openclose">' + locations({index:locationIndex}).first().wednesday + '</div><br/>' + '<div class="result-day">Thurs:</div><div class="result-openclose">' + locations({index:locationIndex}).first().thursday + '</div><br/>' + '<div class="result-day">Fri:</div><div class="result-openclose">' + locations({index:locationIndex}).first().friday + '</div><br/>' + '<div class="result-day">Sat:</div><div class="result-openclose">' + locations({index:locationIndex}).first().saturday + '</div><br/>' + '<div class="result-day">Sun:</div><div class="result-openclose">' + locations({index:locationIndex}).first().sunday + '</div><br/>' + '</div><br style="clear:both;"/><br/>';    
}

function writeError() {
//    document.getElementById('result').innerHTML = '<p>Location can\'t be found. Try something else!</p>';
    alert("Location can't be found. Try something else!");
}

function search(searchTerm) {
    locations().each(checkMatching(searchTerm));
}

function checkMatching(searchTerm) {
    var searchIndex = locations({name:searchTerm}).first().index;
    if (searchIndex === undefined) {
        writeError();
    }
    else {
    writeLocation(searchIndex);
    }
}

function addInput(input) {
    userInput = input;
}

function returnInput() {
    return userInput;
}