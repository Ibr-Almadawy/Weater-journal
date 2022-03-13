/* Global Variables */

const btn = document.getElementById('generate');

// Personal API Key for OpenWeatherMap API//

const apiKey = ',us&appid=481e70e53e565199805eddeb6d053111&units=imperial';

// OpenWeatherMap.org url//

const owmUrl = 'https://api.openweathermap.org/data/2.5/weather?zip=';

// Create a new date instance dynamically with JS//

const month = ["January","February","March","April","May",
"June","July","August","September","October","November","December"];
let d = new Date();
let newDate = month[d.getMonth()]+'.'+ d.getDate()+'.'+ d.getFullYear();


//Define the client side 'GET' function//

    const getServerData = async (ul)=>{
        const getData = await fetch(ul);
        try{
            const serverData = await getData.json();
            return serverData;
        }catch(error){
            console.log("there is no data",error);
        }
    };

//Define the API fetching data function//

    const fetchingAPI = async (url,key,obj)=>{
        const zip = document.getElementById('zip').value;
        const loadedData =await fetch(url+zip+key)
        try{
            const data = await loadedData.json();       
            obj.temp =data.main.temp;
            obj.date =newDate;
            obj.content = document.getElementById('feelings').value;
            obj.name = data.name;
            return obj ;
        }catch(error){
            console.log('Error : zip code not valid :',error);
        }
    };

    //Define the client side 'POST' function//
    
    const postToServer = async (url,data)=>{
        const res = await fetch(url,{
            method:'POST',
            credentials:'same-origin',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        })
        try{
            const recData =await res.json();
            console.log(recData);
            return recData;
        }catch(error){
            console.log('Error :',error);
        }
    };

    //Define the UI update function //
    const updateUI = async (url)=>{
        const res = await fetch(url)
        try{
            const temp =document.getElementById('temp');
            const date =document.getElementById('date');
            const content =document.getElementById('content');
            const zip = document.getElementById('zip').value;
            const title = document.querySelector('.title');
            temp.innerText='';
            date.innerText='';
            content.innerText='';
            title.innerText='';
            const myData = await res.json();
            if (!myData.temp){
                const title = document.querySelector('.title');
                title.innerText= 'Not valid zipcode';
                return 0;
            }
            temp.innerHTML += `Temperature is :<b style ="color:yellow;font-size:1.5em"> ${await Math.round(myData.temp)}</b> degree.`;
            date.innerText = `Date : ${newDate}`;
            content.innerText = await myData.content;
            title.innerText = `${await myData.name} (${zip})`;
        }catch(error){
             console.log('Error :',error)
        }
    };

// Define the event callback function //

    function evntCallback(){
        const func = new Promise (function(resolve,reject){
            resolve(getServerData('/sData'));
             })
           func.then((result)=>{
            return fetchingAPI(owmUrl,apiKey,result);
            }).then((data)=>{
                postToServer('/rData',data);
                updateUI('/Data');
            }) 
    };
    
// Execuction of the click button event//

btn.addEventListener('click',evntCallback);

