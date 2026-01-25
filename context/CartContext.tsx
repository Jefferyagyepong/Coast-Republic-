'use client'
import { createContext, useContext, useReducer, useEffect, ReactNode } from 'react'
export type CartItem = {
 id: number
 variantId?: number
 name: string
 slug: string
 price: number
 quantity: number
 imageUrl?: string
 attributes?: Record<string, string>
}
type CartState = {
 items: CartItem[]
}
type CartAction =
 | { type: 'ADD_ITEM'; payload: CartItem }
 | { type: 'REMOVE_ITEM'; payload: { id: number; variantId?: number } }
 | { type: 'UPDATE_QUANTITY'; payload: { id: number; variantId?: number; quantity: number } }
 | { type: 'CLEAR_CART' }
 | { type: 'SET_CART'; payload: CartItem[] }
const initialState: CartState = {
 items: [],
}
function cartReducer(state: CartState, action: CartAction): CartState {
 switch (action.type) {
   case 'ADD_ITEM': {
     const existingIndex = state.items.findIndex(
       (i) => i.id === action.payload.id && i.variantId === action.payload.variantId
     )
     if (existingIndex >= 0) {
       const newItems = [...state.items]
       newItems[existingIndex] = {
         ...newItems[existingIndex],
         quantity: newItems[existingIndex].quantity + action.payload.quantity,
       }
       return { ...state, items: newItems }
     }
     return { ...state, items: [...state.items, action.payload] }
   }
   case 'REMOVE_ITEM':
     return {
       ...state,
       items: state.items.filter(
         (i) => !(i.id === action.payload.id && i.variantId === action.payload.variantId)
       ),
     }
   case 'UPDATE_QUANTITY': {
     if (action.payload.quantity <= 0) {
       return {
         ...state,
         items: state.items.filter(
           (i) => !(i.id === action.payload.id && i.variantId === action.payload.variantId)
         ),
       }
     }
     return {
       ...state,
       items: state.items.map((i) =>
i.id === action.payload.id && i.variantId === action.payload.variantId
           ? { ...i, quantity: action.payload.quantity }
           : i
       ),
     }
   }
   case 'CLEAR_CART':
     return { ...state, items: [] }
   case 'SET_CART':
     return { ...state, items: action.payload }
   default:
     return state
 }
}
// Helpers
const STORAGE_KEY = 'ecommerce-cart'
function getCartFromStorage(): CartItem[] {
 if (typeof window === 'undefined') return []
 try {
   const stored = localStorage.getItem(STORAGE_KEY)
   return stored ? JSON.parse(stored) : []
 } catch {
   return []
 }
}
type CartContextValue = {
 state: CartState
 addItem: (item: CartItem) => void
 removeItem: (id: number, variantId?: number) => void
 updateQuantity: (id: number, variantId: number | undefined, quantity: number) => void
 clearCart: () => void
 itemCount: number
 total: number
}
const CartContext = createContext<CartContextValue | undefined>(undefined)
export function CartProvider({ children }: { children: ReactNode }) {
 const [state, dispatch] = useReducer(cartReducer, initialState)
 // Load from storage on mount
 useEffect(() => {
   const savedItems = getCartFromStorage()
   if (savedItems.length > 0) {
     dispatch({ type: 'SET_CART', payload: savedItems })
   }
 }, [])
 // Save to storage whenever items change
 useEffect(() => {
   if (typeof window !== 'undefined') {
     localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items))
   }
 }, [state.items])
 const addItem = (item: CartItem) => {
   dispatch({ type: 'ADD_ITEM', payload: { ...item, quantity: item.quantity ?? 1 } })
 }
 const removeItem = (id: number, variantId?: number) => {
   dispatch({ type: 'REMOVE_ITEM', payload: { id, variantId } })
 }
 const updateQuantity = (id: number, variantId: number | undefined, quantity: number) => {
   dispatch({ type: 'UPDATE_QUANTITY', payload: { id, variantId, quantity } })
 }
 const clearCart = () => dispatch({ type: 'CLEAR_CART' })
 const itemCount = state.items.reduce((sum, i) => sum + i.quantity, 0)
 const total = state.items.reduce((sum, i) => sum + i.price * i.quantity, 0)
 return (
<CartContext.Provider
     value={{
       state,
       addItem,
       removeItem,
       updateQuantity,
       clearCart,
       itemCount,
       total,
     }}
>
     {children}
</CartContext.Provider>
 )
}
export function useCart() {
 const context = useContext(CartContext)
 if (!context) {
   throw new Error('useCart must be used within a CartProvider')
 }
 return context
}