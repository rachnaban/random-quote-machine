var axios=require('axios');

module.exports=
{
fetchRandomQuotes: function(){
	return axios.get('https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous&count=10', {
      headers: { "X-Mashape-Key": "fC5epDHWGpmshI3GLzkEpKXwn402p1kpj6Qjsnvs7CM70O49WU" ,
                  "Accept": "application/json",
                  "Content-Type": "application/x-www-form-urlencoded"
              }
    })
      then(function(response){
return response.data;

});

}
}


