import React from "react";

export default function Recipes({ recipes }) {
  return (
    <div>
       
      {recipes.map((e, o) => (
        <div key={o}>
          {e.name} {e.amount}
          <div style={{ color: "blue" }}> {e.color}</div>
        </div>
      ))}
    </div>
  );
}

// import React from 'react'

// export default function Recipes(props) {
//   return (
//     <div><h1 style={{color:"red"}}>{props.name}</h1></div>
//   )
// }
