
// https://jsonplaceholder.typicode.com/users/1
// https://api.qantas.com/flight/routesearch/v1/airports/LAX?queryTo=SAN

const fetchData = async(url,params) => {

let fetchUrl = new URL(url)
if (Object.keys(params).length > 0 ){
    Object.keys(params).forEach(key => fetchUrl.searchParams.append(key, params[key]))
}
 
 return await fetch(fetchUrl)
    .then((res) => res.json())
    .then((res) => {

        console.log(res)
        console.log(res.airports)
        
        // for (let index = 0; index < array.length; index++) {
        //     const element = array[index];
            
        // }

        
        
        // document.getElementById("city-name").innerHTML = variable.code
        var variable = res.airports;
        for (let index = 0; index < res.airports.length; index++) {
            var variable = res.airports[index];
            templateCreate(variable.code,variable.name)
            // document.getElementById("city-name").innerHTML = variable.code
            
        }
    })

    // .then((res) => console.log(res.airports[0].city))

    // .then((res) => {
    //     setTimeout(()=>{
    //         console.log("time out")
    // },3000)
    //     return {
    //         message : 'Airports ',
    //         data    : res.city
    //     }
    // })
   
    
}

const depature = document.getElementById('depature');
const arrival = 'SAN'

// main trigger method
const onButtonClick = async(arrival)=>{
    const url = 'https://api.qantas.com/flight/routesearch/v1/airports/LAX'
    const params ={queryTo:'SAN'}
    const data = await fetchData(url, params)
    console.log(data)
       
}


function display(objectData){
    const obj = J
    document.getElementById('output').innerHTML = stringfyobjectData//.airports[5].country.code + ' , ' + objectData.airports[5].country.name;
}


const templateCreate = (index,code,city)=>{
    let indexs = index;
    const newElement = document.createElement("div")
    newElement.classList.add('card');

    let text = ` 
            
            <h4 class = "city-name"> ${code} </h4>
            <h6 class = "city-name">${indexs}</h6>
            
        `;
    document.getElementById("city-code").appendChild(newElement);
    newElement.innerHTML = text;
}




// Selections


