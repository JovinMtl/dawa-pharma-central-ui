<template>
    <main class="pge-setup fl fl-c p-5">
      <jove-loader v-if="showLoader"></jove-loader>
      <div class="ta-c pge-2-set">
        <h1 class="sen ">
            <span class="color-title">
                Trouver le médicament disponible dans la 
            </span>
            <span class="c-b">Pharmacie Ubuzima</span> .
        </h1>
        <input class="m-5 p-5 ta-c bdr-5" placeholder="ex: paracetamol, ..." /> <br>
        <button class="m-5" @click="getFirstPage">Rechercher</button>
        <div class="sen" v-for="(umuti, index) in imiti" :key="index">
          <div class="umuti-ctn" :class="index%2 ? 'bg-g1':'bg-g2'">
            <div>{{ String(umuti.nom_med).slice(0, 30) }} </div>
            <div class="c-w">
              <span>{{ umuti.price }} Fbu</span>;
              <span>{{ umuti.date_per }}</span>
            </div>
            <div>{{ pharmas[umuti.owner]?.name_pharma }} </div>
          </div>
        </div>
        <section>
          <div>
            <label for="">Page</label>
            <button>Precedent</button>
            {{queryset.page}}/{{ queryset.maxPage }}
            <button>Suivant</button>

          </div>
        </section>
      </div>
    </main>
</template>

<script setup lang="ts">
const showLoader = ref(false)
const pharmas = ref({})
const queryset = reactive({
  'page': 1,
  'query': '',
  'maxPage': 1,
})

const url_get_pharmas = 'api/gOps/get_pharmas/'
const [responsePharmas, getPharmas] =useGetRequest(url_get_pharmas)

getPharmas()

const url_post_query = 'api/gOps/search_meds_public/'
const [responsePost, sendPostRequest] = usePostRequest(url_post_query, queryset)

const imiti = ref([
  {
    'nom_med': 'meddjfajdfkljalfjdkfjs1',
    'price': 1800,
    'owner': 1,
    'date_per': "2028"
  },
  {
    'nom_med': 'medmeddjfajdfkljalfjdkfjs2',
    'price': 2800,
    'owner': 1,
    'date_per': "2028"
  },
  {
    'nom_med': 'medmeddjfajdfkljalfjdkfjs3',
    'price': 1200,
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
    }
  ],
  title: 'Pharmacie Ubuzima - Recherchez les médicaments disponibles - Kamenge, Bujumbura, Burundi',
  meta: [
    { name: 'description', content: 'Trouvez facilement les médicaments en stock à la Pharmacie Ubuzima. #medicament #sante #Kamenge #Bujumbura #Burundi' },
    { name: 'robots', content: 'index, follow' },
  ]
})

// Functions
const getSpePage = ()=>{}
const getFirstPage = ()=>{
  // should receive: 
  // number of pages; pageNumber; the results
  queryset.page = 1;
  sendPostRequest();
}
const getPrevPage = ()=>{
  if(queryset.page >= 2){
    queryset.page -= 1;
    sendPostRequest();
  }
}
const getNextPage = ()=>{
  queryset.page += 1;
  sendPostRequest()
}
const searchF = ()=>{
  showLoader.value = true;
  setTimeout(()=>{
    showLoader.value = false
  }, 3000)
}

//Watchers
watch(responsePharmas, (value)=>{
  console.log("There is a change regarding pharmas: " 
      + JSON.stringify(value))
  pharmas.value = value?.response;
})
</script>
<style scoped>
.pge-setup{
  width: 100%;
  height: 95vh;
}
.pge-2-set{
  width: 100%;
  height: 95vh;
  padding: 5px;
}
.sen{
    font-family: Sen;
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
