

/*jslint  eqeq: true, undef: true, vars: true, sloppy: true,  browser: true, white: true, plusplus: true, nomen: true, evil: true */
/*global jQuery*/

jQuery(function () {

    var resizeAutocomplete = function () {
        var autocompleteWidth = $('#country').width();
        $('#query, #country').focus().blur();
        $('.autocomplete').css({
            width: autocompleteWidth + 3
        });
    };
    $(window).resize(function () {
        resizeAutocomplete();
    });
    
    var a2;
    a2 = $('#country').autocomplete({
        width: 448,
        delimiter: /(,|;)\s*/,
        lookup: 'January,February,March,April,May,June,July,August,September,October,November,December'.split(',')
    });
    resizeAutocomplete();
});

