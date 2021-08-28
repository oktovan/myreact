import React from 'react';

class Template extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	favoritecolor: "red",
    	username:"oktovan",
    	age:null,
    	errormessage:'',
    	mycar:'Volvo',
    	description: 'The content of a textarea goes in the value attribute'
    };
  }
  
  // static getDerivedStateFromProps(props, state) {
  //   return {favoritecolor: props.favcol };
  // }

  componentDidMount() {
    setTimeout(() => {
      this.setState({favoritecolor: "yellow"})
    }, 1000)
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById("div1").innerHTML =
    "Before the update, the favorite was " + prevState.favoritecolor;
  }
  componentDidUpdate() {
    document.getElementById("div2").innerHTML =
    "The updated favorite is " + this.state.favoritecolor;
  }

  // componentWillUnmount() {
  //   alert("The component named Header is about to be unmounted.");
  // }

  changeColor = (arg,event) => {
    this.setState({favoritecolor: arg});
    alert(event.type); 
    //event type is click
  }

  mySubmitHandler = (event) => {
    event.preventDefault();
    alert("You are submitting " + this.state.username);
  }

  myChangeHandler = (event) => {
  	let nam = event.target.name;
    let val = event.target.value;
    let err = '';
    if (nam === "age") {
      if (val !=="" && !Number(val)) {
        err = <strong>Your age must be a number</strong>;
      }
    }
    //alert("onChange " + nam + " new value " + val);
    this.setState({errormessage: err});
    this.setState({[nam]: val});
  }

  render() {
    return (
      <div>
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        <div id="div1"></div>
        <div id="div2"></div>
        <button onClick={(event) => this.changeColor("Blue",event)}>Change Color!</button>
        {/*<button onClick={this.changeColor}>Change Color!</button>*/}
        <form onSubmit={this.mySubmitHandler}>
      		<h1>Hello {this.state.username} {this.state.age}</h1>
      		<p>Enter your name:</p>
	        <input
	        	type='text'
	        	name='username'
	        	onChange={this.myChangeHandler}
	      	/>
	      	<p>Enter your age:</p>
	        <input
	        	type='text'
	        	name='age'
	        	onChange={this.myChangeHandler}
	      	/>
	      	<input
        		type='submit'
      		/>
      		<p>{this.state.errormessage}</p>
      		
      		<select value={this.state.mycar} 
      		onChange={this.myChangeHandler}
      		name='mycar'>
        		<option value="Ford">Ford</option>
        		<option value="Volvo">Volvo</option>
        		<option value="Fiat">Fiat</option>
      		</select>

      		<p><textarea value={this.state.description} /></p>
      		
      	</form>
      </div>
    );
  }

}
export default Template;

//ReactDOM.render(<Header />, document.getElementById('root'));
// Mounting
// constructor()
// getDerivedStateFromProps()
// render()
// componentDidMount()

// Updating
// getDerivedStateFromProps()
// shouldComponentUpdate()
// render()
// getSnapshotBeforeUpdate()
// componentDidUpdate()

// Unmounting
//componentWillUnmount()