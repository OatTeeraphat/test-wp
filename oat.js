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
