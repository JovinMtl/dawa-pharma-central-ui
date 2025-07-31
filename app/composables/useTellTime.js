
export const useTellTime = (strDate)=>{
    // strDate = "2025-07-29T10:59:19.210770+02:00"
    const firstDate = new Date(strDate)
    const now = new Date()
    const diff = new Date(now.getTime() - firstDate.getTime())
    
    const day = diff.getDate() - 1
    const hours = diff.getHours()
    const mins = diff.getMinutes()

    if (day == 1){
        strDate = `${day}jour` 
    } else if (day > 1){
        strDate = `${day}jours` 
    } else if (hours){
        strDate = `${hours}h` 
    } else if (hours==0 && mins){
        strDate = `${mins}min` 
    }

    return strDate
}