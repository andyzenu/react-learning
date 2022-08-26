//const { MetaProperty } = require("babel-standalone")

let theVariable = "loram"

let person1 = {
  firstName: "John",
  lastName: "Dode"
}
function firstUp(obj) {
  return obj.toUpperCase()
}
function person(obj) {
  return {
    firstName: firstUp(obj.firstName),
    lastName: firstUp(obj.lastName)
  }
}

let style = {
  backgroundColor: "red",
  color: "white",
  font: "inherit",
  border: "1px solid blue",
  padding: "8px",
  cursor: "pointer"
}

let arrayNames = ["John", "Paul", "George", "Ringo"]
let currentRow = -1
let arrayNamesList = arrayNames.map((item, index) => {
  return (<li style={{color:currentRow===index?'red':''}} key={index} onClick={()=>{currentRow = index; console.log(currentRow, index)}}>{item}</li>)
})

let arrayDepartments = ["sales", "engineering", "marketing", "finance"]

function newDepartment(item) {
  let arrayDepartmentsList = []

  for (let i = 0; i < item.length; i++) {
    arrayDepartmentsList.push(<li key={i}>{item[i]}</li>)
  }
  return arrayDepartmentsList
}

let objectPeople = {
  person1: {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    job: "web developer"
  },
  person2: {
    firstName: "Jane",
    lastName: "Moe",
    age: 20,
    job: "web designer"
  }
}

let player = {
  name: "james",
  age: 36,
  position: "Small Forward"
}

function playerInformation(v, i) {
  return <li key={i}>{v}</li>
}

function Mycom (props) {
  return (<div>This is my Dom -- {props.age} -- {props.name}</div>)
}

Mycom.prototypes = {
  name: PropTypes.number
}

let com = <Mycom {...player}/>

Mycom.defaultProps = {
  name: "player name",
  age: 0,
  position: "none"
}

let defaultCom = <Mycom/>


let first = (
  <div>
    <h1 className="container">{firstUp(theVariable)}</h1>
    <h2 style={style}>
      {person(person1).firstName} {person(person1).lastName}
    </h2>
    <ul>{arrayNamesList}</ul>
    <ol>{newDepartment(arrayDepartments)}</ol>
    <ul>
      {Object.keys(player).map(playerInformation)}
    </ul>

    {com}

    {/* {defaultCom} */}
  </div>
)

