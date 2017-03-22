// array of global variables
module.exports = {
	//mongodb connection
    db: 'mongodb://Yanghwa:wjdfmd8412@ds145639.mlab.com:45639/junghwandb',	
    //facebook auth
    facebook: {
    	clientID: '195980897527589',
    	clientSecret: '3798aeb2082a82c30872049d2e1e32fb',
    	// callbackURL: 'http://localhost:3000/facebook/callback'	//local url
    	callbackURL: 'https://boiling-inlet-59814.herokuapp.com/facebook/callback' //heroku url
    }
};
