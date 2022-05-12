// 3. Extract file:
 
function extractFile(str){
 
    let splitted = str.split("\\");
    let lastEl = splitted[splitted.length-1];
    let elToSplit = lastEl.lastIndexOf(".");
    // console.log(elToSplit);
    let fileName = lastEl.substring(0, elToSplit);
    let extension = lastEl.substring(elToSplit+1, lastEl.length);
    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extension}`);
}
 
extractFile("C:\\Internal\\training-internal\\Template.pptx");
extractFile("C:\\Projects\\Data-Structures\\LinkedList.cd");
 