
    buttons = ["Tom Brady","Pogba","Ryan Gosling","Rachel Mcadams","David Beckham", "Scholes", "Ryan Giggs", "Manchester United", "Cantona","Matrix","Departed","Inception","Bruce Lee","Django","Tsubasa","Trump","Obama"];

    var showButton = function (name) {
        for (var i = 0; i < name.length; i++) {
            var newButton = $("<div id ='" + name[i] +"' class='btn btn-info'>").text(name[i]);

            $(".all-buttons").append(newButton);
        }
    };

   /* var initialButtons = function() {
        for (var i = 0; i < buttons.length; i++) {
            showButton(buttons[i]);
        }
    }
    initialButtons();*/
    showButton(buttons);

    $("#button-input").on("click",function () {
        event.preventDefault();
        var newButtonVar = document.querySelector('#add-Button').value;
        $(".all-buttons").append($("<div id ='" + newButtonVar +"' class='btn btn-info'>").text(newButtonVar));


    });

    $(".all-buttons").on("click",".btn",function () {
        $(".all_gifs").empty();
        var search = $(this).attr("id");
        console.log(search);
        console.log("test");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + search +"&api_key=accf662df87648059081f8612dc2f0a3&limit=10";
        console.log(queryURL);
        $.ajax({
            url: queryURL,
            method: "GET"
        }).done(function(response) {

            var responseVar = response.data;
            for (var i= 0; i< responseVar.length; i++) {
                var gifVarStill = responseVar[i]['images']['fixed_height_still']['url'];
                var gifVarMotion = responseVar[i]['images']['fixed_height']['url'];
                var rateVar = responseVar[i]['rating'];
                var gifDiv = $("<img class= 'the_gif' src='"+gifVarStill+"' still_gif='"+gifVarStill+"' motion_gif='"+gifVarMotion+"' state ='still'>")
                $(".all_gifs").append($("<div class='test'>")).append($("<p>Rating: "+rateVar+"  </p>")).append(gifDiv);
                console.log(rateVar);
                console.log(gifVarStill);
            }

        })
    })

    $(".all_gifs").on("click",".the_gif", function(){
        var gifVarStill = $(this).attr("still_gif");
        var gifVarMotion = $(this).attr("motion_gif");
        var stateVar = $(this).attr("state");
        if (stateVar === "still"){
            $(this).attr("src",gifVarMotion);
            $(this).attr("state","motion");
            console.log(stateVar);
        }
        else{
            $(this).attr("src",gifVarStill);
            $(this).attr("state","still");
            console.log(stateVar);
        }
    })



