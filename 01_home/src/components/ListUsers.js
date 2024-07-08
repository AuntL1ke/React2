import UserCard from "./UserCard";

export default function ListUsers({ users }) {
  console.log(users);
  //   let arr = [2, 3, 4];
  //   console.log(arr);
  //   let arrNew = arr.map((item) => Math.pow(item, 2));
  //   console.log(arrNew);
  //   let arrNew1 = arr.map((item) => {
  //     return Math.pow(item, 2);
  //   });
  //   console.warn(arrNew1);
  return (
    <>
      <h2>Users LISTS</h2>
      {/* <UserCard {...users[0]} />
      <UserCard {...users[1]} />
      <UserCard {...users[2]} /> */}

      {users.map((u, index) => (
        // <UserCard name={u.name} address={u.address} position={u.position} />
        <UserCard key={index} {...u} />
        // u.name
      ))}
      {/* {users.map((u) => (
        // <UserCard name={u.name} address={u.address} position={u.position} />
        <UserCard key={u.id} {...u} />
        // u.name
      ))} */}
    </>
  );
}
