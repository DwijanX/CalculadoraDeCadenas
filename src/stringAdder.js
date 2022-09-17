const Separators=new Set([",","-"])
function getCustomSeparatorsOutOfStr(Str)
{
    const SeparatorExp =/\[(.*?)\]/g
    let NewSeparatorsArray=Str.match(SeparatorExp)

    NewSeparatorsArray.forEach((NewSeparator)=>{
        NewSeparator=NewSeparator.substring(1,NewSeparator.length-1)
        Separators.add(NewSeparator);
    })
    let EndOfCustomSeparatorsIndex=Str.search(/\n/g)
    return Str.substr(EndOfCustomSeparatorsIndex+2)
}

function verifyIfTheresASeparatorAndDeleteItFromArray(StrArray)
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
        Str=getCustomSeparatorsOutOfStr(Str)
    let StrArray=Str.split("");
    let TotalValue=0;
    let NumberStr=""
    while(StrArray.length>0)
    {
        while(StrArray.length>0)
        {
            if(verifyIfTheresASeparatorAndDeleteItFromArray(StrArray,0))
                break;
            NumberStr+=StrArray.shift();
        }
        TotalValue+=parseInt(NumberStr);
        NumberStr=""
    }
    
    return TotalValue;
}

export default sumString