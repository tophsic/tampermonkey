$('body').append('<div id="myHelp" title="Help box" ng-controller="HelpCtrl"><table></table></div>');

var Help = {
    add: function(c) {
        $('#myHelp table').append('<tr><td>'+c.keys+'</td><td>'+c.description+'</td></tr>');
    }
};

keypress.register_combo({ // Help
    "keys"          : "shift ~",
    "is_exclusive"  : true,
    "on_keyup"      : function(e) {
        
        $('#myHelp').dialog({
            modal: true,
            buttons: {
                Ok: function() {
                    $( this ).dialog( "close" );
                }
            }
        });
        
    },
    "this"          : window
});
