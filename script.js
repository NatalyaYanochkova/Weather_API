
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?';
const apiKey = '043e529d6bee20cb875b2b178f23dda8';
let city;

$('#getWeather').on('click', (e)=>{
    city = $('#city').val();
    $.ajax(`${baseUrl}q=${city}&appid=${apiKey}&units=metric`,{
            type: 'GET',
            success:data =>{
                getWeather(data);
            },
            error: (err) =>{
                console.log(err)
            }
        }
    ).done(()=>{
        console.log('DONE');
    });
})

function getWeather(data) {
    $('body').append(
        "<h1>" + "Weather in: " + data.name + ", " + data.sys['country'] + "</h1>" +
        "<h3>" + "Temp: " + data.main['temp'] + " degrees</h3>"+
        "<h3>" + "Cloudness: " + data.clouds['all'] + "%</h3>"+
        "<h3>" + "Humidity: " + data.main['humidity'] + "%</h3>"+
        "<h3>" + "Pressure: " + data.main['pressure'] + " Pa</h3>"+
        "<h3>" + "Wind speed: " + data.wind['speed'] + " m/s</h3>");
}

