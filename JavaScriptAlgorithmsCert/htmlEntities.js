// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

// convertHTML("Dolce & Gabbana") should return "Dolce &amp; Gabbana".
// convertHTML("Hamburgers < Pizza < Tacos") should return "Hamburgers &lt; Pizza &lt; Tacos".
// convertHTML("<>") should return "&lt;&gt;".

function convertHTML(str) {

    var splitStr = str.split('');
    var ampersand = '&amp;';
    var lessThan = '&lt;';
    var greaterThan = '&gt;';
    var doubleQuote = '&quot;';
    var singleQuote = '&apos;';

    for(var i=0; i<splitStr.length; i++){
        if(splitStr[i]=='&'){
            splitStr[i] = ampersand;
        } else if (splitStr[i]=='<'){
            splitStr[i] = lessThan;
        } else if (splitStr[i]=='>'){
            splitStr[i] = greaterThan;
        } else if (splitStr[i]=='"'){
            splitStr[i] = doubleQuote;
        } else if (splitStr[i]=="'"){
            splitStr[i] = singleQuote;
        }
    }

    return splitStr.join('');
}

console.log(convertHTML("Hamburgers < Pizza < Tacos"));
