export const SmallListItem = ({ listItem }) => {
  console.log("PARSED ITEMS!!!", listItem);
  
  const {name, age} = listItem;

  return (
    <p>
      Name: {name}, Age:{age}
    </p>
  );
};

export const LargeListItem = ({ listItem }) => {
  const {name, age, hairColor, hobbies} = listItem;

  return (
    <>
      <h1>{name}</h1>
      <p>Age: {age} years</p>
      <p>hair color: {hairColor}</p>
      <ul>
        {hobbies.map((hobby) => (
          <li key={hobby}>{hobby}</li>
        ))}
      </ul>
    </>
  );
};
