<template>
  <div class="muteBg">
    <NuxtPage />
    <footer>
      <!-- <div class="ta-c sen">Pharmacie Ubuzima</div> -->
      <div class="ta-c sen sm-l bg-foo">
        ©{{ year }}, Pharmacie Ubuzima <br>
        Développé par 
        <a href="https://nsanzumukiza.netlify.app/" target="_blank"  rel="noopener noreferrer" >
          NSANZUMUKIZA
        </a>Thierry.
      </div>
    </footer>
  </div>
</template>
<script setup lang="ts">
const year:string = (String(new Date())).slice(11, 15);
</script>
<style scoped>

.muteBg{
    background-color: #f8f8f88a;
    --bg-c: #f8f8f817;
    --c1: #5e5c5a13;
    background-image:  linear-gradient(var(--c1) 2px, transparent 2px), linear-gradient(90deg, var(--c1) 2px, transparent 2px), linear-gradient(var(--c1) 1px, transparent 1px), linear-gradient(90deg, var(--c1) 1px, var(--bg-c) 1px);
    background-size: 50px 50px, 50px 50px, 10px 10px, 10px 10px;
    background-position: -2px -2px, -2px -2px, -1px -1px, -1px -1px;
    padding: 0;
}
footer{
  overflow: auto;
}
</style>
