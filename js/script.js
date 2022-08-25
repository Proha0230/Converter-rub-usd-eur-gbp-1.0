let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd'),
    inputEur = document.getElementById('eur'),
    inputGbp = document.getElementById('gbp');

inputRub.addEventListener('input', () => {

    function catchData() {

        return new Promise(function(resolve, reject){
            let request = new XMLHttpRequest();
            request.open("GET", "js/current.json");
        
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            request.send();
        
            request.onload = function() {
                if(request.readyState === 4 && request.status == 200) {
                            resolve(this.response)
                        } else {
                            reject();
                        
                        }
                }
            });
        };


        function catchDataEur() {

            return new Promise(function(resolve, reject){
                let request = new XMLHttpRequest();
                request.open("GET", "js/current.json");
            
                request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
                request.send();
            
                request.onload = function() {
                    if(request.readyState === 4 && request.status == 200) {
                                resolve(this.response)
                            } else {
                                reject();
                            
                            }
                    }
                });
            };


            function catchDataGbp() {

                return new Promise(function(resolve, reject){
                    let request = new XMLHttpRequest();
                    request.open("GET", "js/current.json");
                
                    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
                    request.send();
                
                    request.onload = function() {
                        if(request.readyState === 4 && request.status == 200) {
                                    resolve(this.response)
                                } else {
                                    reject();
                                
                                }
                        }
                    });
                };

    catchData()
    .then(response => {
        let data = JSON.parse(response);
        inputUsd.value = inputRub.value / data.usd;
    })
    .catch(() => inputUsd.value = "Что-то пошло не так")
    
    catchDataEur()
    .then(response => {
        let data = JSON.parse(response);
        inputEur.value = inputRub.value / data.eur;
    })
    .catch(() => inputEur.value = "Что-то пошло не так")
    
    catchDataGbp()
    .then(response => {
        let data = JSON.parse(response);
        inputGbp.value = inputRub.value / data.gbp;
    })
    .catch(() => inputGbp.value = "Что-то пошло не так")


});
