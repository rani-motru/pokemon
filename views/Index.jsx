const React = require("react");
const myStyle = {
  color: "#ffffff",
  backgroundColor: "#000000",
};

class Index extends React.Component {
  render() {
    const { pokemon } = this.props;

    return (
      <div style={myStyle}>
        <h1>See All The Pokemon!</h1>
        <a href="/pokemon/new" style={myStyle}>
          Creat new Pokemon
        </a>
        {/* <form action="/pokemon/search" method="post">
          search by name:
          <input type="text" name="name" />
          <button type="submit">submit</button>
        </form> */}
        <ul>
          {pokemon.map((pokemon, i) => {
            return (
              <li key={i}>
                <a href={`/pokemon/${pokemon._id}`} style={myStyle}>
                  Name:
                  <br />
                  {pokemon.name}
                  </a> {' '}<img src={pokemon.img} alt="s" />
                  <br />
                  <a href={`/pokemon/${pokemon._id}/edit`}> Edit This Pokemon Character</a>
                                <form action={`/pokemon/${pokemon._id}?_method=DELETE`} method="POST">
                                    <input type="submit" value="DELETE" />
                                </form>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

module.exports = Index;

