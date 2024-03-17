// types.ts
export interface Pokemon {
    name: string;
    id: number;
    types: { type: { name: string } }[];
    abilities: { ability: { name: string } }[];
    moves: { move: { name: string } }[];
    species: { url: string };
    sprites: {
      front_default: string;
      front_shiny: string;
    };
  }
  
  export interface PokemonDetails {
    name: string;
    id: number;
    types: string[];
    abilities: string[];
    moves: string[];
    location: string;
    imageUrl: string;
    shinyImageUrl: string;
    evolutions: string[];
  }
// export interface IPokeLocation {
//     location_area: {
//         name: string,
//         url: string
//     },
//     version_details: [
//         encounter_details: [
//             chance: number,
//             condition_values: [],
//             min_level: number,
//             method: [
//                 name: string,
//                 url: string
//             ],
//             max_level: number
//         ],
//         max_chance: number,
//         version: [
//             name: string,
//             url: string
//         ]
//     ]
// }

// export interface IEvolution {
//     baby_trigger_item: null,
//     chain: {
//         evolution_details: [],
//         evolves_to: [
//             {
//                 evolution_details: [
//                     {
//                         gender: null,
//                         held_item: null,
//                         item: null,
//                         known_move: null,
//                         known_move_type: null,
//                         location: null,
//                         min_affection: null,
//                         min_beauty: null,
//                         min_happiness: number,
//                         min_level: null,
//                         needs_overworld_rain: boolean,
//                         party_species: null,
//                         party_type: null,
//                         relative_physical_stats: null,
//                         time_of_day: string,
//                         trade_species: null,
//                         trigger: {
//                             name: string,
//                             url: string
//                         },
//                         turn_upside_down: boolean
//                     }
//                 ],
//                 evolves_to: [
//                     {
//                         evolution_details: [
//                             {
//                                 "gender": null,
//                                 "held_item": null,
//                                 "item": {
//                                     name: string,
//                                     url: string,
//                                 },
//                                 "known_move": null,
//                                 "known_move_type": null,
//                                 "location": null,
//                                 "min_affection": null,
//                                 "min_beauty": null,
//                                 "min_happiness": number,
//                                 "min_level": null,
//                                 "needs_overworld_rain": boolean,
//                                 "party_species": null,
//                                 "party_type": null,
//                                 "relative_physical_stats": null,
//                                 "time_of_day": string,
//                                 "trade_species": null,
//                                 "trigger": {
//                                     "name": string,
//                                     "url": string
//                                 },
//                                 turn_upside_down: boolean
//                             }
//                         ],
//                         evolves_to: [
//                             {
//                                 evolution_details: [
//                                     {
//                                         "gender": null,
//                                         "held_item": null,
//                                         "item": {
//                                             "name": string,
//                                             "url": string
//                                         },
//                                         "known_move": null,
//                                         "known_move_type": null,
//                                         "location": null,
//                                         "min_affection": null,
//                                         "min_beauty": null,
//                                         "min_happiness": null,
//                                         "min_level": null,
//                                         "needs_overworld_rain": boolean,
//                                         "party_species": null,
//                                         "party_type": null,
//                                         "relative_physical_stats": null,
//                                         "time_of_day": "",
//                                         "trade_species": null,
//                                         "trigger": {
//                                             "name": string,
//                                             "url": string
//                                         },
//                                         "turn_upside_down": boolean
//                                     }
//                                 ]
//                             }
//                         ],
//                         is_baby: boolean,
//                         species: {
//                             name: string,
//                             url: string
//                         }
//                     }
//                 ],
//                 is_baby: boolean,
//                 species: {
//                     name: string,
//                     url: string
//                 }
//             }
//         ],

//         is_baby: boolean,
//         species: {
//             name: string,
//             url: string
//         }
//     },
//     id: number
// }

// export interface IPokemon {
//     abilities: [{

//         ability: {
//             name: string,
//             url: string
//         },
//         is_hidden: boolean,
//         slot: number
//     }
//     ],
//     base_experience: number,
//     cries: {
//         latest: string,
//         legacy: string
//     },
//     forms: {
//         name: string,
//         url: string
//     },
//     game_indices: [
//         game_index: number,
//         version: {
//             name: string,
//             url: string
//         }
//     ],
//     height: number,
//     held_items: [
//         item: {
//             name: string,
//             url: string
//         },
//         version_details: [
//             rarity: number,
//             version: {
//                 name: string,
//                 url: string
//             }
//         ]
//     ],
//     id: number,
//     is_default: boolean,
//     location_area_encounters: string,
//     moves: [
//         {
//             move: {
//                 name: string,
//                 url: string
//             },
//             version_group_details: [
//                 level_learned_at: number,
//                 move_learn_method: {
//                     name: string,
//                     url: string
//                 },
//                 version_group: {
//                     name: string,
//                     url: string
//                 }
//             ]
//         }
//     ],
//     name: string,
//     order: number,
//     past_abilities: [],
//     past_types: [],
//     species: {
//         name: string,
//         url: string
//     },
//     sprites: {
//         back_default: string,
//         back_female: string,
//         back_shiny: string,
//         back_shiny_femaile: string,
//         front_default: string,
//         front_female: string,
//         front_shiny: string,
//         front_shiny_female: string,
//         other: {
//             dream_world: {
//                 front_default: string,
//                 front_female: string
//             },
//             home: {
//                 front_default: string,
//                 front_female: string,
//                 front_shiny: string,
//                 front_shiny_female: string
//             },
//             'official-artwork': {
//                 front_default: string,
//                 front_shiny: string
//             },
//             showdown: {
//                 back_default: string,
//                 back_female: string,
//                 back_shiny: string,
//                 back_shiny_female: string,
//                 front_default: string,
//                 front_female: string,
//                 front_shiny: string,
//                 front_shiny_female: string
//             }
//         },
//         versions: {
//             'generation-i': {
//                 'red-blue': {
//                     back_default: string,
//                     back_gray: string,
//                     back_transparent: string,
//                     front_default: string,
//                     front_gray: string,
//                     front_transparent: string
//                 },
//                 yellow: {
//                     back_default: string,
//                     back_gray: string,
//                     back_transparent: string,
//                     front_default: string,
//                     front_gray: string,
//                     front_transparent: string
//                 }
//             },
//             'generation-ii': {
//                 crystal: {
//                     back_default: string,
//                     back_shiny: string,
//                     back_shiny_transparent: string,
//                     back_transparent: string,
//                     front_default: string,
//                     front_shiny: string,
//                     front_shiny_transparent: string,
//                     front_transparent: string
//                 },
//                 gold: {
//                     back_default: string,
//                     back_shiny: string,
//                     front_default: string,
//                     front_shiny: string,
//                     front_transparent: string
//                 },
//                 silver: {
//                     back_default: string,
//                     back_shiny: string,
//                     front_default: string,
//                     front_shiny: string,
//                     front_transparent: string
//                 }
//             },

