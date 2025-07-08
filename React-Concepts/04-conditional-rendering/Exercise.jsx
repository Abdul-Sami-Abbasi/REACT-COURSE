const ValidPassword = () =>  <h1>Valid Password</h1>;
const InValidPassword = () =>  <h1>Invalid Password!</h1>;

const Password = ({isValid}) => {
  if(isValid){
    return <ValidPassword/>
  }else{
    return <InValidPassword/>
  }
}

function App(){
  return(
  <section>
    <Password isValid={true}/>
  </section>
  )
}

export default App;