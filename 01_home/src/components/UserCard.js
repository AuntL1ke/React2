import Hobby from "./Hobby";
//create new component
// props => input parameters
//props ={key1:value1, key2:value2...}
export default function UserCard(props) {
  //destructarization
  // let arr1 = [2, 3, 5, 6];
  // let [a, ...d] = arr1;
  // console.log(arr1);
  // console.log(a, " ;", d);
  // let user1 = { name: "Andriy", lastName: "Soroka" };
  // let { ...newUser } = user1;
  // let user2 = user1;
  // console.log(user1);
  // console.log(user2);
  // console.log(newUser);
  // user1.name = "Igor";
  // console.log(user1);
  // console.log(user2);
  // console.log(newUser);

  //  let name=props.name;
  // ...
  // const {name, address, position}=props;
  //JSX=> class=> className
  return (
    //component murkup
    // React.Component: <>
    <div className="user-card">
      <h3>User Card</h3>
      <p> Name {props.name}</p>
      <p> Address: {props.address}</p>
      <p> Position: {props.position}</p>
      {/* <Hobby {...props.hobby} /> */}
      <Hobby title={props.hobby.title} description={props.hobby.description} />
      <img
        width="200"
        src="https://images.squarespace-cdn.com/content/v1/61c4da8eb1b30a201b9669f2/1696691175374-MJY4VWB1KS8NU3DE3JK1/Sounds-of-Nature.jpg"
      />
    </div>
  );
}
//default inicialization props
UserCard.defaultProps = { name: "Noname", surname: "NoSurname" };
//додати компоненту Hobby author project with individual information
