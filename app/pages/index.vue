<template>
    <main class="pge-setup fl fl-c p-5" style="margin: 0; padding: 0;">
      <jove-loader v-if="showLoader"></jove-loader>
      <detailsPharma v-if="showDetails" 
        @close="turnOffDetails"
        :med="theMed"
        :pharma="thePharma">
      </detailsPharma>
      <div class="ta-c pge-2-set">
        <h1 class="sen ">
            <span class="color-title">
                Trouver le médicament disponible dans la 
            </span>
            <span class="c-b">Pharmacie Ubuzima</span> .
        </h1><br>
        <section id="addre" class="addr">
          <span>13Av. Twinyoni, Kamenge - Ntahangwa - Bujumbura</span> <br>
          <span>
            69 332 288
            <a href="http://wa.me/+25771357157" target="_blank"  rel="noopener noreferrer" 
              title="Contacter Pharmacie Ubuzima sur WhatsApp" >
              <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512">
                <path fill="currentColor" d="M414.73 97.1A222.14 222.14 0 0 0 256.94 32C134 32 33.92 131.58 33.87 254a220.61 220.61 0 0 0 29.78 111L32 480l118.25-30.87a223.63 223.63 0 0 0 106.6 27h.09c122.93 0 223-99.59 223.06-222A220.18 220.18 0 0 0 414.73 97.1zM256.94 438.66h-.08a185.75 185.75 0 0 1-94.36-25.72l-6.77-4-70.17 18.32 18.73-68.09-4.41-7A183.46 183.46 0 0 1 71.53 254c0-101.73 83.21-184.5 185.48-184.5a185 185 0 0 1 185.33 184.64c-.04 101.74-83.21 184.52-185.4 184.52zm101.69-138.19c-5.57-2.78-33-16.2-38.08-18.05s-8.83-2.78-12.54 2.78-14.4 18-17.65 21.75-6.5 4.16-12.07 1.38-23.54-8.63-44.83-27.53c-16.57-14.71-27.75-32.87-31-38.42s-.35-8.56 2.44-11.32c2.51-2.49 5.57-6.48 8.36-9.72s3.72-5.56 5.57-9.26.93-6.94-.46-9.71-12.54-30.08-17.18-41.19c-4.53-10.82-9.12-9.35-12.54-9.52-3.25-.16-7-.2-10.69-.2a20.53 20.53 0 0 0-14.86 6.94c-5.11 5.56-19.51 19-19.51 46.28s20 53.68 22.76 57.38 39.3 59.73 95.21 83.76a323.11 323.11 0 0 0 31.78 11.68c13.35 4.22 25.5 3.63 35.1 2.2 10.71-1.59 33-13.42 37.63-26.38s4.64-24.06 3.25-26.37-5.11-3.71-10.69-6.48z"/></svg>
            </a>
          </span>
          
        </section>
        
        <form v-on:submit.prevent>
          <input v-model="queryset.query" class="m-5 p-5 ta-c bdr-5 inp-elm" placeholder="ex: paracetamol, ..." /> 
        <span v-show="shortQuery" for="" class="c-r sm-l">Tapez au moins trois lettres</span>
        <br>
          <button type="submit" class="m-" @click="getFirstPage">Rechercher</button>
        </form>
        
        <div class="sen" v-for="(umuti, index) in imiti" :key="index" data-id="index">
          <div v-show="umuti.price" class="umuti-ctn" :class="index%2 ? 'bg-g1':'bg-g2'"  :data-id="index"  @click="turnOnDetails">
            <div>💊{{ String(umuti.nom_med).slice(0, 30) }} </div>
            <div class="c-w">
              <span v-if="pharmas[umuti.owner]?.name_pharma == 'PharmacieUbuzima'">
                {{ useReadableNumber(umuti.price) }} Fbu
              </span> 
              <span class="hide-price" v-else>
                ... Fbu
              </span>;
              <span>jusqu'au {{ useRemoveBracket(umuti.date_per) }}</span>
            </div>
            <div>
              {{ pharmas[umuti.owner]?.name_pharma }} 
              <!-- <span>({{ useFormatDate(pharmas[umuti.owner]?.last_connected) }}). 
              </span> -->
              <span>(il ya {{ useTellTime(pharmas[umuti.owner]?.last_connected) }}). 
              </span>
            </div>
            <div class="btn">
              Voir plus
            </div>
          </div>
        </div>
        <section>
          <div v-show="toValue(imiti)?.length > 1">
            <button @click="getPrevPage">Précédente</button>
            {{page}}/{{ maxPage }}
            <button @click="getNextPage">Suivante</button>
          </div>
        </section>
      </div>
    </main>
