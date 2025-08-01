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
                        <td class="ta-r">
                            Prix
                            <span class="c-t">_</span>
                        </td>
                        <td class="c-b">
                            <span class="c-t">_</span>
                            <b>{{ useReadableNumber(med?.price) }}</b>
                             Fbu
                        </td>
                    </tr>
                    <tr>
                        <td class="ta-r">
                            Validité
                            <span class="c-t">_</span>
                        </td>
                        <td>
                            <span class="c-t">_</span>
                            {{ useRemoveBracket(med?.date_per) }}
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>{{ pharma?.name_pharma }}</td>
                    </tr>
                    <tr>
                        <td class="ta-r">
                            Addresse
                            <span class="c-t">_</span>
                        </td>
                        <td>
                            <span class="c-t">_</span>
                            {{ pharma?.loc_street }}, {{ pharma?.loc_quarter }} <br>
                            <span class="c-t">_</span>
                            {{ pharma?.loc_commune }} / {{ pharma?.loc_Province }}
                        </td>
                    </tr>
                    <!-- <tr>
                        <td>localisation</td>
                        <td>map google</td>
                    </tr> -->
                    <tr>
                        <td class="ta-r">
                            contact
                            <span class="c-t">_</span>
                        </td>
                        <td>
                            <span class="c-t">_</span>
                            <a class="link" href="tel:+25769332288" 
                                target="_blank"  rel="noopener noreferrer" 
                                title="Vous pouvez nous appeler.">
                                <button>
                                    <b>{{ useReadPhoneNumber(pharma?.tel) }}</b></button>
                                
                            </a>
                            <a href="http://wa.me/+25771357157" target="_blank"  rel="noopener noreferrer" 
                                title="Contacter Pharmacie Ubuzima sur WhatsApp" >
                                <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path fill="currentColor" d="M414.73 97.1A222.14 222.14 0 0 0 256.94 32C134 32 33.92 131.58 33.87 254a220.61 220.61 0 0 0 29.78 111L32 480l118.25-30.87a223.63 223.63 0 0 0 106.6 27h.09c122.93 0 223-99.59 223.06-222A220.18 220.18 0 0 0 414.73 97.1zM256.94 438.66h-.08a185.75 185.75 0 0 1-94.36-25.72l-6.77-4-70.17 18.32 18.73-68.09-4.41-7A183.46 183.46 0 0 1 71.53 254c0-101.73 83.21-184.5 185.48-184.5a185 185 0 0 1 185.33 184.64c-.04 101.74-83.21 184.52-185.4 184.52zm101.69-138.19c-5.57-2.78-33-16.2-38.08-18.05s-8.83-2.78-12.54 2.78-14.4 18-17.65 21.75-6.5 4.16-12.07 1.38-23.54-8.63-44.83-27.53c-16.57-14.71-27.75-32.87-31-38.42s-.35-8.56 2.44-11.32c2.51-2.49 5.57-6.48 8.36-9.72s3.72-5.56 5.57-9.26.93-6.94-.46-9.71-12.54-30.08-17.18-41.19c-4.53-10.82-9.12-9.35-12.54-9.52-3.25-.16-7-.2-10.69-.2a20.53 20.53 0 0 0-14.86 6.94c-5.11 5.56-19.51 19-19.51 46.28s20 53.68 22.76 57.38 39.3 59.73 95.21 83.76a323.11 323.11 0 0 0 31.78 11.68c13.35 4.22 25.5 3.63 35.1 2.2 10.71-1.59 33-13.42 37.63-26.38s4.64-24.06 3.25-26.37-5.11-3.71-10.69-6.48z"/></svg>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td class="ta-r">il ya
                            <span class="c-t">_</span>
                        </td>
                        <td>
                            <span class="c-t">_</span>
                            {{ useTellTime(pharma?.last_connected) }}</td>
                    </tr>
                </table>
            </div>
            <div class="ft" @click="closeDetails">
                <button>
                    Fermer
                </button>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
const props = defineProps(['med', 'pharma'])
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
    border: 4px solid grey;
    border-radius: 12px;
    padding: 5px;
}
.ta-r{
    text-align: right;
    border-right: 1px solid black;
}
.c-t{
    color: transparent;
}
.p-a{
    position: absolute;
}
.an{
    transform: translate(50%, -20%);
    animation: gl 800ms 2s 4 forwards;
}
.ionicon {
    position: absolute;
    transform: translate(50%, 20%);
    animation: gl 800ms 2s 4 forwards;
    color: #25D366;
    width: 40px;
    height: 40px;
}

@keyframes gl {
    0%, 100%{
        scale: 1;
        color: #25D366;
    }
    50%{
        scale: 1.1;
        color: #128C7E; 
    }
}
.link{
    color: inherit;
}
</style>