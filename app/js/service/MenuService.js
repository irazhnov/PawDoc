angular
    .module(AppConfig.name)
    .service('menuService',[function () {
        var self = this
            , menuModel = {
                isOpen:false,
                items: [
                {title:'My Account', url:'main/welcome'},
                {title:'My Pets', url:'main/selectpet' },
                {title:'My Cases', url:'main/currproblem'},
                {title:'Make Appointment', url:'main/appointments'},
                {title:'Call Office', url:'main/call'},
                {title:'Get Alerts', url:'main/notifications'},
                {title:'Order Food/RX', url:''},
                {title:'Settings', url:'main/settings'},
                {title:'Logout', url:''}
        ]};
        return {
            getModel: function () {
                return menuModel;
            },
            toggleMenu: function () {
                menuModel.isOpen = !menuModel.isOpen;
            }
        }
    }]);