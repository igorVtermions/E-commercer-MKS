import React, { createContext, useState } from "react";

type CartProviderProps = {
  children: React.ReactNode;
};

type CartContextType = {
  cartTech: Products[];
  setCartTech: (newSate: Products) => void;
  showItemCart: (item: Products) => void;
  removeItemTech: (id: Number) => void;
  plusItem: (item: Products) => void;
  minCart: (item: Products) => void;
};

const initialValue = {
  cartTech: [] as any,
  setCartTech: () => {},
  showItemCart: () => {},
  removeItemTech: () => {},
  plusItem: () => {},
  minCart: () => {},
};

type Products = {
  id: number;
  name: string;
  brand: string;
  description: string;
  price: string;
  photo: string;
  amount: number;
};

export const CartContext = createContext<CartContextType>(initialValue);

export const CartContextProvider = ({ children }: CartProviderProps) => {
  const [cartTech, setCartTech] = useState(initialValue.cartTech);

  function removeItemTech(id: Number) {
    const removeCart = cartTech.filter((item: Products) => item.id !== id);

    setCartTech(removeCart);
  }

  function plusItem(item: Products) {
    item.amount = item.amount + 1;

    console.log(item.amount);
  }

  function minCart(item: Products) {
    const productCart = [...cartTech];

    const product = productCart.find((i) => i.id === item.id);

    if (product.amount > 1) {
      product.amount = product.amount - 1;
      setCartTech(productCart);
    } else {
      const cartFilter = cartTech.filter((i: Products) => i.id !== item.id);
      setCartTech(cartFilter);
    }
  }

  function showItemCart(item: Products) {
    const verify = cartTech.find((items: Products) => items.id === item.id);

    const newItem = {
      id: item.id,
      name: item.name,
      photo: item.photo,
      price: item.price,
      amount: 1,
    };

    if (!verify) {
      setCartTech((prev: Products[]) => [...prev, newItem]);
    } else {
      newItem.amount = newItem.amount + 1;
      console.log(newItem.amount);
    }
  }

  return (
    <CartContext.Provider
      value={{
        cartTech,
        setCartTech,
        showItemCart,
        removeItemTech,
        plusItem,
        minCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
