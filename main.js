//JS18 Inspirational Quotes


// OBJECT AREA //
// CONSTRUCTORS //
//create quotes container and individual constructors

var Quote = function(qText,author,rating){
	this.qText=qText;
	this.author=author;
	this.rating=rating;
};

var QuoteContainer = function(){
	this.content=[];
};


// METHODS //
// addQuote method
QuoteContainer.prototype.addQuote = function(){
	this.content = this.content.concat([].slice.call(arguments));
};
///// END OBJECT DEFS

// FUNCTIONS //
// function to create new single quotes
var newQuote = function(elem){
		var tempText=elem.siblings('.input_text').val();
		var tempAuth=elem.siblings('.input_author').val();
		//console.log(tempText,tempAuth);
		var newQuote = new Quote(tempText,tempAuth,0);
		quotesInTotal.addQuote(newQuote);
		//console.log(quotesInTotal);
		return quotesInTotal;
};

 // function to refresh page after new quotes added
 var pageUpdate = function(elem){
		var updateText = quotesInTotal.content[quotesInTotal.content.length-1].qText;
		var updateAuth = quotesInTotal.content[quotesInTotal.content.length-1].author;
	 	$('.quote_list').append('<div id><p class="quote_text">'+updateText+'</p>');
	 	$('.quote_list').append('<div id><p class="quote_author">'+"-"+updateAuth+'</p>');
 		elem.siblings('.input_text').val('');
 		elem.siblings('.input_author').val('');

 };

// Page form for data entry
var pageForm = function(){
	this.$el=$('#data_entry_form').clone().attr('id','');
	this.$el.add('<div>').addClass('form');
	this.$el.find('.input_text').attr('placeholder',"Add Quote Text Here");
	this.$el.find('.input_author').attr('placeholder',"Add Author Name");
	//console.log("here");
	return this.$el;
};

// star rating system
var ratings = function() {

};

////////////
////////////

// OBJECT METHODS

// render quotes to page
Quote.prototype.render = function(){
	this.$el=$('#indiv_quote').clone().attr('id','');
	this.$el.find('.quote_text').text(this.qText);
	this.$el.find('.author').text("-"+this.author);
	return this.$el;
};


// render quoteContainer to page
 QuoteContainer.prototype.render = function(){
 	this.$el=$('#quote_container').clone().attr('id','');

	this.$el.find('.quote_list').empty().append(
		this.content.map(function(quote){
			return quote.render();
		})
	);
 	return this.$el;
 };

 // 



// testing
var linaL = new Quote(
	"I gave an Exclusive to every paper in town!",
	"Lina LaMont",
	3 );
var daveM = new Quote(
	"My love for you, unlike this hamster ...",
	"Dave Milito",
	1 );
var emmaM = new Quote(
	"Hahahahahahahahahaha. Snort.",
	"Emma Milito",
	5 );
var roadRunner = new Quote(
	"Meep Meep",
	"Road Runner",
	4 );


var quotesInTotal = new QuoteContainer();
quotesInTotal.addQuote(linaL,daveM,emmaM,roadRunner);


$(document).on('ready', function() {
	$('body').append(quotesInTotal.render());
		$('body').append(pageForm());

	$('.btn').on('click',function(){
		newQuote($(this));
		
		pageUpdate($(this));
		
	});








  
}); // jQuery