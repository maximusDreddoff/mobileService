/**
 * Created by Maximus on 02/11/2016.
 */
$(document).ready(function () {
    var cities = $('.cities'),
        name = $('.clientName'),
        phone = $('.phoneNmb'),
        clientData = [];

    if (localStorage.length > 2) {
        var dataSet = JSON.parse(localStorage.getItem('clientData')) || [];
        $('.surname').val(dataSet[1]);
        $('.name').val(dataSet[2]);
        $('.secondName').val(dataSet[3]);

    }

    cities.on('click', "li a", function () {
        var pickedCity = $(this).html();
        // alert(pickedCity);
        $('.cities li a').removeClass('pickedElement').addClass('ordinaryElement');
        $(this).removeClass('ordinaryElement').addClass('pickedElement');
        clientData[0] = pickedCity;
        if (localStorage.length > 2) {
            var dataSet = JSON.parse(localStorage.getItem('clientData')) || [];
            dataSet[0] = pickedCity;
            localStorage.setItem('clientData', JSON.stringify(dataSet));
        }
        else {
            localStorage.setItem('clientData', JSON.stringify(clientData));
        }
    });
    name.on('click', '.btnSubmit', function () {
        var dataSet = JSON.parse(localStorage.getItem('clientData')) || [];
        console.log(dataSet);
        dataSet[1] = $('.surname').val();
        dataSet[2] = $('.name').val();
        dataSet[3] = $('.secondName').val();
        console.log(dataSet);
        localStorage.setItem('clientData', JSON.stringify(dataSet))
    });

    phone.on('click', '.btnSubmit', function () {
        var dataSet = JSON.parse(localStorage.getItem('clientData')) || [];
        dataSet[4] = $('.phoneInput').val();
        console.log(dataSet);
        localStorage.setItem('clientData', JSON.stringify(dataSet));
        //get request
        localStorage.removeItem('clientData');
    })
});