/**
 * stores the user collections
 * 
 * @author haycco
 */
define(['jquery', 'backbone', 'underscore', 'models/user'], function($, Backbone, _, User){
    /*
     * Creating a new model called Users by extending Backbone.Collection class.
     */
    var Users = Backbone.Collection.extend({
        
        model: User,

        url: function(){
            return 'http://127.0.0.1:8080/users';
        }
    
    });

    return Users;
});