/**
 * Created by ZMac on 3/1/14.
 */


$(document).ready(function () {
    var referrer = document.referrer;
    var domain, url, engineDomain, recordUrl;
    if (!referrer) {
        return;
    }
    domain = urlDomain(referrer);
    if (!domain) {
        return;
    }
    engineDomain = 'peshawarjobs';
    if ((domain.toLowerCase().indexOf(engineDomain) == 0) || domain.toLowerCase().indexOf("www." + engineDomain) == 0) {

    }
    else {
        return;
    }
    recordRemotely(referrer);
//        recordUrl = '';
//        var jqxhr = $.ajax({
//            url: recordUrl,
//            cache: false
//        } )
//                .done(function() {
////                    alert( "success" );
//                })
//                .fail(function() {
////                    alert( "error" );
//                })
//                .always(function() {
////                    alert( "complete" );
//                });
});

function recordRemotely(referrer) {
    recordUrl = 'test.php';
    $.ajax({
        url: recordUrl,
        cache: false,
        type: "POST",
        data: {refData:referrer, cId: clientId}
    })
        .done(function () {
//                    alert( "success" );
        })
        .fail(function () {
//                    alert( "error" );
        })
        .always(function () {
//                    alert( "complete" );
        });

}

function urlDomain(url) {
    var a = document.createElement('a');
    a.href = url;
    return a.hostname;
}

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}


function getUrlVars(url) {
    var vars = [], hash;
    var hashes = url.slice(url.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}