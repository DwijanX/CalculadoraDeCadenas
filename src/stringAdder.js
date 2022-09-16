const Separators=new Set([",","-"])
function sumString(Str)
{
    let StrArray=Str.split("");
    let TotalValue=0;
    let NumberStr=""
    while(StrArray.length>0)
    {
        while(StrArray.length>0)
        {
            let characterExtracted=StrArray.shift();
            if(Separators.has(characterExtracted))
            {
                break;
            }
            NumberStr+=characterExtracted;
        }
        TotalValue+=parseInt(NumberStr);
        NumberStr=""
    }
    
    return TotalValue;
}

export default sumString