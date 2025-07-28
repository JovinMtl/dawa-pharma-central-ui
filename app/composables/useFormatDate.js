

export const useFormatDate = (strDate)=>{
    // strDate = "2025-07-22T10:59:19.210770+02:00"
    const day = String(strDate).slice(8, 10)
    const mon = String(strDate).slice(5, 7)
    const year = String(strDate).slice(0, 4)
    strDate = `${day}-${mon}-${year}`
    return strDate
}