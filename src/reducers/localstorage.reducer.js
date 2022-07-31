import React from 'react'

export default function useLocalStorageReducer(board,intial,reducer) {
   const [state, dispatch] = React.useReducer(reducer, intial, ()=>{
      let value;
      try{
         value = JSON.parse(
            window.localStorage.getItem(board) || String(intial)
            )
         }catch(e){
            value = intial
      }
      return value
   })
   React.useEffect(() => {
      window.localStorage.setItem(board,JSON.stringify(state))
   }, [state,board]);
   
  return [state,dispatch]
}
