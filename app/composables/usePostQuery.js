
import { ref } from 'vue'



export const usePostRequest = (url, dataToSend)=>{
    const data = ref(null)
    const makePost = async ()=>{
        try{
            const responsePost = await fetch(url, {
                'method': 'POST',
                'headers': 'json/application',
                'body': JSON.stringify(dataToSend)
            })
            data.value = await responsePost.json()
            if (responsePost.ok){
                
            }
        }catch{
            console.log("Error happened in Get request.")
        }
        
    }
    return [data, makePost]
}