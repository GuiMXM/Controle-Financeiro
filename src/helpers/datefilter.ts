import { Item } from "../types/item";

export const getCurrentMonth = () => {
    let now = new Date();
 
    return `${now.getFullYear()}-${now.getMonth()+1}`
}


export const handleFilteredList = (list:Item[],date:string)=>{
    let newList:Item[]=[];

    //Separa os items da string em items de um array, onde p [0] é year, e o month é [1]
    let [year,month] = date.split('-');
    for(let i in list) {
        if(
            list[i].date.getFullYear() === parseInt(year) && list[i].date.getMonth()+1 === parseInt(month)
        ) {
            newList.push(list[i])
            
        } 
        
    }
    return newList;
    
}

export const formatDate = (date:Date):string=> {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    
    return `${day<10 ? '0' + day : day}/${month<10 ? '0' + month : month}/${year}`

}

export const sortByDate = (list:Item[]) => {
    const newList = list
    const sorteredList = newList.sort(function(a, b){return a.date.getDate()-b.date.getDate()})
    return sorteredList        
}
    
export const formatCurrentMonth = (currentMonth:string):string => {
    const [year,month] = currentMonth.split("-");
    let allMonths = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro']

    return `${allMonths[parseInt(month)-1]} de ${year}`
}


export const handleNewDate = (dateField: string) => {
    let [year, month, day] = dateField.split('-')
    return new Date(parseInt(year), parseInt(month) - 1, parseInt(day))
  }