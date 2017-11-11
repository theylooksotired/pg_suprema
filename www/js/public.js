var activePage = 'intro';
var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
    },
    onDeviceReady: function() {
    }
};

$(document).ready(function(){
    $('.button-qr').click(function(evt){
        cordova.plugins.barcodeScanner.scan(
            function (result) {
                $('.qr-info').html('Felicidades acabas de ganar 10 puntos!<br/><br/>QR:<br/>' + result.text);
                $('.qr-info').removeClass('hide');
                console.log(result);
            },
            function (error) {
                alert("Lo sentimos, no podemos escanear el código. Intente nuevamente. Si el problema persiste contáctenos directamente.");
                console.log(error);
            },
            {
                preferFrontCamera : true,
                showFlipCameraButton : true,
                showTorchButton : true,
                torchOn: true,
                saveHistory: true,
                prompt : "Coloque el codigo QR dentro del área de escaneo",
                resultDisplayDuration: 500,
                formats : "QR_CODE,PDF_417",
                orientation : "portrait",
                disableAnimations : true,
                disableSuccessBeep: false
            }
        );
    });
});