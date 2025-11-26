export const formatCardNo=(input:string)=>{
  const cleanInput = input.toString().replace(/\s+/g, '');

  const groups = cleanInput.match(/.{1,4}/g);

  return groups ? groups.join('\u00A0\u00A0') : '';
}

export const formatDateForTable=(dateString:string)=>{
  const options:Intl.DateTimeFormatOptions={day:'numeric',month:'short',year:"numeric"}
  const formatter=new Intl.DateTimeFormat('en-GB',options)
  return formatter.format(new Date(dateString));
}

export const formatDateForList=(dateString:string)=>{
  const options:Intl.DateTimeFormatOptions={dateStyle:'long',timeStyle:'short',hour12:false}
  const formatter=new Intl.DateTimeFormat('en-US',options)
  return formatter.format(new Date(dateString));
}

export const formatCurrency=(currency:string,amount:number)=>{
  const isCode=currency.length===3
  let formatted;
  if(isCode){
     formatted=Intl.NumberFormat('tr-TR', {
        style: 'currency',
        currency: currency.toUpperCase() 
      }).format(Math.abs(amount));
        return amount<0 ? `- ${formatted}` : `${formatted}`;
  }else{
      formatted=Intl.NumberFormat('tr-TR', {
      style: 'decimal',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(Math.abs(amount));
      return amount<0 ? `- ${currency}${formatted}` : `${currency}${formatted}`;
  }

}