var censoredWords=["sad","bad","mad"];
var customCensoreWords=[];
function censor(inStr){
for(idx in censoreWords){
inStr=inStr.replace(censoreWords[idx],"****");
}
for(idx in customCensoreWords){
inStr=inStr.replace(customCensoreWords[idx],"****");
}
return inStr;
}
function addCensoreWord(word){
customCensoreWords.push(word);
}
function getCensoreWords(){
return censoredWords.concat(customCensoreWords);
}
exports.censor=censor;
exports.addCensoreWords=addCensoreWord;
exports.addCensoreWords=getCensoreWord;