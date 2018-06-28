window.onload = function(){
    var api = GeotabApi(function (authenticationCallback) {
        document.getElementById("submit").addEventListener("click", function () {
                var
                server = document.getElementById("server").value,
                userName = document.getElementById("username").value,
                password = document.getElementById("password").value,
                database = document.getElementById("database").value;

                authenticationCallback(server, database, userName, password,
                        function (errorString) {
                        alert(errorString);
                });
        }, false);
    });

    document.getElementById("call").onclick = function() {
        api.call("Get", {
            "typeName": "Device",
            "resultsLimit": 10
        }, function(result) {
            console.log("Done: ", result);
        }, function(e) {
            console.error("Failed:", e);
        });
    }
}