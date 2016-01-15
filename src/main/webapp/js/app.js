/**
 * spring-boot-backbone-example stater
 * 
 * @author haycco
 */
define(['jquery', 
        'underscore', 
        'backbone'], 
function($,  _, Backbone) {

    return {
        initialize : function() {
            Backbone.history.start();
        }
    };

});