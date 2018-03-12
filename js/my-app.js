// Initialize your app
var myApp = new Framework7({
	// Default title for modals
	root:'#app',
	theme: 'md',
    view: {
    	xhrCache: false,
    	pushState: false,
    	uniqueHistory: true,
	},
	panel: {
		swipe: 'left',
	},
	dialog: {
    	title: 'FrameWork7 DW2',
  	},
	routes: [
		{
			path: '/about/',
			url: 'about.html',
			name: 'about',
  		},
		{
			path: '/peliculas/',
			url: 'mas-peliculas.html',
			name: 'peliculas',
		}
	]
    // ... other parameters
});

// Export selectors engine
var $$ = Dom7;



// Add another view, which is in right panel





 

