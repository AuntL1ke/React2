import NativeCity from "./NativeCity";

export default function ListCity({ city }) {
  return (
    <>
      <h2>City List</h2>
      {city.map((u, index) => (
        <NativeCity key={index} {...u} />
      ))}
    </>
  );
}
