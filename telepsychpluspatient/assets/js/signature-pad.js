if (document.body.contains(document.getElementById("signature-1"))) {
  var canvas = document.getElementById("signature-canvas-1");
  var signaturePad = new SignaturePad(canvas, {
    backgroundColor: "rgba(255, 255, 255, 0)",
    penColor: "rgb(0, 0, 0)",
    velocityFilterWeight: 0.7,
    minWidth: 0.5,
    maxWidth: 2.5,
    throttle: 16, // max x milli seconds on event update, OBS! this introduces lag for event update
    minPointDistance: 3,
    onEnd: function () {
      var sign1 = $("#signature-input-1").val(signaturePad.toDataURL());
      console.log("sign-1 - ", sign1.val());
    },
  });

  document
    .getElementById("sign-lock-1")
    .addEventListener("click", function (event) {
      // console.log(this.childNodes[0].className);
      if (this.childNodes[0].className == "fa fa-unlock-alt") {
        this.childNodes[0].className = "fa fa-lock";
        signaturePad.off();
      } else {
        this.childNodes[0].className = "fa fa-unlock-alt";
        signaturePad.on();
      }
    });

  document.getElementById("clear-1").addEventListener("click", function () {
    if (
      document.getElementById("sign-lock-1").childNodes[0].className !=
      "fa fa-lock"
    ) {
      signaturePad.clear();
    }
  });
  document
    .getElementById("upload-sign-1")
    .addEventListener("click", function () {
      document.getElementById("file-upload-1").trigger("click");
    });
  function resizeCanvas() {
    // When zoomed out to less than 100%, for some very strange reason,
    // some browsers report devicePixelRatio as less than 1
    // and only part of the canvas is cleared then.
    var oldContent = signaturePad.toData();
    var ratio = Math.max(window.devicePixelRatio || 1, 1);
    canvas.width = canvas.offsetWidth * ratio;
    canvas.height = canvas.offsetHeight * ratio;
    canvas.getContext("2d").scale(ratio, ratio);
    signaturePad.clear();
    signaturePad.fromData(oldContent);
  }

  window.onresize = resizeCanvas;
  resizeCanvas();
}

if (document.body.contains(document.getElementById("signature-2"))) {
  var canvas2 = document.getElementById("signature-canvas-2");
  var signaturePad2 = new SignaturePad(canvas2, {
    backgroundColor: "rgba(255, 255, 255, 0)",
    penColor: "rgb(0, 0, 0)",
    velocityFilterWeight: 0.7,
    minWidth: 0.5,
    maxWidth: 2.5,
    throttle: 16, // max x milli seconds on event update, OBS! this introduces lag for event update
    minPointDistance: 3,
    onEnd: function () {
      var sign1 = $("#signature-input-2").val(signaturePad2.toDataURL());
      console.log("sign-2 - ", sign2.val());
    },
  });

  document
    .getElementById("sign-lock-2")
    .addEventListener("click", function (event) {
      // console.log(this.childNodes[0].className);
      if (this.childNodes[0].className == "fa fa-unlock-alt") {
        this.childNodes[0].className = "fa fa-lock";
        signaturePad2.off();
      } else {
        this.childNodes[0].className = "fa fa-unlock-alt";
        signaturePad2.on();
      }
    });

  document.getElementById("clear-2").addEventListener("click", function () {
    if (
      document.getElementById("sign-lock-2").childNodes[0].className !=
      "fa fa-lock"
    ) {
      signaturePad2.clear();
    }
  });
  document
    .getElementById("upload-sign-2")
    .addEventListener("click", function () {
      document.getElementById("file-upload-2").trigger("click");
    });
  function resizeCanvas2() {
    // When zoomed out to less than 100%, for some very strange reason,
    // some browsers report devicePixelRatio as less than 1
    // and only part of the canvas is cleared then.
    var oldContent2 = signaturePad2.toData();
    var ratio = Math.max(window.devicePixelRatio || 1, 1);
    canvas2.width = canvas2.offsetWidth * ratio;
    canvas2.height = canvas2.offsetHeight * ratio;
    canvas2.getContext("2d").scale(ratio, ratio);
    signaturePad2.clear();
    signaturePad2.fromData(oldContent2);
  }

  window.onresize = resizeCanvas2;
  resizeCanvas2();
}
