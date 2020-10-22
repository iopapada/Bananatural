<template>
<div class="wrapper">
  <div class="main-wrap">
      <div class="wsite-spacer" style="height:10px;"></div>
      <h2 class="wsite-content-title" style="text-align:center;">
        <font color="#78a163">Our patent progress in Europe<br />&#8203;and other countries across the world.</font>
      </h2>
      <div id="filters-map" class="filters-continents">
        <ul>
          <li
              v-for="(continent, index) in continentFilters"
              :key="index"
              @mouseover="$event.currentTarget.style.background = '#999'"
              @mouseleave="$event.currentTarget.style.background = '#ddd'"
          >
            <input 
              type="checkbox" 
              :value=continent.name 
              :id=continent.name
              :checked=continent.checked
              :disabled="continent.checked.length > 0"
              v-model="continent.checked"
              @change="filtersAction($event)"
            >
            <label :for="continent.name">{{continent.name}} {{continent.cnt}}</label>
          </li>
        </ul>
      </div>
      <table class="wsite-multicol-table">
      <tbody class="wsite-multicol-tbody">

      <tr>
        <td>      
          <div id="patent-map" class="patent-map-countries"></div>
        </td>
        <td style="width:200px; height:100%; background:#ddd;">      
          <div id="countries-list" class="patent-countries-list">
            <ul>
              <li v-for="(country, index) in countriesList"
              :key="index"
              >
              {{country.properties.name}}
              </li>
            </ul>
          </div>
        </td> 

      </tr>
      </tbody>
      </table>     
     </div>     
</div>
</template>

<script>
import gmapsInit from "./../utils/gmaps";
//import allCountriesJSON from "./../files/assets/allCountriesCoordinates.geo.json";
import patentCountriesJSON from "./../files/assets/patentCountriesCoordinates.geo.json";

export default {
  name: "Patentinfo",
  data() {
    return {
      map: null,
      //dataAllCountriesJSON: allCountriesJSON,
      dataPatentCountriesJSON: patentCountriesJSON,
      continentFilters: [],
      countriesList: patentCountriesJSON.features
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
        //console.log(dataPatentCountriesJSON.features.properties.name);
        this.map.data.setStyle(function() {
          return {
            strokeColor: "#ff9900",
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: "#ffff66",
            fillOpacity: 0.2
          };
        });
        
        this.map.data.addListener("mouseover", function(e) {
          this.overrideStyle(e.feature, {fillColor: 'red'});
        });
        this.map.data.addListener("mouseout", function(e) {
          this.overrideStyle(e.feature, {fillColor: '#ffff66'});
        });

        this.sortedCountries();
        this.continentFilters=this.populateFilters();

      } catch (error) {
        console.error(error);
      }
    },

    sortedCountries(){
      this.dataPatentCountriesJSON.features.sort(function(a, b){
          a = a.properties.name.toLowerCase();
          b = b.properties.name.toLowerCase();
          return (a < b) ? -1 : (a > b) ? 1 : 0;
      });
    },

    populateFilters(){
      let data = this.dataPatentCountriesJSON.features;
      let uniqueNames = [];
      let populatedContinents = [];
      for(let i = 0; i< data.length; i++){    
          if(uniqueNames.indexOf(data[i].properties.continent) === -1){
              uniqueNames.push(data[i].properties.continent);        
          }        
      }
      //console.log(uniqueNames);
      populatedContinents.push({name:'All',cnt:data.length,checked:true})
      for(let j = 0; j< uniqueNames.length; j++){    
        populatedContinents.push({name:uniqueNames[j],
        cnt:data.filter(function(it) { return it.properties.continent == uniqueNames[j] }).length,
        checked:false
        });        
      }
      //console.log(populatedContinents);
      return populatedContinents;
    },

    filtersAction(e) {
      let currentFilter = document.getElementById(e.srcElement.id);
      //implement mutual exclusive selected checkbox
      for(let i = 0; i<this.continentFilters.length; i++){
        if(this.continentFilters[i].name!==currentFilter.id){
          this.continentFilters[i].checked=false;
        }
      }
      //Load countries
      if(currentFilter.checked && (currentFilter.id=="All")){
        this.countriesList=this.dataPatentCountriesJSON.features
      }
      else{
        this.countriesList=[];
        for(let i = 1; i<this.continentFilters.length; i++){
          let filt = this.continentFilters[i]
          if(filt.checked){
            let x = this.dataPatentCountriesJSON.features.filter(it => it.properties.continent == filt.name);
            this.countriesList=x;
          }
        }
      }
    }
  },

  computed: {
    
  }
};
</script>

<style lang="scss">
.patent-map-countries {
  height: 45vh;
}
.filters-continents{
  ul {
    display: flex;
    height: 100%;
    align-items: center;
    margin-block-start: 0;
    margin-block-end: 0;
    padding-inline-start: 0;
    background: #ddd;
    
    li {
        list-style-type: none;
        padding: 10px 20px;
    }

    li, input, label{
      cursor: pointer;
    }
  }
}
.patent-countries-list{
  //background: #ddd;
  ul{
    height:400px;
    overflow:hidden; 
    overflow-y:scroll;
    border: #999;
  }
}
</style>