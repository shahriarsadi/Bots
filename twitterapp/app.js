console.log("Is he finally getting impeached lets find out ")
var Twit = require('twit')
var config = require('./config.js')
var T = new Twit(config);


var favoriteTweet = function(){
  var params = {
      q: '#impeach, #trump',
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
          console.log('we got news ');
        }
        else{
          console.log('oh no somethings wrong');
        }
      });
    }
  });
}
// favorite tweet intiates as soon as program starts 
favoriteTweet();
//every 10 seconds
setInterval(favoriteTweet, 5000);


// get a random tweet
function ranDom (i) {
  var index = Math.floor(Math.random()*i.length);
  return i[index];
};

