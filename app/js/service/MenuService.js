angular
    .module(AppConfig.name)
    .service('menuService',[function () {
        var self = this
            , menuModel = {
                isOpen:false,
                items: [
                {title:'My Account'},
                {title:'My Pets'},
                {title:'My Cases'},
                {title:'Make Appoinment'},
                {title:'Call Office'},
                {title:'Get Alerts'},
                {title:'Order Food/RX'},
                {title:'Settings'},
                {title:'Logout'}
        ]};
        return {
            getModel: function () {
                return menuModel;
            }
        }
    }]);