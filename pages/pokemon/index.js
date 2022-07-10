import styles from "../../styles/Pokemon.module.css";
import Head from "next/head";

export async function getStaticProps() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon");
  const data = await response.json();
  return {
    props: { pokemonList: data.results },
  };
}

function PokemonList({ pokemonList }) {
  return (
    <>
      <Head>
        <title>Pokemon List</title>
      </Head>
      <div>
        <h1>Pokemon List</h1>
        {pokemonList.map((p) => (
          <div key={p.name}>
            <a className={styles.single}>
              <h3>{p.name.toUpperCase()}</h3>
            </a>
          </div>
        ))}
      </div>
    </>
  );
}

export default PokemonList;
