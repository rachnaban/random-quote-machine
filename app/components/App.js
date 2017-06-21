var React= require('react');
var api = require('../utils/api');
class GenerateQuote extends React.Component
{
  constructor(props){
    super(props);
    this.state={
      count:0
    };
    this.renderNewQuote=this.renderNewQuote.bind(this);
    this.shareThisQuote= this.shareThisQuote.bind(this);
  }
render(){

    var quoteArray = this.props.quotes;
    return(
            <div className='container'>
                <div className='quote'>{quoteArray[this.state.count].quote}</div>
                <div  className='author'><p>- {quoteArray[this.state.count].author}</p></div>
                <div className='newQuoteContainer'>
                    <div className='newQuote'>
                      <button className='btn-quote' onClick={this.renderNewQuote}>New Quote</button>
                    </div>
                    <div>
                      <button className='btn-tweet' onClick={this.shareThisQuote}>ShareThisQuote</button>
                    </div>   
                </div>
                </div>
          
      );
 
}
shareThisQuote()
{
     var quote  = this.props.quotes[this.state.count];
     var message = encodeURIComponent(quote.quote + " -" + quote.author + " #randomQuote%20#FreeCodeCamp");

     window.location.href = "http://twitter.com/home/?status=" + message;

}
renderNewQuote(){
 
if(this.state.count==9)
{
    this.setState(function () {
      return {
        count: 0,
        
      }
    });
}
else
{
   this.setState(function () {
      return {
        count: this.state.count+1
        
      }
    });
}

}


}
class App extends React.Component
{
	constructor(props){
  super(props);
  this.state = {
     
      quote: [],
    };
this.generateQuote=this.generateQuote.bind(this);
	}
   render(){
    
   	return(
      <div>
      {this.state.quote.length==0
        ?<p>Loading...</p>
        :<GenerateQuote quotes={this.state.quote} onSelect={this.generateQuote}/>}
        </div>
   	);
   }
generateQuote(){
  api.fetchRandomQuotes()
      .then(function (quote) {
    
        this.setState(function () {
          return {
            quote: quote.data
          }
        });
      }.bind(this));
}
   componentDidMount(){ 
      this.generateQuote();
   }

}
module.exports=App;