


import React from 'react';
import { toggleDarkLight } from '../store/action';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

function Layout({ children }) {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleDarkLight());
  };

  const handleChange = (e) => {
    const language = e.target.value;
    dispatch({ type: language === 'en' ? "EN" : "UZ" });
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <header className='w-full fixed mx-auto flex items-center  justify-between gap-36 bg-slate-200 p-4 rounded-md shadow-xl'>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
          M
        </button>
        <h1 className='text-xl font-semibold text-gray-800'>
          {t("hello")}
        </h1>
       
        <div className='flex items-center gap-2 mx-10 '>
          <h1 className='text-black font-bold'>Dark:</h1>
          <input 
            className='rounded-md bg-white w-4 ' 
            type="checkbox" 
            onClick={handleToggle} 
          />
           <select 
          onChange={handleChange} 
          className='border ml-10 rounded-md p-2 text-black bg-inherit border-black focus:outline-none focus:ring-2 focus:ring-blue-500'
        >
          <option value="en">EN</option>
          <option value="uz">UZ</option>
        </select>
        </div>
      </header>

      <main >
        {children}
      </main>

      
    </div>
  );
}

export default Layout;
