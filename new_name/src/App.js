import logo from './logo.svg';
import './App.css';
import Info from './components/Info'; // Ensure correct case and path

function App() {
  const clubData = {
    name: "'Dynamo' Kyiv",
    city: "Kyiv",
    year: 1927,
    herb: "Dynamo.png",
    achievements: {
      medals: 10,
      cups: 5,
      goals: 200
    },
    squad: ["Player1", "Player2", "Player3"]
  };

  return (
    <div className="container">
      <Info clubData={clubData} />
    </div>
  );
}

export default App;
