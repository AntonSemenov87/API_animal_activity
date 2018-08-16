
var apiKey = "tCyk9O1iRm2fZbDF03zyUkK3VNun04PI";
var topics = ["cat", "horse", "dog", "dolphin", "bird", "spider", "snake", "fox", "elephant", "owl"];

$(document).ready(function () {
    $("#addAnimal").on("click", function () {
        var addedAnimal = $("#animal-input").val().trim();
        topics.push(addedAnimal);
        $("#animalButtons").empty();
        populateButtons()
    })

    populateButtons()

    $(".animal").on("click", function () {
        var animal = $(this).attr("data-animal");
        console.log(animal)
        var queryURL = `http://api.giphy.com/v1/gifs/search?q=${animal}&api_key=${apiKey}&limit=5`;
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response.data)
        })
    })


});
function populateButtons() {
    for (var i = 0; i < topics.length; i++) {
        var button = $("<button>");
        button.text(topics[i]);
        button.addClass("animal");
        button.attr("data-animal", topics[i]);
        $("#animalButtons").append(button);
    }
}

function showImages(response) {
    console.log(response);

}