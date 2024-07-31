

   const apikey="8ea472cc1c60485cd79b98e4057b3079";
   const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

   const searchbox=document.querySelector(".search input");
   const searchbtn=document.querySelector(".search button");
   const weathericon=document.querySelector(".weather-icon");

   async function cheackweather(city){
 
      const response=await fetch(apiurl + city +`&appid=${apikey}`);
    //   var data = await response.json();

      if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
      }
      else{
        var data = await response.json();
      }


      console.log(data);

      document.querySelector(".city").innerHTML=data.name;
      document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+ "°C";
      document.querySelector(".humidity").innerHTML=data.main.humidity +"%"; 
      document.querySelector(".Wind").innerHTML=data.wind.speed+" km/h"; 

      if(data.weather[0].main == 'Clouds'){
        weathericon.src="/images/clouds-removebg-preview.png"
      }
      else if(data.weather[0].main == 'Clear'){
        weathericon.src="/images/sun-removebg-preview.png"
      }
      else if(data.weather[0].main == 'Rain'){
        weathericon.src="/images/monsoon-rainy-season-background_51543-657-removebg-preview.png"
      }
      else if(data.weather[0].main == 'Drizzle'){
        weathericon.src="/images/druzzle-removebg-preview.png"  
   }
   else if(data.weather[0].main == 'Mist'){
        weathericon.src="/images/mist-removebg-preview.png" 
   }
   else if(data.weather[0].main == 'Haze'){
        weathericon.src="/images/haze-removebg-preview.png" 
}

   document.querySelector(".weather").style.display="block";
   document.querySelector(".error").style.display="none";
   }
   

   searchbtn.addEventListener("click", ()=>{
    cheackweather(searchbox.value);
   })



