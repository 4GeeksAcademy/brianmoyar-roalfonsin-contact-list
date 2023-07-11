import { createSlice } from "@reduxjs/toolkit";

const listaInicial = [
    {
        name: 'Rodrigo',
        address: 'Queretaro',
        phone: 554515145,
        email: 'rara@gaga.com' 
    
    }
];

export const listaDeContactos = createSlice({
    name: 'lista',
    initialState: listaInicial,
    reducers: {
        
        agregarContacto: (state) => {

        },

        modificarContacto: (state) => {

        },

        borrarContacto: (state) => {

        },
    },
});

export const {agregarContacto, modificarContacto, borrarContacto} = listaDeContactos.actions;