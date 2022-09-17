const Separators=new Set([",","-"])
function getSeparatorsOutOfStr(Str)
{
    const SeparatorExp =/\[(.*?)\]/g
    let NewSeparator=Str.match(SeparatorExp)[0]
    NewSeparator=NewSeparator.substring(1,NewSeparator.length-1)
    Separators.add(NewSeparator);
    
    let EndOfSeparatorsIndex=Str.search(/\n/g)
    return Str.substr(EndOfSeparatorsIndex+2)

}

function sumString(Str)
{
    if(Str[0]=="/")
        Str=getSeparatorsOutOfStr(Str)
    let StrArray=Str.split("");
    let TotalValue=0;
    let NumberStr=""
    while(StrArray.length>0)
    {
        if(StrArray)
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