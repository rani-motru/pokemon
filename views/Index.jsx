const React = require('react');

const myStyle = {
  color: '#ffffff',
  backgroundColor: '#000000',
};

class Index extends React.Component {
  render() {
    const { pokemon } = this.props;
  
  return (
    <div style={myStyle}>
    <h1>See All The Pokemon!</h1>
    <a href="/pokemon/new" style={myStyle}>
           new Pokemon
        </a>
    <ul>
        {pokemon.map((pokemon, i) =>(
           <li key={i}>
            <a href={`/pokemon/new `} style={myStyle}>
              <br/>
             name: {pokemon.name.charAt(0).toUpperCase()+pokemon.name.slice(1)}</a>
               <br/>
              <img src={pokemon.img}/>
           </li>
          ))}
 </ul>

 </div>
      )
    }
}
module.exports = Index;