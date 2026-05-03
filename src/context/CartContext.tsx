import { createContext, useContext, useState, type ReactNode } from 'react'

export type CartItem = {
  id: string
  name: string
  description: string
  price: number
  image: string
  size: string
  color: string
  quantity: number
}

type CartContextType = {
  items: CartItem[]
  addItem: (item: CartItem) => void
  updateQty: (id: string, size: string, delta: number) => void
  clear: () => void
  totalItems: number
}

const CartContext = createContext<CartContextType | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  function addItem(newItem: CartItem) {
    setItems((prev) => {
      const existing = prev.find(
        (i) => i.id === newItem.id && i.size === newItem.size && i.color === newItem.color
      )
      if (existing) {
        return prev.map((i) =>
          i.id === newItem.id && i.size === newItem.size && i.color === newItem.color
            ? { ...i, quantity: i.quantity + newItem.quantity }
            : i
        )
      }
      return [...prev, newItem]
    })
  }

  function updateQty(id: string, size: string, delta: number) {
    setItems((prev) =>
      prev
        .map((i) => (i.id === id && i.size === size ? { ...i, quantity: i.quantity + delta } : i))
        .filter((i) => i.quantity > 0)
    )
  }

  function clear() {
    setItems([])
  }

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0)

  return (
    <CartContext.Provider value={{ items, addItem, updateQty, clear, totalItems }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used inside CartProvider')
  return ctx
}
