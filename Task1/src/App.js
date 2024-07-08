import UserCard from "./components/UserCard";
import Timer from "./components/Timer";
import "./styles.css";
import ListUsers from "./components/ListUsers";
import ListCity from "./components/ListCity";
import NativeCity from "./components/NativeCity";

export default function App() {
  // JSX - JavaScript HTML (XML)
  const USERS = [
    {
      id: 1,
      name: "Semen",
      address: "Kos",
      phone: "+380984573215",
      email:"semenkos2005@gmail.com",
      hobby: { title: "Cars", description: "Info hobby" },
    },
    
  ];
  const CITY = [
    {
      city:"Lviv",
      country:"Ukraine",
      year:"1256"
    }
  ]
  return (
    <div className="App">
        <h1>Hello CodeSandbox</h1>
        <Timer start="10" />
        <Timer />
        <h2>Start editing to see some magic happen!</h2>
        <p>{new Date().getFullYear()}</p>
        <p>2+3={2 + 3}</p>
        {/* <UserCard name="Tetiana" address="Rivne" position="Teacher" />
        <UserCard name="Denis" address="Lviv" position="Student" />
        <UserCard name="Denis" address="Lviv" position="Student" /> */}
        {/* <UserCard {...USERS[0]} />
        <UserCard {...USERS[1]} />
        <UserCard {...USERS[2]} />
        */}
        <ListUsers users={USERS} />
        <ListCity city={CITY}/>
        <Timer start="20" />
      </div>
  );
}
