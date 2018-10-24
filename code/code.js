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
    selected: ""
  },
  methods: {
    loadFile(event) {
      this.src = window.URL.createObjectURL(
        document.getElementById("image").files[0]
      );
      console.log(event.target.files);
      let reader = new FileReader();
      reader.onload = function() {
        this.src = reader.result;
      };
      reader.readAsDataURL(event.target.files[0]);
    },
    screenshot(){
      html2canvas(document.querySelector("#polaroid")).then(canvas => {
        document.body.appendChild(canvas)
    });
    }
  }
});
