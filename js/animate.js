$(function() {
var availableTags = [
];

var counter = 1;
locations().each(function (r) {availableTags.push(locations({index:counter}).first().name); counter++;});
console.log(availableTags);

//for (var i = 0; i < 15; i++) {
//availableTags.push(locations().first().name);
//}
$( "#search-field" ).autocomplete({
  source: availableTags
});
});