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
        
        <form v-on:submit.prevent>
          <input v-model="queryset.query" class="m-5 p-5 ta-c bdr-5 inp-elm" placeholder="ex: paracetamol, ..." /> 
        <span v-show="shortQuery" for="" class="c-r sm-l">Tapez au moins trois lettres</span>
        <br>
          <button type="submit" class="m-" @click="getFirstPage">Rechercher</button>
        </form>
        
        <div class="sen" v-for="(umuti, index) in imiti" :key="index" data-id="index">
          <div v-show="umuti.price" class="umuti-ctn" :class="index%2 ? 'bg-g1':'bg-g2'">
            <div>💊{{ String(umuti.nom_med).slice(0, 30) }} </div>
            <div class="c-w">
              <span>{{ useReadableNumber(umuti.price) }} Fbu</span>;
              <span>jusqu'au {{ useRemoveBracket(umuti.date_per) }}</span>
            </div>
            <div>
              {{ pharmas[umuti.owner]?.name_pharma }} 
              <!-- <span>({{ useFormatDate(pharmas[umuti.owner]?.last_connected) }}). 
              </span> -->
              <span>(il ya {{ useTellTime(pharmas[umuti.owner]?.last_connected) }}). 
              </span>
            </div>
            <div class="btn"  :data-id="index"  @click="turnOnDetails">
              Voir plus
            </div>
          </div>
        </div>
        <section>
          <div>
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
  const index = Number(e.target.getAttribute('data-id'))
  console.log("The index is : " + JSON.stringify(index))
  theMed.value = imiti.value[index]
  thePharma.value = pharmas.value[theMed.value['owner']]

  // console.log("THe med: " + JSON.stringify(theMed.value))
  // console.log("ThePharma: " + JSON.stringify(thePharma.value))
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
</style>
