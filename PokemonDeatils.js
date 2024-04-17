import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const PokemonDetails = ({ route }) => {
  const { pokemon } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: pokemon.imageUrl }} style={styles.pokemonImage} />
      <Text style={styles.pokemonName}>{pokemon.name}</Text>
      <Text style={styles.pokemonId}>ID: {pokemon.id}</Text>
      <Text style={styles.pokemonInfo}>Height: {pokemon.height}</Text>
      <Text style={styles.pokemonInfo}>Weight: {pokemon.weight}</Text>
      <Text style={styles.pokemonInfo}>Abilities:</Text>
      {pokemon.abilities.map((ability, index) => (
        <Text key={index} style={styles.ability}>
          {ability}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 40,
  },
  pokemonImage: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  pokemonName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  pokemonId: {
    fontSize: 18,
    marginBottom: 10,
  },
  pokemonInfo: {
    fontSize: 16,
    marginBottom: 5,
  },
  ability: {
    fontSize: 16,
    fontStyle: 'italic',
    marginBottom: 5,
  },
});

export default PokemonDetails;
