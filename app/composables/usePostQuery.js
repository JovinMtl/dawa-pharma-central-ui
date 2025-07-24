
import { ref } from 'vue'



export const usePostRequest = (url, dataToSend)=>{
    const data = ref(null)
    const makePost = async ()=>{
        try{
            const responsePost = await fetch(remoteURL + url, {
                'method': 'POST',
                headers: {
                    "Content-type": "application/json",
                },
                'body': JSON.stringify({
                    'query': dataToSend
                })
            })
            data.value = await responsePost.json()
            if (responsePost.ok){
                
            }
        }catch{
            console.log("Error happened in Post request.")
        }
        
    }
    return [data, makePost]
}