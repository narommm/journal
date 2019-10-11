let date_select = document.querySelector("#date");
let accident_switch = document.querySelector('#accident')
let event_field = document.querySelector('#events')
let submit_btn = document.querySelector('#submit_btn')
let lista_dias;

let table_body = document.querySelector('#table_body')

let addDay = (date,accident,event) =>{
    let new_row = document.createElement('tr')
    
    new_row.className='table-active'
    new_row.innerHTML = `<th scope = 'row'> ${date} </th>
    <td> ${accident} </td>
    <td> ${event} </td>`
    
    table_body.appendChild(new_row)
}

let parseAccidentSwitch = (value) =>{
    if(value){
        return 'Sos salado'
    }
    return 'Tenes leche'
}

submit_btn.addEventListener('click', ()=>{
    // console.log('yes');
    
    let date = date_select.value
    let event = event_field.value
    let eventArray = event.split(',')
    // console.log(eventArray);
    let accident = parseAccidentSwitch(accident_switch.checked)

    var objeto = {
        fecha: date,
        event: eventArray,
        haTenidoAccidente: accident,
    }
    lista_dias.push(objeto);
    console.log(objeto);
    
    

    addDay(date,event,accident)
})
