const key='7e3b1b9ec2c72829a8ce1d5fe8e15832';
let degree=0;
const temp=document.querySelector('h1');
const inputCityName=document.querySelector('.search input');
const humidity=document.querySelector('.humidity');
const wind=document.querySelector('.wind');

const icon=document.querySelector('.icon i');

const h2=document.querySelector('h2');
console.dir(h2);




const searchButton=document.querySelector('.search button');
searchButton.addEventListener('click',()=>{
    async function getRequest(){
        const URL=`https://api.openweathermap.org/data/2.5/weather?q=${inputCityName.value}&appid=7e3b1b9ec2c72829a8ce1d5fe8e15832&units=metric`;
console.log(URL);
        
        const response=await fetch(URL);
        if(!response.ok){
            throw new Error()
        }
        const data=await response.json();
        return data;
    }
    
    getRequest().
    then(data=>{
        console.log(data);
        degree=data.main.feels_like;
    
        if(degree<=10)
        {
           icon.classList.replace('fa-cloud-rain','fa-snowflake');
        }
        else if(degree<=20) icon.classList.replace('fa-cloud-rain','fa-smog')

        else if(degree<=30)icon.classList.replace('fa-cloud-rain','fa-sun')
    
        temp.innerHTML=`${degree}°C`;
        h2.textContent=`${inputCityName.value}`;
        console.log(inputCityName.value);
        humidity.innerHTML=`${data.main.humidity}%`;
        wind.innerHTML=`${data.wind.speed}km/hr`

        
        
    })
    .catch(error=>{
        console.log('something went wrong');
    })

})
document.querySelector('.card').addEventListener('keypress',(e)=>{
   if(e.code==='Enter'){
    async function getRequest(){
        const URL=`https://api.openweathermap.org/data/2.5/weather?q=${inputCityName.value}&appid=7e3b1b9ec2c72829a8ce1d5fe8e15832&units=metric`;
console.log(URL);
        
        const response=await fetch(URL);
        if(!response.ok){
            throw new Error()
        }
        const data=await response.json();
        return data;
    }
    
    getRequest().
    then(data=>{
        console.log(data);
        degree=data.main.feels_like;
    
        if(degree<=10)
        {
           icon.classList.replace('fa-cloud-rain','fa-snowflake');
        }
        else if(degree<=20) icon.classList.replace('fa-cloud-rain','fa-smog')

        else if(degree<=30)icon.classList.replace('fa-cloud-rain','fa-sun')
    
        temp.innerHTML=`${degree}°C`;
        h2.textContent=`${inputCityName.value}`;
        console.log(inputCityName.value);
        humidity.innerHTML=`${data.main.humidity}%`;
        wind.innerHTML=`${data.wind.speed}km/hr`

        
        
    })
    .catch(error=>{
        console.log('something went wrong');
    })


   }


})

