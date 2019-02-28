console.log("Is he finally getting impeached lets find out ")
var Twit = require('twit')
var config = require('./config.js')
var T = new Twit(config);


var favoriteTweet = function(){
  var params = {
      q: '#impeachtrump, #impeach45, #Trumpresign',
      // q is how you search what # you want to search for this case trade rumors 
      result_type: 'recent', // what category of results you want 
      lang: 'en' // what language you want them in 
  }

  T.get('search/tweets', params, function(err,data){

    // find tweets
    var tweet = data.statuses;
    var randomTweet = ranDom(tweet);   // pick a random tweet

    // if random tweet exists
    if(typeof randomTweet != 'undefined'){
      
      T.post('statuses/retweet', {id: randomTweet.id_str}, function(err, response){
        // if there was an error while 'favorite'
        if(err){
          console.log('Something went wrong try closing twitter or logging out ');
        }
        else{
          console.log('we got some news');
        }
      });
    }
  });
}
// favorite tweet intiates as soon as program starts 
favoriteTweet();
// 'favorite' a tweet i
setInterval(favoriteTweet, 10000);


// get a random tweet
function ranDom (i) {
  var index = Math.floor(Math.random()*i.length);
  return i[index];
};

