console.log('client side javascript loaded!!')
fetch('http://localhost:3000/weather?address=boston').then(function(response){
    response.json().then(function(data){
        console.log(data);
    })
});
