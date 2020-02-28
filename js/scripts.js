$(function() {
    $('.summary').hide();
    $('.cdata-overlay').hide();

//Get inputs
    $("#checkout").click(function() {
        let flavour = $(".flavour option:selected").val();
        let size = $("#size option:selected").val();
        let crust = $("#crust option:selected").val();
        let toppings = $("#toppings option:selected").val();
        let number = $("#number").val();
    });
    let price, totalPrice;
    switch (flavour) {
        case flavour = "vegetikka":
            switch (size) {
                case size = "regular":
                    price = 300;
                    if (crust === "thin") {
                        totalPrice = (price * number) + 100;
                    } else if (crust === "thick") {
                        totalPrice = (price * number) + 150;
                    } else if (crust === "flatbread") {
                        totalPrice = (price * number) + 200;
                    } else if (crust === "deep") {
                        totalPrice = (price * number) + 250;
                    } else if (crust === "cheese") {
                        totalPrice = (price * number) + 300;
                    } else {
                        totalPrice = (price * number) +350;
                    }
                    break;

                case size = "medium":
                    price = 600;
                    if (Crust === "thin") {
                        totalPrice =(price * number) + 100;
                    }else if (crust === "thick") {
                        totalPrice
                    }
                
            }
    };

});
