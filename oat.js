/*function x(){
	// calculate sth...
  setTimeout(function(){

    return 123;
  }, 500)
  //return 123;
 }

 result = x()
 alert(result)

 */

 var app = {
 	get: function(path, cb){
  	if(path==='/oat') {
    	var res = {
      	send: function(text){
        	console.log(text)
        }
      }
    	cb(null, res);
		}
  }
 }

 // query Mongo
 var doSmallWork = function(input, cb){
 	setTimeout(function(){
  	cb(++input)
   }, 500);
 }



 // Express
 app.get('/oat', function(req, res){
 	var input = 0;

  for(var i=0; i<3; i++){
  	doSmallWork(input, function(result){
    	console.log(result)
    })
  }

  /*doHardWork(input, function(result){
  	res.send(result);
    doSmallWork(result, res.send)
  })*/

  /*doSmallWork(input, function(result){
  	res.send(result)
  	doSmallWork(result, function(result){
    	res.send(result)
    	doSmallWork(result, res.send)
    })
  })*/
})


PublisherService = {
	getPubByPub_id: function(Pub_id, cb){
  	Publishers.findById(Pub_id).populate('columns').exec(cb);
  }
}

PublisherService.getPubByPub_id(Pub_id, function(err, pub){
	if(!err) res.json(pub)
})
