import { state } from '../../store/store';

export const Helper_Generate_Document_Price = (documents: any, id_Document: string) => {
  let obj_Document: any = documents.filter(obj => {
    return obj.id === id_Document;
  })[0];

  let price_Display: string = '';

  if (state.code_Country === 'IN') {
    price_Display = '₹';
    price_Display = price_Display + obj_Document.price_inr;
  } else {
    price_Display = '$';
    price_Display = price_Display + obj_Document.price_usd;
  }

  return price_Display;
};
