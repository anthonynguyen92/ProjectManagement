(function() {

    if (typeof jQuery === "undefined") {
        throw new Error("jQuery plugins need to be before this file");
    }

    ftapp = {};

    ftapp.setBusy = function() {
        $.blockUI({
            message: '<div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>',
            css: {
                backgroundColor: 'transparent',
                border: 'none'
            }
        });
    }
    
    ftapp.clearBusy = function () {
        $.unblockUI();
    }

    ftapp.getCurrentLanguage = function () {
        if (localStorage['SessionState']) {
            var state = JSON.parse(localStorage['SessionState']);
            return state.language;
        } 
        return "en";
        
    }

    ftapp.getDataTableLocalization = function() {
        return './assets/datatables/translations/' + ftapp.getCurrentLanguage() + '.json';
    }
}());