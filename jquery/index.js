$(function () {
    $(window).resize(function () {

        if (window.innerWidth < 824) {
            $('#testimonials').css({
                height: "auto"
            });
        }
        else {
            $('#testimonials').css({
                height: "450px"
            });
        }
        if (window.innerWidth < 1000) {
            $('#main_slider').css('margin-top', '90px');
            $('#main_navbar').css({
                backgroundColor: "#1e1e1e",

            });
            $('#main_navbar ul li a').css({
                backgroundColor: "#1e1e1e",
            });
            if (window.innerWidth < 500) {
                $('#btn1').removeAttr('class');
                $('#btn1').attr('class', 'as-btn-whiteborder-medium');
            }
            else {
                $('#btn1').removeAttr('class');
                $('#btn1').attr('class', 'as-btn-whiteborder-large');
            }

        }
        else {
            $('#main_slider').css('margin-top', '0px');
            $('#main_navbar').css({
                backgroundColor: "rgba(79, 79, 79,0)",
            });
            $('#main_navbar ul li a').css({
                backgroundColor: "rgba(79, 79, 79,0)",
            });

        }
    });
    if (window.innerWidth < 1000) {
        $('#main_slider').css('margin-top', '90px');
        $('#main_navbar').css({
            backgroundColor: "#1e1e1e",
        });
        $('#main_navbar ul li a').css({
            backgroundColor: "#1e1e1e",
        });

    }
    else {
        $('#main_slider').css('margin-top', '0px');
        $('#main_navbar').css({
            backgroundColor: "rgba(79, 79, 79,0)",
        });
        $('#main_navbar ul li a').css({
            backgroundColor: "rgba(79, 79, 79,0)",
        });
        $('#btn1').attr('class', 'as-btn-whiteborder-large');
    }
    if (window.innerWidth < 500) {
        $('#btn1').removeAttr('class');
        $('#btn1').attr('class', 'as-btn-whiteborder-medium');
    }
    else {
        $('#btn1').removeAttr('class');
        $('#btn1').attr('class', 'as-btn-whiteborder-large');
    }


    $(window).scroll(function () {
        if (window.pageYOffset > 71) {
            $('#main_navbar').css({
                backgroundColor: "rgb(81,81,81)",

            });
            $('#main_navbar ul li a').css({
                backgroundColor: "rgb(81,81,81)",
            });

            $('#denote').css({
                backgroundColor:"#fac038",
                color:"white",
            })

        }
        else {
            if (window.innerWidth < 1000) {
                $('#main_slider').css('margin-top', '90px');
                $('#main_navbar').css({
                    backgroundColor: "#1e1e1e",

                });

                $('#denote').css({
                    backgroundColor:"white",
                    color:"black",
                })
    


                
            }
            else {
                $('#main_navbar').css({
                    backgroundColor: "rgba(79, 79, 79,0)",
                });
                $('#main_navbar ul li a').css({
                    backgroundColor: "rgba(79, 79, 79,0)",
                });
                $('#denote').css({
                    backgroundColor:"white",
                    color:"black",
                })
            }

        }
    });


    if (window.innerWidth < 824) {
        $('#testimonials').css({
            height: "auto"
        });
    }
    else {
        $('#testimonials').css({
            height: "450px"
        });
    }



    $('#input1,#input2,#textarea1').bind('input click focus',function(){
        $(this).css({
            borderColor:"#fec840",
            borderWidth:"2px",
        });
    });

    $('#input1,#input2,#textarea1').bind('blur',function(){
        $(this).css({
            borderColor:"white",
            borderWidth:"1px",
            
        });
    });



});
