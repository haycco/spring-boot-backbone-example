/**
 * dependents
 * 
 * @author haycco
 */
require.config({
	baseUrl : 'js',
	paths : {
		jquery :       'libs/jquery/2.1.1/jquery.min',
		underscore :   'libs/underscore.js/1.7.0/underscore-min',
		backbone :     'libs/backbone.js/1.1.2/backbone-min',
		text:          'libs/text/2.0.14/text',     //用于RequireJS导入HTML类型的依赖
        templates:     '../templates',
	},
	shim : {
		underscore: {
			exports: "_"
		},
		backbone: {
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		}
	}
	
});

require(['app'], function(app){
	app.initialize();
})