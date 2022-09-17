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

function verifyIfTheresASeparator(StrArray)
{
    let PossibleSeparator="";
    while(StrArray.length>0)
    {
        if(isNaN(StrArray[0]))
            PossibleSeparator+=StrArray.shift()
        else
            break;
    }
    if(Separators.has(PossibleSeparator))
        return true
    else
        return false
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
        while(StrArray.length>0)
        {
            if(verifyIfTheresASeparator(StrArray,0))
                break;
            let characterExtracted=StrArray.shift()
            if(isNaN(characterExtracted)==false)
                NumberStr+=characterExtracted;
        }
        TotalValue+=parseInt(NumberStr);
        NumberStr=""
    }
    
    return TotalValue;
}

export default sumString