var tape = require("tape"),
    flattenObject = require("..");


tape("flattenObject(object: Object)", function(assert) {
    assert.deepEqual(flattenObject({
            "key": {
                "subkey": {
                    "value1": "key subkey value1",
                    "value2": "key subkey value2",
                    "value3": "key subkey value3",
                    "value4": "key subkey value4"
                }
            }
        }), {
            "key.subkey.value1": "key subkey value1",
            "key.subkey.value2": "key subkey value2",
            "key.subkey.value3": "key subkey value3",
            "key.subkey.value4": "key subkey value4"
        },
        "should flatten object"
    );
    assert.end();
});
