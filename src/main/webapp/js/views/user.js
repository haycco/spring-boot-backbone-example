/**
 * stores the POST state and response state of authentication for user
 * 
 * @author haycco
 */
define(['jquery', 'backbone', 'underscore', 'common'], function($, Backbone, _, Common){
    /*
     * Creating a new model called User by extending Backbone.Model class.
     */
    var User = Backbone.Model.extend({
        
        initialize: function(){
            _.bindAll(this, 'initialize');
        },

        defaults: {
            id: 0,
            username: '',
            name: '',
            email: ''
        },

        url: function(){
            return Common.API + '/user';
        }
    
    });

    return User;
});