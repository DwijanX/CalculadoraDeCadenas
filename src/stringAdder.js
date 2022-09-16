function sumString(Str)
{
    let StrArray=Str.split("");
    let TotalValue=0;
    let NumberStr=""
    while(StrArray.length>0)
    {
        NumberStr+=StrArray.shift();
    }
    if(NumberStr!="")
        TotalValue=parseInt(NumberStr);
    return TotalValue;
}

export default sumString