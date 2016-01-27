module.exports = Promise.eachSeries = function(data, func) {
    return data.reduce(function(p, el) {
        return p.then(function(array){
            return Promise.resolve(func(el)).then(function(result){
                return array.concat([result]);
            })
        });
    }, Promise.resolve([]));
}

