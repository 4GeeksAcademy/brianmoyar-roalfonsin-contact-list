import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
      name: 'John Doe',
      address: '123 Main St, City, Country',
      phone: '123-456-7890',
      email: 'johndoe@example.com'
    },
    {
      name: 'Jane Smith',
      address: '456 Elm St, City, Country',
      phone: '987-654-3210',
      email: 'janesmith@example.com'
    },
    {
      name: 'David Johnson',
      address: '789 Oak St, City, Country',
      phone: '555-555-5555',
      email: 'davidjohnson@example.com'
    },
    {
      name: 'Emily Brown',
      address: '321 Pine St, City, Country',
      phone: '111-222-3333',
      email: 'emilybrown@example.com'
    },
    {
      name: 'Michael Wilson',
      address: '678 Walnut St, City, Country',
      phone: '444-444-4444',
      email: 'michaelwilson@example.com'
    },
    {
      name: 'Sarah Davis',
      address: '987 Maple St, City, Country',
      phone: '999-999-9999',
      email: 'sarahdavis@example.com'
    }
  ];

export const listaDeContactos = createSlice({
    name: 'lista',
    initialState,
    reducers: {
        
        agregarContacto: (state, argument) => {
            state.push(argument.payload);
        },

        modificarContacto: (state) => {

        },

        borrarContacto: (state, argument) => {
            state.splice(argument.payload, 1);
        },
    },
});

export const {agregarContacto, modificarContacto, borrarContacto} = listaDeContactos.actions;