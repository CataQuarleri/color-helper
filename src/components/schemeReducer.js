import {useReducer, useEffect } from 'react'

export const ACTIONS = {
  ADD_SCHEME: 'addFavoriteScheme',
  DELETE_SCHEME: 'deleteScheme',
  UPDATE_TOTAL: 'updateTotalSchemes'
}

export const initialState = {
  total: 0,
  id: Date.now(),
  favoriteSchemes: []
}
   
function schemeReducer(state, action) {

  switch (action.type) {
    case ACTIONS.ADD_SCHEME: 
      console.log("ADD SCHEME", action.payload)
         return {...state, favoriteSchemes: action.payload.scheme};
    case ACTIONS.DELETE_SCHEME: 
    console.log("DELETE SCHEME", action.payload)

         return {...state, favoriteSchemes: action.payload.scheme};
    case ACTIONS.UPDATE_TOTAL: 
    console.log("UPDATE TOTAL", action.payload)

         return {...state, total: action.payload.total};
    default: 
        throw new Error('error')
  }
}

export default schemeReducer;

// export function newScheme(scheme){
//   return {id: Date.now(), colorScheme: scheme}
// }

// export function SavedSchemes() {

//   const savedSchemes = JSON.parse(localStorage.getItem('schemes'))
//   const [scheme, dispatch] = useReducer(reducer, savedSchemes || [])

//   useEffect(()=>{
//      localStorage.setItem('toDos', JSON.stringify(scheme))
//      }, [scheme])

//   function handleFavorites(e){
//     e.preventDefault()
//       dispatch({type: ACTIONS.ADD_SCHEME, payload: {scheme: currentScheme}})
//     }
//     {todos.map((todo)=>
//       <Todo key={todo.id} todo={todo} dispatch={dispatch}/>
//     )}
// }