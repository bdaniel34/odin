// import React from "react";

// export default function App() {
//   const julio = [
//     {
//       id: 0,
//       name: "Creola Katherine Johnson",
//       profession: "mathematician",
//     },
//     {
//       id: 1,
//       name: "Mario José Molina-Pasquel Henríquez",
//       profession: "chemist",
//     },
//     {
//       id: 2,
//       name: "Mohammad Abdus Salam",
//       profession: "physicist",
//     },
//     {
//       id: 3,
//       name: "Percy Lavon Julian",
//       profession: "chemist",
//     },
//     {
//       id: 4,
//       name: "Subrahmanyan Chandrasekhar",
//       profession: "astrophysicist",
//     },
//   ];

//   // const ll = julio.map((example, d) =>
//   //   example.name.startsWith("S") || example.name.startsWith("P") ? (      // retrieve items based on the first letter
//   //     <li key={d}>{example.name}</li>
//   //   ) : null
//   // );
//   // const chemist = julio.filter((p) => p.profession === "chemist");
//   // const hh = chemist.map((person, a) => (
//   //   <li key={a}>
//   //     <b>{person.name}</b>
//   //   </li>
//   // ));
//   const filter = julio.filter((e) => e.profession === "chemist");                //excersice n1   two list differentiate by chemist and everybody else
//   const fi = julio.filter((e) => e.profession !== "chemist");

//   return (
//     <div>
//       <h1>This are chemists </h1>

//       {filter.map((t, i) => (
//         <li key={i}>{t.name}</li>
//       ))}

//       <br />
//       <h1>Everybody else </h1>

//       {fi.map((o, m) => (
//         <li key={m}>{o.name}</li>
//       ))}
//     </div>
//   );
// }
// import React from "react";
// import recipes from "./Recipes.jsx";                               //excersice n2     make two list with two different html tags,another way of doing it is mapping in the return section directly
// export default function App() {
//   const kitchen = recipes.map((e, w) => (
//     <div key={w}>
//       <h2 >{e.id}</h2>
//       <ul>
//         {e.ingredients.map((o, i) => (
//           <li key={i}>{o}</li>
//         ))}
//       </ul>
//     </div>
//   ));

//   return <div>{kitchen}</div>;
// }

// import recipes from "./Recipes.jsx";

// export default function RecipeList() {
//   return (
//     <div>
//       <h1>Recipes</h1>
//       {recipes.map((recipe) => (
//         <div key={recipe.id}>
//           <h2>{recipe.name}</h2>
//           <div style={{ color: "red" }}>{recipe.amount} </div>
//           <ul>
//             {recipe.ingredients.map((ingredient, e) => (
//               <li key={e}>{ingredient}</li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
// }
// import React, { useEffect } from "react";

// export default function App() {
//   const e = false;
//   const q = "blue picture";
//   const k="black picture";
//   useEffect(()=>
//   console.log("usefeefct")
//   )
//   if (e) {
//     return <div>{q}<img src="https://upload.wikimedia.org/wikipedia/en/0/09/Jornal_Nacional_%28logo%29.png"></img></div>;
//   } else {
//     return <div><img src="https://as1.ftcdn.net/v2/jpg/01/02/89/34/1000_F_102893427_jhcutwBfaY5NipeqPlWSnkZgvmqktSjS.jpg" height={200}></img>{k}</div>;
//   }
// }
// import React from "react";
// import { useState } from "react";
// import "./App.css";

// export default function App() {
//   const [first, setfirst] = useState();

//   return (
//     <div>
//       <div>
//         <button onClick={() => setfirst(!first)}>change question</button>
//         {first ? <div>Is the sky blue?</div> : <div>Is the earth flat</div>}
//         <h1>
//           {first ? (
//             <div>
//               Yes, its blue
//               <img
//                 src="https://static.toiimg.com/thumb/msid-99612775,width-1280,height-720,resizemode-4/99612775.jpg"
//                 height={150}
//                 alt=""
//               ></img>
//             </div>
//           ) : (
//             <div>No, it isnt   <img
//             src="https://climate.nasa.gov/system/internal_resources/details/original/309_ImageWall5_768px-60.jpg"
//             height={200}
//             alt=""
//           ></img></div>
//           )}
//         </h1>
//       </div>
//     </div>
//   );
// }
// function Item({ name, importance }) {
//   return (
//     <li className="item">
//       {name}{importance >0 && ""}
//       <i>importance:{importance}</i>
//     </li>
//   );
// }

// export default function PackingList() {
//   return (
//     <section>
//       <h1>Sally Ride's Packing List</h1>
//       <ul>
//         <Item
//           importance={9}
//           name="Space suit"
//         />
//         <Item
//           importance={0}
//           name="Helmet with a golden leaf"
//         />
//         <Item
//           importance={6}
//           name="Photo of Tam"
//         />
//       </ul>
//     </section>
//   );
// }
import { useState } from "react";

export default function App() {
  const [valuedInputs, setvaluedInputs] = useState("");
  const eventHandler = (event) => {
    setvaluedInputs(event.target.value);
  };
  const handleSubmit=(e)=>{
e.preventDefault();
  }
  console.log(valuedInputs);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>General information</h1>
        <label>
          Name:
          <input type="text"></input>
        </label>
        <label>
          Email:
          <input type="text"></input>
        </label>
        <label>
          Phone number:
          <input
            onChange={eventHandler}
            value={valuedInputs}
            type="text"
          ></input>
        </label>
        <button type="submit">Submit</button>
      <h2 style={{color:"red"}}>{valuedInputs} </h2>

        <h1>Educational experience</h1>
        <label>
          School name:
          <input type="text"></input>
        </label>
        <label>
          Title of study:
          <input type="text"></input>
        </label>
        <label>
          Date of study:
          <input type="text"></input>
        </label>
        <button>Submit</button>
      </form>

      <h1>practical experience</h1>
      <label>
        company name:
        <input type="text"></input>
      </label>
      <label>
        position title:
        <input type="text"></input>
      </label>
      <label>
        main responsibilities
        <input type="text"></input>
      </label>
      <br />
      <label>
        Time in the company
        <br />
        from
        <input type="date"></input>
        <br />
        until
        <input type="date"></input>
      </label>

      <button type="submit">Submit</button>
    </div>
  );
}
