
import { ref } from 'vue'




export const useGetRequest = (url)=>{
    const data = ref(null)
    const requestGet = async ()=>{
        try{
            const responsePost = await fetch(remoteURL + url)
            data.value = await responsePost.json()
            if (responsePost.ok){
                // make a store to good
            }else{
                // make store to bad
            }
        }catch{
            console.log("Error happened in Get request.")
        }
        
    }
    return [data, requestGet]
}