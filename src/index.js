var has = require("has"),
    isObject = require("is_object");


module.exports = flattenObject;


function flattenObject(object) {
    if (isObject(object)) {
        return baseFlattenObject(object, {});
    } else {
        return object;
    }
}

function baseFlattenObject(object, out) {
    var localHas = has,
        key, value, k;

    for (key in object) {
        if (localHas(object, key)) {
            value = flattenObject(object[key]);

            if (isObject(value)) {
                for (k in value) {
                    if (localHas(value, k)) {
                        out[key + "." + k] = value[k];
                    }
                }
            } else {
                out[key] = value;
            }
        }
    }

    return out;
}
