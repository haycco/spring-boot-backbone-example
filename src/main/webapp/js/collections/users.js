/**
 * stores the user collections
 * 
 * @author haycco
 */
define(['jquery', 'backbone', 'underscore', 'common', 'models/user'], function($, Backbone, _, Common, User){
    /*
     * Creating a new model called Users by extending Backbone.Collection class.
     */
    var Users = Backbone.Collection.extend({
        
        model: User,

        url: function(){
            return Common.API + '/users';
        }
    
    });

    return Users;
});