</template>

<script setup lang="ts">
import { useTellTime } from '~/composables/useTellTime'

const showLoader = ref(false)
const pharmas = ref({})
const queryset = reactive({
  'page': 1,
  'query': '',
})
const page = ref(1)
const maxPage = ref(1)
const shortQuery = ref(false)
const cachedResults = reactive({
  0: null,
})
const showDetails = ref(false)
const theMed = ref({})
const thePharma = ref({})

const url_get_pharmas = 'api/gOps/get_pharmas/'
const [responsePharmas, getPharmas] =useGetRequest(url_get_pharmas)

getPharmas()

const url_post_query = 'api/gOps/search_meds_public/'
const [responseQuery, sendPostRequest] = usePostRequest(url_post_query, queryset)

const imiti = ref([
  {
    'nom_med': 'nom du médicament',
    'price': 0,
    'owner': 1,
    'date_per': "2028"
  },
  
])

useHead({
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Sen:wght@400..800&display=swap'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@400&display=swap'
    }
  ],
  title: 'Pharmacie Ubuzima - Recherchez les médicaments disponibles - Kamenge, Bujumbura, Burundi',
  meta: [
    { name: 'description', content: 'Trouvez facilement les médicaments en stock à la Pharmacie Ubuzima. #medicament #sante #Kamenge #Bujumbura #Burundi' },
    { name: 'robots', content: 'index, follow' },
  ]
})

// Functions
const turnOffDetails = ()=>{
  showDetails.value = false;
}
const turnOnDetails = (e:Event)=>{
  const index = Number(e.target.parentNode.getAttribute('data-id'))
  console.log("The index is : " + JSON.stringify(index))
  theMed.value = imiti.value[index]
  thePharma.value = pharmas.value[theMed.value['owner']]

  showDetails.value = true;
}
// const getSpePage = ()=>{}
const getFirstPage = ()=>{
  if (String(queryset.query).length < 3){
    shortQuery.value = true;
    setTimeout(()=>{
      shortQuery.value = false;
    }, 3000)
    return
  }
  cachedResults.value = {}
  showLoader.value = true;
  queryset.page = 1;
  sendPostRequest();
}
const getPrevPage = ()=>{
  if(queryset.page >= 2){
    queryset.page -= 1;
    if (cachedResults[queryset.page]){
      imiti.value = cachedResults[queryset.page];
      page.value = queryset.page;
      return
    }
    showLoader.value = true;
    sendPostRequest();
  }
}
const getNextPage = ()=>{
  if (page.value < maxPage.value){
    queryset.page += 1;
    if (cachedResults[queryset.page]){
      imiti.value = cachedResults[queryset.page];
      page.value = queryset.page;
      return
    }
    showLoader.value = true;
    sendPostRequest()
  } else{
    return
  }
  
}

//Watchers
watch(responseQuery, (value)=>{
  if(value?.response){
    page.value = value?.page;
    showLoader.value = false;
    cachedResults[page.value] = value?.response;
    imiti.value = value?.response;
    maxPage.value = value?.max_page;
  }
})
watch(responsePharmas, (value)=>{
  pharmas.value = value?.response;
})
</script>
<style scoped>
.pge-setup{
  width: 100%;
  height: 94vh;
  margin: 0;
}
.pge-2-set{
  width: 100%;
  height: 94vh;
  padding: 5px;
  /* overflow: auto; */
  overflow-y: auto;
}
.color-title{
    background: linear-gradient(to right, rgb(0, 128, 107),rgb(11, 102, 11));
    background-clip: text;
    -webkit-text-fill-color: transparent;
}
.c-b{
    color: blue;
}
.hide-price{
  /* background: linear-gradient(to right, red, blue); */
  background-color: black;
  /* background-clip: text;
  -webkit-text-fill-color: transparent; */
  border-radius: 4px;
  padding-left: 4px;
}
.bl-2{
    filter: blur(1px);
}
.ionicon {
    /* position: absolute; */
    transform: translate(50%, 20%);
    animation: gl 800ms 2s 4 forwards;
    color: #09702f;
    width: 40px;
    height: 40px;
}
#addre{
  margin-top: -0.5rem;
  margin-bottom: 1rem;
}
.addr{
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                  color: #09702f; color: #786;

}

@keyframes gl {
    0%, 100%{
        scale: 1;
        color: #4d8c12;
    }
    50%{
        scale: 1.1;
        color: #000; 
    }
}
</style>
