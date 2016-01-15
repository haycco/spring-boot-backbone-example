/**
 * global router
 * 
 * @author haycco
 */
define(['jquery', 
        'underscore', 
        'backbone'], 
function($, _, Backbone) {

    var Router = Backbone.Router.extend({
        routes: {
          '': 'main',
          'signin': 'signin'
        },
        main: function() {
            
        },
        signin: function() {
            
        }
    });

    return new Router();
});