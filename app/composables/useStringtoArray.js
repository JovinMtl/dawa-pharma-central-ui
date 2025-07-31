

export const useStringtoArray = (strDate)=>{
    strDate =  "['06-2027']"
    
    const one = String(strDate).indexOf('[')
    const oneOff = String(strDate).slice(0, one)
    
    strDate = `${oneOff}`
    return strDate
}