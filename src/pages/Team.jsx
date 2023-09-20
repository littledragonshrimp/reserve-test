import React from 'react'
import Root from '../routes/root'


function Team() {

  const MenuBlocks = [
    {
        title: "SCALLOP CRUDO",
        content: "Dragonfruit, Fresno, Prosecco Granita",
        type: "starter",
        price: "18",
        blockNumber: "1"
    },
    {
        title: "HIRAMASA CRUDO",
        content: "Blackberry, Hibiscus Vinaigrette, Tomatillo, Crispy Leeks",
        type: "starter",
        price: "17"
    },
    {
        title: "BEEF TARTARE",
        content: "Salsa Bianca, Bread, Pepper Chips",
        type: "starter",
        price: "20"
    },
    {
        title: "SEMOLINA FRIED GREEN TOMATOES",
        content: "Endive, Spicy Mostarda, Buttermilk Ricotta",
        type: "starter",
        price: "8"

    },
    {
        title: "BUTTER LETTUCE",
        content: "Sunchoke, Smoked Almond, Horseradish",
        type: "starter",
        price: "14"
    },
    {
        title: "FOCACCIA DI CHARLES",
        content: "Crescenza, Taleggio",
        type: "pasta",
        price: "21"
    },
    {
        title: "LEMON RICOTTA GNUDI",
        content: "Honey, Crispy Sage, Hazelnut",
        type: "pasta",
        price: "22"
    },
    {
        title: "VEAL RAGU CAPPELONI",
        content: "Parmesan Cream, Basil, Dried Olives",
        type: "pasta",
        price: "22"
    },
    {

        title: "SPICY CRESTE DI GALLO",
        content: "Rock Shrimp, Tarragon, Basil, Lemon",
        type: "pasta",
        price: "22"

    },
    {
        title: "BUCATINI CARBONARA",
        content: "Charred Poblano, Egg Yolk, Crispy Pancetta",
        type: "pasta",
        price: "22"
    },
    {

        title: "KING CRAB RAVIOLI DOPPIO",
        content: "Spring Pea, Maitake Mushroom, Vadouvan",
        type: "pasta",
        price: "22"
    },
    {
        title: "LUMACHE AMATRICIANA",
        content: "Smoked Guanciale, Roman Red Sauce",
        type: "pasta",
        price: "22"
    },
]
  return (
    <>
    <Root />
    <teamBuilder/>
    </>
  )
}

export default Team