new Vue({
  el: "#app",
  data: {
    msg: "Welcome, stranger!",
    src: "https://placeimg.com/200/300/animals",
    description: "Some great description!",
    filtros: [
      "_1977",
      "aden",
      "brannan",
      "brooklyn",
      "clarendon",
      "earlybird",
      "gingham",
      "hudson",
      "inkwell",
      "kelvin",
      "lark",
      "lofi",
      "maven",
      "mayfair",
      "moon",
      "nashville",
      "perpetua",
      "reyes",
      "rise",
      "slumber",
      "stinson",
      "toaster",
      "valencia",
      "walden",
      "willow",
      "xpro2"
    ],
    selected: "",
    rotateText: 0,
    polaroid_br: 0,
    image_br: 0
  },
  methods: {
    loadFile(event) {
      this.src = window.URL.createObjectURL(
        document.getElementById("image").files[0]
      );
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = function(evt) {
        console.log(evt);
       
        this.src = reader.result;
      };
      var image = new Image();
      image.onload = function() {
        var height = this.height;
        var width = this.width;
        console.log(`height is ${height} and width is ${width}`);
        return true;
      };
     
    },
    screenshot() {
      console.log("ok");
      var node = document.getElementById("polaroid-container");
      domtoimage
        .toPng(node)
        .then(function(dataUrl) {
          var img = new Image();
          img.src = dataUrl;
          document.body.appendChild(img);
        })
        .catch(function(error) {
          console.error("oops, something went wrong!", error);
        });
      //   domtoimage.toJpeg(document.getElementById('hola'), { quality: 0.95 })
      // .then(function (dataUrl) {
      // console.log(dataUrl);
      // let res = document.createElement('img');
      // res.src = dataUrl;
      // console.log(res);
      // // document.body.appendChild(res);

      // var a = document.createElement('a');
      // a.href = dataUrl;
      // a.download = "test.png";
      // document.body.appendChild(a);
      // a.click();
      // document.body.removeChild(a);
      // var link = document.createElement('a');
      // link.download = 'my-image-name.jpeg';
      // link.href = dataUrl;
      // link.click();
      // });

      //   html2canvas(document.querySelector("#polaroid")).then(canvas => {
      //     document.body.appendChild(canvas)
      // });
      // }
    }
  }
});
