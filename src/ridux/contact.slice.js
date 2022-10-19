import { createSlice } from '@reduxjs/toolkit'

const initialState = [{
  id: 1,
  name: "maryam",
  lastname: "karamad",
  phone: "09162780255",
  favorite: false,
  gender: "Female",
  city: "kerman",
},
{
  id: 2,
  name: "mohsen",
  lastname: "sarikhani",
  phone: "09176718827",
  favorite: true,
  gender: "male",
  city: "kerman",
},
{
  id: 3,
  name: "mohsen",
  lastname: "hasani",
  phone: "09362440266",
  favorite: false,
  gender: "male",
  city: "kerman",
},]

export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    AddContact: (state,action) => {
    const payload=action.payload
    // {id: 2, name: "mohsen",lastname: "sarikhani",phone: "09176718827",favorite: true,gender: "male",city: "kerman",}
    state.push ({id:Math.floor(Math.random()*1000),name:payload.name,lastname:payload.lastname,phone:payload.phone,gender:payload.gender,city:payload.city,favorite:false,})
    },
    DeleteContact: (state,action) => {
        //paylod=id
        const payload=action.payload;
    const index=state.findIndex(contact=>contact.id === payload)
    state.splice(index,1)
    },
        UpdateContact: (state, action) => {
            // {id: 2, name: "mohsen",lastname: "sarikhani",phone: "09176718827",favorite: true,gender: "male",city: "kerman",}
            const payload=action.payload;
            const index=state.findIndex(contact=>contact.id === payload.id)
          state[index]=payload
      
    },
    FavoriteContact: (state, action) => {
       // {id: 2, name: "mohsen",lastname: "sarikhani",phone: "09176718827",favorite: true,gender: "male",city: "kerman",}
      const payload=action.payload;
      const index=state.findIndex(contact=>contact.id === payload.id)
    state[index]={id:payload.id, name:payload.name,lastname:payload.lastname,phone:payload.phone,favorite: !payload.favorite,gender:payload.gender,city:payload.city}
},
FavoritestateContact: (state, action) => {
  const payload=action.payload;
 console.log(payload)
 state.push()

 
  

},
  },
})


export const { AddContact, DeleteContact, UpdateContact,FavoriteContact,FavoritestateContact } = contactSlice.actions

export default contactSlice.reducer