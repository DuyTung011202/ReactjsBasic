let btn_submit1 = document.querySelector('#btn__submit-1');
let btn_submit2 = document.querySelector('#btn__submit-2')
btn_submit1.onclick = () => {
    let latitude = document.querySelector('#lat').value;
    let longtitude = document.querySelector('#lon').value;
    let humidity = document.querySelector('#humidity');
    let location = document.querySelector('#location-result');
    let temperature = document.querySelector('#temperature');
    let visibility = document.querySelector('#visibility');
    console.log(latitude, longtitude);
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longtitude}&appid=148127ed5794091e955075f6b0686a84`)
        .then((data) => {
            console.log(data);
            location.innerHTML = "Khu vực: " + data.data.name + ", " + data.data.sys.country
            humidity.innerHTML = data.data.main.humidity + "%"
            temperature.innerHTML = (data.data.main.temp - 273.15).toFixed(2) + "&degC";
            visibility.innerHTML = data.data.visibility + "km"
        })
}

btn_submit2.onclick = () => {
    let location_input = document.querySelector('#location-input').value
    let humidity = document.querySelector('#humidity');
    let location_result = document.querySelector('#location-result');
    let temperature = document.querySelector('#temperature');
    let visibility = document.querySelector('#visibility');
    axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${location_input}&appid=148127ed5794091e955075f6b0686a84`)
        .then((data) => {
            let latitude = data.data[0].lat
            let longtitude = data.data[0].lon
            return axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longtitude}&appid=148127ed5794091e955075f6b0686a84`)
        })
        .then((data) => {
            location_result.innerHTML = "Khu vực: " + data.data.name + ", " + data.data.sys.country
            humidity.innerHTML = data.data.main.humidity + "%"
            temperature.innerHTML = (data.data.main.temp - 273.15).toFixed(2) + "&degC";
            visibility.innerHTML = data.data.visibility + "km"

        })
        .catch(() => {
            alert("API error")
        })
}