function calculateTip() {
        let price = $("#price").val()
      
        let numberOfPeople = $("#numberOfPeople").val()
        if($("#radio_1").prop("checked", true)){
            tipPercent = .15
            console.log(tipPercent)
        }
        if($("#radio_2").prop("checked", true)){
            tipPercent = .20
            console.log(tipPercent)

        }
        if($("#radio_3").prop("checked", true)){
            tipPercent = .25
            console.log(tipPercent)

        }

        let tipAmount = (price / numberOfPeople) * tipPercent
        console.log("price", price)
        console.log("numberOfPeople", numberOfPeople)
        console.log("tipPercent", tipPercent)
        console.log("radio_1",$("#radio_1").prop("checked", true) )
    $("#tip").val(tipAmount) 
    console.log(tipAmount)
       
        
    };

$(document).ready(function () {
    $("#calculate").on("click", calculateTip)
    
});