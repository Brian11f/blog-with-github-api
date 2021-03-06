var app = require("./gists-app.js");

(function () {
  "use strict";

	angular.module("gisty").service("GistService", ["$http", "token", function ($http, token) {

    var urlRoot = "https://api.github.com";
    var username = "toalina";

    var Gist = {
      get: function (id) {
        if (angular.isDefined(id)) {
          // return $githubGist(id).read();
          return $http.get(urlRoot + "/gists/" + id, {
            headers: {'Authorization': 'token ' + token,}
          });
        } else {
          // return $http.get(urlRoot);
          console.warn('root url');
        }
      },
      update: function (model) {
        return $http.patch(urlRoot + "/gists/" + model.id, model, {
          headers: {
            'Authorization': 'token ' + '5586e7930bc963ecab29fef165246e6f0a90f248',
          }
        });
      },
      create: function (model) {
        return $http.patch(urlRoot + "/gists/", model, {
          headers: {
            'Authorization': 'token ' + token,
          }
        });
      },

			delete: function (id) {
        return $http.delete(urlRoot + "/gists/" + id, {
          headers: {
            'Authorization': 'token ' + '5586e7930bc963ecab29fef165246e6f0a90f248',
          }
        });
      }
    };
    return Gist;
  }]);

}());
