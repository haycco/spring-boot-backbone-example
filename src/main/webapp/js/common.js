/**
 * global define
 *  
 * @author haycco
 */
'use strict';

define([], function () {
    return {
        
        // Base API URL (used by models & collections)
        API : 'https://127.0.0.1:8443/api/v1',
        
        // Show alert classes and hide after specified timeout
        showAlert : function(title, text, klass) {
            $("#header-alert").removeClass("alert-danger alert-warning alert-success alert-info");
            $("#header-alert").addClass(klass);
            $("#header-alert").html('<button class="close" data-dismiss="alert">×</button><strong>' + title + '</strong> ' + text);
            $("#header-alert").show('fast');
            setTimeout(function() {
                $("#header-alert").hide();
            }, 7000);
        },
        
        // What is the enter key constant?
        ENTER_KEY: 13,
        ESCAPE_KEY: 27
    };
});