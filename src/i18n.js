import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          hello: "Hello",
          info: "ADD NOTE",
            gender: "Gender" ,
            age:"Age",
            name:"Name",
            option:"Male",
            option1:"Female",
            remove:"Remove",
            cart:"Your cart is empty.",
            note: "Your Note",
        
        },
      },
      uz: {
        translation: {
          hello: "Assalom alekum",
          info: "QAYDNOMA QO'SHISH",

          gender: "Jinsi",
          age:"Yoshi",
          name:"Ismi",
          option:"Erkak",
          option1:"Ayol",
          remove:"O'chirish",
          cart:"Sizning qaydomangiz bo'sh",
          note: "Qaydnomangiz",


          
        },
      },
    },
  });

export default i18n;
