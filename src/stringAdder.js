class stringCalculator{
constructor(){
this.Separators=new Set([",","-"]);
}

extractCustomSeparatorFrom(userString)
{
    const SeparatorExp =/\[(.*?)\]/g
    let NewSeparatorsArray=userString.match(SeparatorExp)

    NewSeparatorsArray.forEach((NewSeparator)=>{
        NewSeparator=NewSeparator.substring(1,NewSeparator.length-1)
        this.Separators.add(NewSeparator);
    })
    let EndOfCustomSeparatorsIndex=userString.search(/\n/g)
    return userString.substr(EndOfCustomSeparatorsIndex+2)
}
checkIfSeparatorIsValid(PossibleSeparator)
{
    if(this.Separators.has(PossibleSeparator))
        return true
    else
        return false
}
extractNextSeparatorFrom(StrArray)
{
    let PossibleSeparator="";
    while(StrArray.length>0)
    {
        if(isNaN(StrArray[0]))
            PossibleSeparator+=StrArray.shift()
        else
            break;
    }
    return PossibleSeparator
    
}
extractNumberUntilSeparator(StrArray){
    let NumberStr=""
    let PossibleSeparator;
    while(StrArray.length>0)
    {
        PossibleSeparator=this.extractNextSeparatorFrom(StrArray)
        if(this.checkIfSeparatorIsValid(PossibleSeparator))
            break;
        NumberStr+=StrArray.shift();
    }
    return parseInt(NumberStr)
}

getSumFrom(userString)
{
    if(userString[0]=="/")
        userString=this.extractCustomSeparatorFrom(userString)
    let StrArray=userString.split("");
    let TotalValue=0;
    while(StrArray.length>0)
    {
        let RetrievedNumber=this.extractNumberUntilSeparator(StrArray)
        if(RetrievedNumber<=1000)
            TotalValue+=RetrievedNumber;
    }
    
    return TotalValue;
}
}
export default stringCalculator;