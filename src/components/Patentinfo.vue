<template>
  <div id="patent-map" class="patent"></div>
</template>

<script>
import gmapsInit from "./../utils/gmaps";
import allCountriesJSON from "./../assets/allCountriesCoordinates.json";
import patentCountriesJSON from "./../assets/patentCountriesCoordinates.geo.json";
//import { connect } from "net";
//import $ from jquery;

export default {
  //name: "patent",
  data() {
    return {
      map: null,
      dataAllCountriesJSON: allCountriesJSON,
      dataPatentCountriesJSON: patentCountriesJSON
    };
  },

  async mounted() {
    this.initMap();
  },

  methods: {
    async initMap() {
      try {
        var google = await gmapsInit();
        //const geocoder = new google.maps.Geocoder();
        this.map = new google.maps.Map(document.getElementById("patent-map"), {
          zoom: 3,
          center: { lat: 41.855404, lng: 20.590247 },
          mapTypeId: google.maps.MapTypeId.TERRAIN
        });

        this.map.data.addGeoJson(patentCountriesJSON);
        this.map.data.setStyle(function(featurestyle) {
          return {
            strokeColor: "#ff9900",
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: "#ffff66",
            fillOpacity: 0.2
          };
        });

        google.maps.event.addListener(this.map, "mouseover", function(e) {
          console.log("sdadasdasda");
          // if (e.feature.getGeometry("type") === "MultiPolygon") {
          //   this.setOptions({ fillOpacity: 0.5 });
          // }
        });
        // google.maps.event.addListener(this.map, "mouseout", function(e) {
        //   if (e.feature.getGeometry("type") === "MultiPolygon") {
        //     this.setOptions({ fillOpacity: 0 });
        //   }
        // });
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
}

.patent {
  width: 80vw;
  height: 80vh;
  margin: 50px;
}
</style>