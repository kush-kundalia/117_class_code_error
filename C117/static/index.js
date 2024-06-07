//Create date variable
var date = new Date()
let display_date = "Date:" + date.toLocaleDateString()
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]


//Load HTML DOM

$(document).ready(function() {
    $("#display_date").html(display_date)
})

//Define variable to store predicted emotion
let predicted_emotion, emoji_url
$(function(){
    $("#predict_button").click(function(){
        let input_data = {
            "text": $("#text").val()
        } 
        console.log(input_data)
        $.ajax({
            type: "POST",
            url: "/predict-emotion",
            data: JSON.stringify(input_data),
            dataType: "json",
            contentType: "application/json",
            success: function(result){
                //handling server response
                predicted_emotion = result.data.predicted_emotion
                emoji_url = result.data.emoji_url
                $("#prediction").html(predicted_emotion)
                $("#prediction").css("display", "block")
                $("#emo_img_url").attr("src", emoji_url)
                $("#emo_img_url").css("display", "block")
            }, 
            error: function(result){
                alert(result.responseJSON.message)
            }

        });
    });
})

//HTML-->JavaScript--->Flask
//Flask--->JavaScript--->HTML

//jQuery selector and click action

$(function () {
    $("#predict_button").click(function () {
        //AJAX call

        $.ajax({
            
            
              {
                
                // Result Received From Flask ----->JavaScript
                
                // Display Result Using JavaScript----->HTML
                
            },
            //Error function
            
        });
    });
})

