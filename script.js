/** @format */

const people = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDevelopersByMap() {
  //Write your code here
   const developers = people.map(person => {
    if (person.profession === "developer") {
      console.log(person.name);
    }
   });
}

function PrintDeveloperbyForEach() {
  //Write your code here
  people.forEach(person => {
    if(person.profession === "developer"){
      console.log(person.name);
    }
  });
}

function addData() {
  //Write your code here
  const newPerson = {id:4,name:"susan",age:"20",profession:"intern"};
  people.push(newPerson);
  console.log(people);
}

function removeAdmin() {
  //Write your code here
  const updatedPeople = people.filter(person => person.profession !== 'admin');
  console.log(updatedPeople);
}

function concatenateArray() {
  //Write your code here
  const newPeople =  [{id:5,name:"peter",age:"22",profession:"developer"},
  {id:6,name:"lisa",age:"23",profession:"intern"},
  {id:7,name:"david",age:"24",profession:"designer"}];
  const allPeople = people.concat(newPeople);
  console.log(allPeople);
}
