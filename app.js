 // creates React element
 const heading = React.createElement("h1",{id:"heading"}, "hello world from React"); //gives Rea

/**
  * <div id="parent">
  *     <div id="child1">
  *         <h1> HI tag</h1>
  *         <h2> H2 tag</h2>
  *     </div>
  *     <div id="child2">
  *         <h1> HI tag</h1>
  *         <h2> H2 tag</h2>
  *     </div>
  * </div>
  */
 const parent2 = React.createElement("div", {id:"parent"},
    [React.createElement("div",{id:"child1"},
        [React.createElement("h1", {}, "H1 tag"), React.createElement("h2", {}, "H2 tag")] ), 
    React.createElement("div", {id:"child2"},
        [React.createElement("h1", {}, "H1 tag"), React.createElement("h2", {}, "H2 tag")])]);

const parent = React.createElement("div",{id:"parent"},
    React.createElement("div", {id:"child"}, 
        React.createElement("h1", {},"HI tag")));

 console.log(heading); //logs "React element" object
 console.log(parent);
 
 
/**
  * <div id="parent">
  *     <div id="child">
  *         <h1> HI tag</h1>
  *     </div>
  * </div>
  */
const parent1 = React.createElement("div", {id:"parent"},
    React.createElement("div", {id:"child"},
        [React.createElement("h1", {}, "H1 tag"), React.createElement("h2", {}, "H2 tag")]));

 const root = ReactDOM.createRoot(document.getElementById("root"));
 //injects h1 element inside root
 root.render(heading); //responsible to generate html tag from React element object and append to root
 
 root.render(parent2);


 