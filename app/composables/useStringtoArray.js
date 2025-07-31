

export const useRemoveBracket = (strDate)=>{
    strDate =  "['06-2027']"

    strDate = String(strDate).replaceAll("'",'')
    strDate = String(strDate).replaceAll("[",'')
    strDate = String(strDate).replaceAll("]",'')

    return strDate
}