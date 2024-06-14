export interface IPerson {
  name: string;
  age: number;
  isMarried: boolean;
}

export const ComponentPerson: React.FC<IPerson> = (person) => {

return (
    <div style={{ textAlign: 'center' }}>
    <h1>{person.name}</h1>
    <p>{person.age} and {person.isMarried ? "is married" : "isnt married"}</p>
    </div>
);
};