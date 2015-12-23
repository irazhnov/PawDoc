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
                {title:'Make Appoinment', url:''},
                {title:'Call Office', url:''},
                {title:'Get Alerts', url:''},
                {title:'Order Food/RX', url:''},
                {title:'Settings', url:''},
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