import UserCard from "./components/UserCard";
import Timer from "./components/Timer";
import "./styles.css";
import ListUsers from "./components/ListUsers";

export default function App() {
  // JSX - JavaScript HTML (XML)
  const USERS = [
    {
      id: 1,
      name: "Tetiana",
      address: "Rivne",
      position: "Teacher",
      hobby: { title: "Cars", description: "Info hobby" },
    },
    {
      id: 2,
      name: "Denis",
      address: "Lviv",
      position: "Student",
      hobby: { title: "Games", description: "Info hobby" },
    },
    {
      id: 3,
      name: "Denis",
      address: "Rivne",
      position: "Student",
      hobby: { title: "Sports", description: "Info hobby" },
    },
  ];
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
      <Timer start="20" />
    </div>
  );
}
