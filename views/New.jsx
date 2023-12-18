const React = require('react');
const imgsize = {
    width: "100px",
    height: "100px",
  };
const pokenum = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
class New extends React.Component {
    render () {
        return (
            <div>
                <h1>New pokemon Page</h1>
                {/* NOTE: action will be the route, method will be the HTTP verb */}
                <form action='/pokemon' method="POST">
                    {/* Name: <input type="text" name="name" /><br /> */}
                    name: < input type="text" name="name"/>
                    <br/>
                    {/* img: < input type="text" name="name"/> <br /> */}
                    Choose Photo:
                    <br/>
                    {pokenum.map((num ,i) =>{
                        return (
                        <label key ={i}>
                        <input type="submit" name="img" value={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
                            pokenum}.png`}/>
                       < img
                  key={i}
                  style={imgsize}
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
                    pokenum}.png`}
                />
                 </label>
                        )
                    })}
                    
                    <br/>
                    <input type="submit" name="" value="get a new pokemon"/>
               
                </form>
            </div>
        )
    }
}

module.exports = New;







