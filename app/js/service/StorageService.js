angular
    .module(AppConfig.name)
    .service('storageService', [
        function() {
           return {
                readString: function(name) {
                    if(typeof localStorage.getItem(name) === "undefined") {
                        localStorage.setItem(name,"");
                    }
                    return localStorage.getItem(name);
                },
                readArray: function(name) {
                    var stored = localStorage.getItem(name);
                    if(stored === null || stored.length == 0) {
                        localStorage.setItem(name, JSON.stringify([]));
                        return [];
                    }
                    try{
                        return JSON.parse(stored);
                    }
                    catch(e) {
                        return [];
                    }
                },
                read: function (key) {
                    var obj = localStorage.getItem(key);
                    if(!obj) {
                        return null;
                    }
                    // assume it is an object that has been stringified
                    if (obj[0] === "{") {
                        obj = JSON.parse(obj);
                    }
                    return obj;
                },
                add: function(name,value) {
                    var arr = this.readArray(name);
                    arr.push(value);
                    localStorage.setItem(name,JSON.stringify(arr));
                },
                write: function(name,value) {
                    localStorage.setItem(name,value)
                },
                remove: function(key) {
                    localStorage.removeItem(key);
                }
            };
        }
    ]);
