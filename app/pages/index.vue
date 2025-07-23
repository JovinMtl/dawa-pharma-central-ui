<template>
    <main class="fl fl-c">
        <div class="ta-c">
            <span class="sen ">
                <span class="color-title">
                    Rechercher le médicament disponible dans la 
                </span>
                <span class="c-b">Pharmacie Ubuzima</span> .
            </span>
             <br>
            <input class="m-v-5 p-5 ta-c" placeholder="ex: paracetamol" /> <br>
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
