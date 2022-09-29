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

verifyIfTheresASeparatorAndDeleteItFromArray(StrArray)
{
    let PossibleSeparator="";
    while(StrArray.length>0)
    {
        if(isNaN(StrArray[0]))
            PossibleSeparator+=StrArray.shift()
        else
            break;
    }
    if(this.Separators.has(PossibleSeparator))
        return true
    else
        return false
}


getSumFrom(userString)
{
    if(userString[0]=="/")
        userString=this.extractCustomSeparatorFrom(userString)
    let StrArray=userString.split("");
    let TotalValue=0;
    let NumberStr=""
    while(StrArray.length>0)
    {
        while(StrArray.length>0)
        {
            if(this.verifyIfTheresASeparatorAndDeleteItFromArray(StrArray))
                break;
            NumberStr+=StrArray.shift();
        }
        let RetrievedNumber=parseInt(NumberStr)
        if(RetrievedNumber<=1000)
            TotalValue+=RetrievedNumber;
        NumberStr=""
    }
    
    return TotalValue;
}







}





export default stringCalculator;