var request = require('request');
var cheerio = require('cheerio');
var fs = require ('fs');

request('http://www.imdb.com/chart/moviemeter', function(err, res, body){
	// identifying errors
	if (err) console.log('Erro: ' +err);

	var $ = cheerio.load(body);

	$('.lister-list tr').each(function(){

		//getting the informations that we want

		var title = $(this).find('.titleColumn a').text().trim();
		var rating = $(this).find('.imdRating strong').text().trim();

		console.log('Titulo: ' +title);

		fs.appendFile('imdb.txt', title + ' ' + rating + '\n');
		

	});

})