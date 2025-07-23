<template>
  <div class="muteBg">
    <!-- <NuxtRouteAnnouncer /> -->
    <!-- <NuxtWelcome /> -->
    <NuxtPage />
    <footer>
      <div class="ta-c">Pharmacie Ubuzima</div>
    </footer>
  </div>
</template>
<style scoped>

.muteBg{
    background-color: #f8f8f88a;
    --bg-c: #f8f8f817;
    --c1: #5e5c5a13;
    background-image:  linear-gradient(var(--c1) 2px, transparent 2px), linear-gradient(90deg, var(--c1) 2px, transparent 2px), linear-gradient(var(--c1) 1px, transparent 1px), linear-gradient(90deg, var(--c1) 1px, var(--bg-c) 1px);
    background-size: 50px 50px, 50px 50px, 10px 10px, 10px 10px;
    background-position: -2px -2px, -2px -2px, -1px -1px, -1px -1px;
    /* position: relative; */
    /* z-index: -3; */
    /* margin-top: -1rem; */
    /* padding-top: 1.1rem; */
    /* padding-top: 20px; */
}
</style>
