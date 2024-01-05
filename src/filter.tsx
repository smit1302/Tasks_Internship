import React, {useState} from 'react';
interface Person{
    id: number;
    name: string;
}
interface SearchFilterProps{
    people: Person[]
}

const SearchFilter: React.FC<SearchFilterProps> = ({ people }) => {
    const [searchQuery, setSearchQuery] = useState('');
  
   const filteredPeople = people.filter((person) => {
      const normalizedQuery = searchQuery.toLowerCase();
      const normalizedName = person.name.toLowerCase();
      return normalizedName.includes(normalizedQuery);
    });
  
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(event.target.value);
    };
  
    return (
      <div>
        <h1>Filtered Array</h1>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search names..."
        />
        {searchQuery &&(
        <ul>
          {filteredPeople.map((person) => (
            <li key={person.id}>{person.name}</li>
          ))}
        </ul>
        )}
      </div>
    );
  };
  
  export default SearchFilter;