$('body').append('<div id="myHelp" title="Help box" ng-controller="HelpCtrl"><table></table></div>');

var Help = {
    add: function(c) {
        $('#myHelp table').append('<tr><td><strong>'+c.keys+'</strong></td><td>'+c.description+'</td></tr>');
    }
};

keypress.register_combo({ // Help
    "keys"          : "cmd `",
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
