//---------------------- Task 1 ----------------------
// import React from "react";
// import "./styles.css";
// import ClubInfo from "./Task 1/ClubInfo";
// import ClubAchievements from "./Task 1/ClubAchievements";
// import ClubSquad from "./Task 1/ClubSquad";

// const clubs = [
//   {
//     name: "Barcelona",
//     city: "SpainBarcelona, Spain",
//     founded: "1899",
//     emblem:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA_zjRYB2bdQjXuxgOePl6EDgCqL1XeqoNMw&s",
//     achievements: {
//       medals: 99,
//       cups: 89,
//       goals: 10355,
//     },
//     squad: [
//       "Marc-André ter Stegen",
//       "Ronald Araújo",
//       "Jules Koundé",
//       "Andreas Christensen",
//       "Alejandro Balde",
//       "Sergio Busquets",
//       "Pedri",
//       "Gavi",
//       "Frenkie de Jong",
//       "Raphinha",
//       "Robert Lewandowski",
//       "Ousmane Dembélé",
//       "Ansu Fati",
//       "Ferran Torres",
//       "Eric García",
//       "Marcos Alonso",
//       "Sergi Roberto",
//       "Franck Kessié",
//       "Pablo Torre",
//       "Iñaki Peña",
//     ],
//   },
//   {
//     name: "Real Madrid",
//     city: "Madrid, Spain",
//     founded: "1902",
//     emblem: "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg",
//     achievements: {
//       medals: 95,
//       cups: 92,
//       goals: 10234,
//     },
//     squad: [
//       "Thibaut Courtois",
//       "Daniel Carvajal",
//       "Éder Militão",
//       "David Alaba",
//       "Ferland Mendy",
//       "Casemiro",
//       "Toni Kroos",
//       "Luka Modrić",
//       "Vinícius Júnior",
//       "Karim Benzema",
//       "Marco Asensio",
//       "Eden Hazard",
//       "Federico Valverde",
//       "Rodrygo",
//       "Éder Militão",
//       "Luka Jović",
//       "Lucas Vázquez",
//       "Isco",
//       "Eduardo Camavinga",
//       "Andriy Lunin",
//     ],
//   },
// ];

// const App = () => {
//   return (
//     <div className="App">
//       {clubs.map((club, index) => (
//         <div key={index}>
//           <ClubInfo
//             name={club.name}
//             city={club.city}
//             founded={club.founded}
//             emblem={club.emblem}
//           />
//           <ClubAchievements
//             medals={club.achievements.medals}
//             cups={club.achievements.cups}
//             goals={club.achievements.goals}
//           />
//           <ClubSquad squad={club.squad} />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default App;

// ---------------------- Task 2 ----------------------
import React from "react";
import Game from "./Task 2/Game";
import "./styles.css";

const App = () => {
  return (
    <div className="App">
      <Game />
    </div>
  );
};

export default App;
