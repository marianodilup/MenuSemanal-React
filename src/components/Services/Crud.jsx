
const addMeal = (newMeal,getMeal) => {
  fetch("https://6685d15f83c983911b0018fa.mockapi.io/menu", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newMeal),

    /* setApiState([...apiState, newMeal]); */
  })
    .then((response) => response.json())
    .then((data) => getMeal());
};




const deleteMeal = (id) => {
  return fetch(`https://6685d15f83c983911b0018fa.mockapi.io/menu/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },

})

.then((response) => response.json())

};



export {deleteMeal, addMeal};