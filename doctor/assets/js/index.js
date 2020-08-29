document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
        $(".language-btn").click(function(){
            $('.language-btn').removeClass("active");
            $(this).addClass('active');
        });

}

$('<script src="cordova.js"></script>').appendTo('body');