
import './App.css';
import { useState } from 'react';

const App = () => {

  const [zombieFighters, setZombieFighters] = useState([
    {
      id: 1,
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: '/images/survivor.jpg',
    },
    {
      id: 2,
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: '/images/scavenger.jpg',
    },
    {
      id: 3,
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: '/images/shadow.jpg',
    },
    {
      id: 4,
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: '/images/tracker.jpg',
    },
    {
      id: 5,
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: '/images/sharpshooter.jpg',
    },
    {
      id: 6,
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: '/images/medic.jpg',
    },
    {
      id: 7,
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: '/images/engineer.jpg',
    },
    {
      id: 8,
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: '/images/brawler.jpg',
    },
    {
      id: 9,
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: '/images/infiltrator.jpg',
    },
    {
      id: 10,
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: '/images/leader.jpg',
    },
  ]);

  const [team , setTeam] = useState ([]); 

  const [money , setMoney] = useState(30);

  const fighterAdding = (newFighter) => {
    // update money
    setMoney (money - newFighter.price);  
 
    // remove the selected fighter from zombieFighter
    const newZombieFighter = zombieFighters.filter((fighter) => fighter.id !== newFighter.id );
    setZombieFighters(newZombieFighter);

    // add the selected fighter to the team
    const newTeam = [...team,newFighter];
    setTeam(newTeam);
  }

  
  const handleAddFighter = (newFighter) => {

    // check if there's enough money
    money < newFighter.price ? window.alert("Not enough money") : fighterAdding(newFighter);
  }


  // remove the selected fighter 
  const fighterRemoving = (remFighter) => {
    // update money
    setMoney (money + remFighter.price);
   
    // add the selected fighter from zombieFighter
    const newZombieFighter = [...zombieFighters,remFighter];
    setZombieFighters(newZombieFighter);

    // remove the selected fighter from team
    const newTeam = team.filter((fighter) => fighter.id !== remFighter.id );
    setTeam(newTeam);
  }


  const handleRemoveFighter = (remFighter) => {
    fighterRemoving(remFighter);
  }


  // create totalStrength variable to keep track of the total strength with reduce()
  const totalStrength = team.reduce((accumulator, current) => {
    return accumulator + current.strength; // sum all of those team.strength
  }, 0);


  // create totalStrength variable to keep track of the total strength with reduce()
  const totalAgility = team.reduce((accumulator, current) => {
    return accumulator + current.agility; // sum all of those team.agility
  }, 0);

  const [mode, setMode] = useState('dark');

  const handleMode = (modeValue) => {
    console.log(modeValue);
    setMode(modeValue);
  }

  return (
    <div className={mode}>
      <div>
        <button onClick = {() => handleMode ('dark')}>Dark Mode</button>
        <button onClick = {() => handleMode ('light')}>Light Mode</button>
        <button onClick = {() => handleMode ('neon')}>Neon Mode</button>
        <button onClick = {() => handleMode ('night')}>Night Mode</button>
      </div>
      <h1>Zombie Fighters</h1>
      <h2>Money: {money}</h2>
      <h2>Team Strength: {totalStrength} </h2>
      <h2>Team Agility: {totalAgility} </h2>
      <h2>Team</h2>
        {
          team.length === 0 ? <p>Pick some team members!</p> : 
          <ul>
          {
            team.map((fighter) => (
              <li key = {fighter.id}> 
                <img src={fighter.img} alt="" />
                <p><strong>{fighter.name}</strong></p>
                <p>Price: {fighter.price}</p>
                <p>Strength: {fighter.strength}</p>
                <p>Agility: {fighter.agility}</p>
                <button onClick={() => handleRemoveFighter (fighter)}>Remove</button>
          
              </li>

            ))}
        </ul>
        }
      <h2>Fighters</h2>
      <ul>
        {
          zombieFighters.map((fighter) => (
            <li key = {fighter.id}> 
              <img src={fighter.img} alt="" />
              <p><strong>{fighter.name}</strong></p>
              <p>Price: {fighter.price}</p>
              <p>Strength: {fighter.strength}</p>
              <p>Agility: {fighter.agility}</p>
              <button onClick={() => handleAddFighter (fighter)}>Add</button>
            </li>
          ))}
      </ul>

    </div>
  );
}

export default App

