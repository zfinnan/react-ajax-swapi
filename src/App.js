import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Route 
        exact
        path="/procedures" 
        render={() => { return <Skills skillsList={skillsList} />}} 
      />
      <Route 
        path="/skills/:id" 
        render={(routeProps) => {
          const id = routeProps.match.params.id
          const targetSkill = skillsList.find((p) => p.id === parseInt(id))
          return <SkillDetails skill={targetSkill} />
        }} 
      />
      <Route path="/weather" component={Weather}/>
      <Route path="/github" component={Github}/>
    </div>
    </BrowserRouter>
  );
}

export default App;
