var request = require('request');
var cheerio = require('cheerio');

request('http://www.imdb.com/chart/moviemeter', function(err, res, body){
	// identificando erros
	if (err) console.log('Erro: ' +err);

	//pegando body
	var $ = cheerio.load(body);

	$('.lister-list tr').each(function(){

		//pegando as informacoes que interessam

		var title = $(this).find('.titleColumn a').text().trim();
		var rating = $(this).find('.imdRating strong').text().trim();

		console.log('Titulo: ' +title);
		

	});

})