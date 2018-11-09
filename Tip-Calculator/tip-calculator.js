function calculateTip() {
        let price = $("#price").val()
        let numberOfPeople = $("#numberOfPeople").val()
        if($("#radio_1").prop("checked", true)){
            tipPercent = .15
        }
        if($("#radio_2").prop("checked", true)){
            tipPercent = .20
        }
        if($("#radio_3").prop("checked", true)){
            tipPercent = .25
        }

        let tipAmount = (price / numberOfPeople) * tipPercent
    $("#tip").val(tipAmount) 
    console.log(tipAmount)
       
        
    };

$(document).ready(function () {
    $("#calculate").on("click", calculateTip)
    
});