//             'generation-iii': {
//                 "emerald": {
//                     "front_default": string,
//                     "front_shiny": string
//                 },
//                 "firered-leafgreen": {
//                     "back_default": string,
//                     "back_shiny": string,
//                     "front_default": string,
//                     "front_shiny": string
//                 },
//                 "ruby-sapphire": {
//                     "back_default": string,
//                     "back_shiny": string,
//                     "front_default": string,
//                     "front_shiny": string
//                 }
//             },

//             "generation-iv": {
//                 "diamond-pearl": {
//                     "back_default": string,
//                     "back_female": string,
//                     "back_shiny": string,
//                     "back_shiny_female": string,
//                     "front_default": string,
//                     "front_female": string,
//                     "front_shiny": string,
//                     "front_shiny_female": string
//                 },
//                 "heartgold-soulsilver": {
//                     "back_default": string,
//                     "back_female": string,
//                     "back_shiny": string,
//                     "back_shiny_female": string,
//                     "front_default": string,
//                     "front_female": string,
//                     "front_shiny": string,
//                     "front_shiny_female": string
//                 },
//                 "platinum": {
//                     "back_default": string,
//                     "back_female": string,
//                     "back_shiny": string,
//                     "back_shiny_female": string,
//                     "front_default": string,
//                     "front_female": string,
//                     "front_shiny": string,
//                     "front_shiny_female": string
//                 }
//             },

//             "generation-v": {
//                 "black-white": {
//                     "animated": {
//                         "back_default": string,
//                         "back_female": string,
//                         "back_shiny": string,
//                         "back_shiny_female": string,
//                         "front_default": string,
//                         "front_female": string,
//                         "front_shiny": string,
//                         "front_shiny_female": string
//                     },
//                     "back_default": string,
//                     "back_female": string,
//                     "back_shiny": string,
//                     "back_shiny_female": string,
//                     "front_default": string,
//                     "front_female": string,
//                     "front_shiny": string,
//                     "front_shiny_female": string
//                 }
//             },
//             "generation-vi": {
//                 "omegaruby-alphasapphire": {
//                     "front_default": string,
//                     "front_female": string,
//                     "front_shiny": string,
//                     "front_shiny_female": string
//                 },
//                 "x-y": {
//                     "front_default": string,
//                     "front_female": string,
//                     "front_shiny": string,
//                     "front_shiny_female": string
//                 }
//             },
//             "generation-vii": {
//                 "icons": {
//                     "front_default": string,
//                     "front_female": string,
//                 },
//                 "ultra-sun-ultra-moon": {
//                     "front_default": string,
//                     "front_female": string,
//                     "front_shiny": string,
//                     "front_shiny_female": string
//                 }
//             },
//             "generation-viii": {
//                 "icons": {
//                     "front_default": string,
//                     "front_female": string
//                 }
//             }
//         }
//     },
//     stats: [
//         {
//             base_stat: number,
//             effort: number,
//             stat: {
//                 name: string,
//                 url: string
//             }
//         }
//     ],
//     types: [
//         {
//             slots: number,
//             type: {
//                 name: string,
//                 url: string
//             }
//         }
//     ],
//     weight: number
// }

// export interface ISpecies {
//     base_happiness: number,
//     capture_rate: number,
//     color: {
//         name: string,
//         url: string
//     },
//     egg_groups: [
//         name: string,
//         url: string
//     ],
//     evolution_chain: {
//         url: string
//     },
//     evolves_from_species: {
//         name: string,
//         url: string
//     },
//     flavor_text_entries: [
//         flavor_text: string,
//         language: {
//             name: string,
//             url: string
//         },
//         version: {
//             name: string,
//             url: string
//         }
//     ],
//     forms_descriptions: [],
//     forms_switchable: boolean,
//     gender_rate: number,
//     genera: [
//         genus: string,
//         language: {
//             name: string,
//             url: string
//         }
//     ],
//     generation: {
//         name: string,
//         url: string
//     },
//     growth_rate: {
//         name: string,
//         url: string
//     },
//     habitat: {
//         name: string,
//         url: string
//     },
//     has_gender_differences: boolean,
//     hatch_counter: number,
//     id: number,
//     is_baby: boolean,
//     is_legendary: boolean,
//     name: string,
//     names: [
//         language: {
//             name: string,
//             url: string
//         }
//     ]
// }