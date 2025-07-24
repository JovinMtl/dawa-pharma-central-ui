
import { ref } from 'vue'

data = ref(null)

export const usePostRequest = (url, dataToSend)=>{
    const makePost = async ()=>{
        try{
            const responsePost = await fetch(url, {
                'method': 'POST',
                'headers': 'json/application',
                'body': JSON.stringify(dataToSend)
            })
            if (responsePost.ok){
                data.value = responsePost.json()
            }
        }catch{
            console.log("Error happened in Get request.")
        }
        
    }
    return [data, makePost]
}