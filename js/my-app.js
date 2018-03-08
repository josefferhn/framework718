// Initialize your app
var myApp = new Framework7({
	// Default title for modals
	root:'#app',
	theme: 'md',
   	view:{
		xhrCache:false,
		pushState:true
	},
	dialog:{
		title:'Framework7'
	},
	routes: [
		{
		path: '/about/',
    	url: 'about.html',
    	name: 'about',
  		}
	]
    // ... other parameters
});

// Export selectors engine
var $$ = Dom7;



// Add another view, which is in right panel





 

