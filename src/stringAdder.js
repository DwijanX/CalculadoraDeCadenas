function sumString(Str)
{
    let TotalValue=0;
    if(Str.length==0)
    {
        return TotalValue;
    }
    TotalValue=parseInt(Str[0]);
    return TotalValue;
}

export default sumString