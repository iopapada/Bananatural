<template>
<div class="wrapper">
  <div class="main-wrap">
    <div id="wsite-content" class="wsite-elements wsite-not-footer">
      <div class="wsite-section-wrap">
        <div class="wsite-section wsite-body-section wsite-background-7"  >
          <div class="wsite-section-content">
            <div class="container">
              <div class="wsite-section-elements">
                  <div class="wsite-spacer" style="height:10px;"></div>
                  <div id="patent-map" class="patent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import gmapsInit from "./../utils/gmaps";
import allCountriesJSON from "./../files/assets/allCountriesCoordinates.json";
import patentCountriesJSON from "./../files/assets/patentCountriesCoordinates.geo.json";

export default {
  name: "Patentinfo",
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

        this.countries=this.map.data.addGeoJson(patentCountriesJSON);
        this.map.data.setStyle(function() {
          return {
            strokeColor: "#ff9900",
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: "#ffff66",
            fillOpacity: 0.2
          };
        });
        // google.maps.event.addListener(this.map, "mouseover", function(e) {
        //   if (e.feature.getGeometry("type") === "MultiPolygon") {
        //     this.setOptions({ fillOpacity: 0.5 });
        //   }
        // });
        //let countries = this.map.data
        //console.log(this.countries);
        this.map.data.addListener("mouseover", function(e) {
          this.overrideStyle(e.feature, {fillColor: 'red'});
        });
        this.map.data.addListener("mouseout", function(e) {
          this.overrideStyle(e.feature, {fillColor: '#ffff66'});
        });
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