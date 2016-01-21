angular
    .module(AppConfig.name)
    .service('uiService', [function () {
        return {
            uiModel: {
                headerTitle: '',
                callNumber: '112'
            },
            uploadedDataModel:{
                isRecordingAudio:false,
                //uploadedPictureUrls: [{url:'../www/images/mockup/20150113_141944.jpg'},{url:'../www/images/mockup/20150305_162322.jpg'},{url:'../www/images/mockup/20150305_162324.jpg'}],
                uploadedPictureUrls: [],
                uploadedVideoUrls:[],
                uploadedAudioUrls:[]
            },
            petsModel: {
              pets: [
                  {url:"../www/images/mockup/kona.jpg", moniker: 'Kona'},
                  {url:"../www/images/mockup/kona.jpg", moniker: 'Barnaby'},
                  {url:"../www/images/mockup/kona.jpg", moniker: 'Mr.Schrinkles'},
                  {url:"../www/images/mockup/kona.jpg", moniker: 'Mr.Schrinkles'},
                  {url:"../www/images/mockup/kona.jpg", moniker: 'Mr.Schrinkles'},
                  {url:"../www/images/mockup/kona.jpg", moniker: 'Mr.Schrinkles'}
              ]
            },
            currentPet: {},
            setHeaderTitle : function (value) {
                this.uiModel.headerTitle = value;
            },
            showNotification : function(type , duration) {
                window.plugins.toast.show(type ,duration ? duration : 'short','center');
        }
        }
    }]);