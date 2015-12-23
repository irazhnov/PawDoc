angular
    .module(AppConfig.name)
    .service('generalService', ['$q', function($q) {
            this.bootstrap = function() {
                return $q.all();
            };
        }
    ]);