module.exports = function (name) {
    if (name.length < 1) return false;
    let regex = /^([A-Z0-9\-\.]*)$/;
    let ok = regex.test(name);
    console.log(ok);
    return ok;
};
