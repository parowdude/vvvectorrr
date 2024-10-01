var input = {}
var original = {}

function compareObjects(input, output)
{
    let keys = Object.keys(input);
    for (let i = 0; i < keys.length; i++)
    {
        if(!output[keys[i]] === null || !output[keys[i]] === undefined)
        {
            console.log("Key missing from output object: " + keys[i]);
        }
        else if (input[keys[i]] !== output[keys[i]])
        {
            console.log("value mismatch: " + keys[i] + ": " + input[keys[i]] + " -> " + output[keys[i]]);
        }
    }
}

compareObjects(original, input);

