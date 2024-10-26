import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

function Cart() {
  const cart = useSelector(state => state.cart.cart);
  const dispatch = useDispatch();
  const { t } = useTranslation()

  function handleRemove(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  return (
    <div className="mt-6 p-6 bg-white shadow-lg rounded-lg flex flex-col cursor-pointer">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">{t("note")}</h2>
      {cart.length > 0 ? (
        <div className="flex  gap-4">
          {cart.map((value) => (
            <div key={value.id} className="flex flex-col p-4 border border-gray-300 rounded-lg">
              <div className="flex flex-col gap-2">
                <h1 className="text-lg font-semibold text-gray-800 capitalize">{value.name}</h1>
                <h1 className="text-lg font-semibold text-gray-800">{value.age} years old</h1>
                <h2 className="text-md text-gray-600">{value.email}</h2>
              </div>
              <button 
                onClick={() => handleRemove(value.id)} 
                className="bg-red-600 hover:bg-red-800 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 mt-2"
              >
                {t("remove")}
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600 text-center">{t("cart")}</p>
      )}
    </div>
  );
}

export default Cart;
