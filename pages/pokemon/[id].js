export async function getStaticPaths() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon");
  const data = await response.json();
  const paths = data.results.map((p) => ({
    params: {
      id: p.name,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon/" + context.params.id
  );
  const data = await response.json();
  return {
    props: { data },
  };
}

function Pokemon({ data }) {
  return (
    <div>
      <h1>{data.name.toUpperCase()}</h1>
      <p>Height {data.height}</p>
      <p>Weight {data.weight}</p>
    </div>
  );
}

export default Pokemon;
