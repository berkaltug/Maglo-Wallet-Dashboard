export const formatCardNo=(input:string)=>{
  const cleanInput = input.toString().replace(/\s+/g, '');

  const groups = cleanInput.match(/.{1,4}/g);

  return groups ? groups.join('\u00A0\u00A0') : '';
}