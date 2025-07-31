<template>
    <div class="h-det-ctn">
        <div class="detailContn sen">
            <div class="bdy">
                <!-- <h1>{{ pharma?.name_pharma }}</h1> -->
                <table>
                    <caption>
                        <b>
                            {{ med?.nom_med }}
                        </b>
                    </caption>
                    <tr>
                        <td class="ta-r">Prix</td>
                        <td>{{ useReadableNumber(med?.price) }} Fbu</td>
                    </tr>
                    <tr>
                        <td class="ta-r">Validité</td>
                        <td>
                            {{ useRemoveBracket(med?.date_per) }}
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>{{ pharma?.name_pharma }}</td>
                    </tr>
                    <tr>
                        <td class="ta-r">Addresse</td>
                        <td>
                            {{ pharma?.loc_street }}, {{ pharma?.loc_quarter }} <br>
                            {{ pharma?.loc_commune }} / {{ pharma?.loc_Province }}
                        </td>
                    </tr>
                    <!-- <tr>
                        <td>localisation</td>
                        <td>map google</td>
                    </tr> -->
                    <tr>
                        <td class="ta-r">contact</td>
                        <td>{{ pharma?.tel }}</td>
                    </tr>
                    <tr>
                        <td class="ta-r">il ya</td>
                        <td>{{ useTellTime(pharma?.last_connected) }}</td>
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
const props = defineProps(['med', 'pharma'])
const emits = defineEmits(['close'])

console.log("theMed: " + JSON.stringify(props.med))
console.log("thePharma: " + JSON.stringify(props.pharma))

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
    border: 2px solid grey;
    border-radius: 12px;
    /* color: grey; */
    /* padding: 10px; */
}
.ta-r{
    text-align: right;
}
</style>