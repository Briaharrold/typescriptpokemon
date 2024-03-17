import React from 'react'
import { useState, useEffect } from 'react';

interface Pokemon {
    id: number;
    name: string;
    sprites: {
      front_default: string;
      front_shiny: string;
    };
    types: {
      type: {
        name: string;
      };
    }[];
    abilities: {
      ability: {
        name: string;
      };
    }[];
    moves: {
      move: {
        name: string;
      };
    }[];
    locationAreaEncounters: string;
    evolutionChain: {
      chain: {
        species: {
          name: string;
        };
        evolves_to: {
          species: {
            name: string;
          };
          evolves_to: {
            species: {
              name: string;
            };
          }[];
        }[];
      };
    };
  }
  
const PokeDex = () => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [search, setSearch] = useState('');
  const [favorites, setFavorites] = useState<Pokemon[]>([]);

  const getPokemon = async () => {
    try {
      let url;
      if (isNaN(+search)) {
        url = `https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}`;
      } else {
        url = `https://pokeapi.co/api/v2/pokemon/${search}`;
      }
      const res = await fetch(url);
      const data = await res.json();

      const locationAreaEncounters = data.location_area_encounters
        ? data.location_area_encounters[0].location_area.name
        : 'N/A';

      const evolutionChain = await fetch(data.species.evolution_chain.url);
      const evolutionData = await evolutionChain.json();

      setPokemon({
        id: data.id,
        name: data.name,
        sprites: {
          front_default: data.sprites.front_default,
          front_shiny: data.sprites.front_shiny,
        },
        types: data.types,
        abilities: data.abilities,
        moves: data.moves.slice(0, 5),
        locationAreaEncounters,
        evolutionChain: evolutionData,
      });
    } catch (err) {
      console.error(err);
    }
  };

  const getRandomPokemon = async () => {
    const randomId = Math.floor(Math.random() * 649) + 1;
    const url = `https://pokeapi.co/api/v2/pokemon/${randomId}`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.abilities[0].ability);
  
    const locationAreaEncounters = data.location_area_encounters && data.location_area_encounters.length > 0 && data.location_area_encounters[0].location_area
      ? data.location_area_encounters[0].location_area.name
      : 'N/A';
  
    const evolutionChain = await fetch(data.species.evolution_chain.url);
    const evolutionData = await evolutionChain.json();
  
    setPokemon({
      id: data.id,
      name: data.name,
      sprites: {
        front_default: data.sprites.front_default,
        front_shiny: data.sprites.front_shiny,
      },
      types: data.types,
      abilities: data.abilities,
      moves: data.moves.slice(0, 5),
      locationAreaEncounters,
      evolutionChain: evolutionData,
    });
    return data;
  };

  const handleFavorite = () => {
    if (pokemon) {
      setFavorites([...favorites, pokemon]);
    }
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    if (search.trim() !== '') {
      getPokemon();
    }
  }, [search]);

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search by name or number"
          value={search}
          onChange={handleSearch}
          className="border border-gray-300 rounded-md p-2"
        />
        <button
          onClick={getRandomPokemon}
          className="bg-blue-500 text-white rounded-md p-2"
        >
          Random Pokemon
        </button>
      </div>

      {pokemon && (
        <div className="bg-white rounded-md p-4 shadow-md">
          <div className="flex items-center mb-4">
            <img
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
              className="w-32 h-32"
            />
            <img
              src={pokemon.sprites.front_shiny}
              alt={`${pokemon.name} shiny`}
              className="w-32 h-32"
            />
          </div>
          <h2 className="text-2xl font-bold mb-2">{pokemon.name}</h2>
          <p className="mb-2">
            <span className="font-bold">Location:</span>{' '}
            {pokemon.locationAreaEncounters}
          </p>
          <p className="mb-2">
            <span className="font-bold">Type:</span>{' '}
            {pokemon.types.map((type) => type.type.name).join(', ')}
          </p>
          <p className="mb-2">
            <span className="font-bold">Abilities:</span>{' '}
            {pokemon.abilities.map((ability) => ability.ability.name).join(', ')}
          </p>
          <p className="mb-2">
            <span className="font-bold">Moves:</span>{' '}
            {pokemon.moves.map((move) => move.move.name).join(', ')}
          </p>
          <p className="mb-2">
            <span className="font-bold">Evolution Path:</span>{' '}
            {pokemon.evolutionChain.chain.evolves_to.length === 0
              ? 'N/A'
              : pokemon.evolutionChain.chain.species.name +
                ' -> ' +
                pokemon.evolutionChain.chain.evolves_to
                  .map((evolution) => evolution.species.name)
                  .join(' -> ')}
          </p>
          <button
            onClick={handleFavorite}
            className="bg-yellow-500 text-white rounded-md p-2"
          >
            Add to Favorites
          </button>
        </div>
      )}

      <div className="mt-4">
        <h3 className="text-xl font-bold mb-2">Favorites</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {favorites.map((favorite) => (
            <div
              key={favorite.id}
              className="bg-white rounded-md p-4 shadow-md"
            >
              <img
                src={favorite.sprites.front_default}
                alt={favorite.name}
                className="w-24 h-24 mx-auto"
              />
              <p className="text-center font-bold">{favorite.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokeDex;