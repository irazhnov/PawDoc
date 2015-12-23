angular
    .module(AppConfig.name)
    .service('uiService', [function () {
        return {
            uiModel: {
                headerTitle: ''
            },
            uploadedDataModel:[
                //sample object
                //{
                //    url:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=="
                //}
            ],
            showNotification : function(type , duration) {
                window.plugins.toast.show(type ,duration ? duration : 'short','center');
        }
        }
    }]);