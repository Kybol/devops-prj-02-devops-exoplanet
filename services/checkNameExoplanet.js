module.exports = function (name) {
    let regex = /^([A-Z0-9\-\.]*)$/;
    let ok = regex.test(name);
    console.log(ok);
    return ok;
};  
