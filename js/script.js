var app = new Vue ({
  el: "#app",
  data: {
    counter: 0,
    immagini: [
      "https://cnet1.cbsistatic.com/img/1So_g31l6SBe2F5ajnSToDMsoTA=/1200x675/2017/10/13/b5e23907-e4e8-454c-a943-2065d8e04d86/6360498178139720611073070814-rick-and-morty.jpg",
      "https://www.ilprimatonazionale.it/wp-content/uploads/2020/08/rick-morty-nuovo-corto-riscrivere-totalmente-storia-v8-462171.jpg",
      "https://www.telefilm-central.org/wp-content/uploads/2017/11/rick-and-morty-e1515250541920.png",
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/rick-morty-1509959690.jpg",
      "https://www.roadtovr.com/wp-content/uploads/2019/12/ricks-toilet.jpg",
      "https://images.everyeye.it/img-notizie/adult-swim-festeggia-4-luglio-rick-and-morty-v4-386843-1280x720.jpg",
      "https://es.web.img2.acsta.net/newsv7/19/02/13/15/06/0791856.jpg"
    ]
  },
  methods: {
    nextPic(){
      this.counter++;
      if (this.counter > (this.immagini.length -1)){
        this.counter = 0;
      }
    },
    prevPic(){
      this.counter--;
      if (this.counter < 0){
        this.counter = (this.immagini.length -1);
      }
    },
    clickPic(i){
      this.counter = i;
    }
  }
});
