<template>
    <main class="fl fl-c p-5">
        <div class="ta-c">
            <span class="sen ">
                <span class="color-title">
                    Rechercher le médicament disponible dans la 
                </span>
                <span class="c-b">Pharmacie Ubuzima</span> .
            </span>
             <br>
            <input class="m-v-5 p-5 ta-c bdr-8" placeholder="ex: paracetamol" /> <br>
            <button>Rechercher</button>
        </div>
    </main>
</template>

<script setup lang="ts">
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

</script>
<style scoped>
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
