const React = require('react');

const imgsize = {
    width: "100px",
    height: "100px",
  };
  const pokenum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,19,20,21,22,23,24,25,26,27,28,29,30];

class Edit extends React.Component {
    render() {
        return (
            <div>
                <h1> Edit the pokemon </h1>
                <form action={`/pokemon/${this.props.pokemonm._id}?_method=PUT`} method="POST">
                    name: <input type="text" name="name" defaultValue={this.props.pokemon.name} /><br />
                    img:
                    <br />
                     {pokenum.map((num, index) => {
                      return (
                        <label key={index}>
                       <input type="radio" name="img" 
                       value={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokenum[num-1]}.png`} />
                    <br />
                    <img style={imgsize}
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
                    pokenum[num-1]}.png`}/>
                    </label>
                      )
                     })}
                    <br />
                    <input type="submit" value="Submit Changes" />
                </form>
            </div>

        )
    }
}
module.exports = Edit;