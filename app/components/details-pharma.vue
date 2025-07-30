<template>
    <div class="h-det-ctn">
        <div class="detailContn">
            <div class="bdy">
                <h1>PharmacieUbuzima</h1>
                <table>
                    <tr>
                        <td>Prix</td>
                        <td>1900</td>
                    </tr>
                    <tr>
                        <td>Valide</td>
                        <td>02-2028</td>
                    </tr>
                    <tr>
                        <td>Address</td>
                        <td>13av Twinyoni, Kamenge</td>
                    </tr>
                    <tr>
                        <td>localisation</td>
                        <td>map google</td>
                    </tr>
                    <tr>
                        <td>contact</td>
                        <td>930099293</td>
                    </tr>
                    <tr>
                        <td>il ya</td>
                        <td>12min</td>
                    </tr>
                </table>
            </div>
            <div class="ft" @click="closeDetails">
                <button>Ok</button>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
const emits = defineEmits(['close'])

const closeDetails = ()=>{
    emits('close')
}
</script>
<style scoped>
.bdy{
    width: 100%;
    height: 90%;
    line-height: 1.8rem;
}
.ft{
    width: 100%;
    height: 8%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
}
.h-det-ctn{
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    position: absolute;
    justify-content: center;
    align-content: center;
}
.detailContn{
    max-width: 300px;
    max-height: 450px;
    background-color: white;
    position: relative;
    /* padding: 10px; */
}
</style>