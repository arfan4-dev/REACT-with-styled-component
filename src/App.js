import logo from './logo.svg';
// import './App.css';
import styled, {css} from 'styled-components'

const Button=styled.button`
background-color:"red";
color:"white";
margin:10px;
  font-size:${({priamry})=>(priamry?"50px":"20px")};
  padding:5px;
  display:inline-block;
  border:5px solid green;
  ${({primary})=>(primary && css `
  
  background-color:green;
  color:#fff
  `)};
${({secondary})=>(secondary && css `
  
  background-color:pink;
  color:white
  `)};
  `;
const bigButton=styled(Button)`
font-size:3rem;
`;
 



const Link=styled.a.attrs({
  target:"_blank"
})`
`
function App() {
  return (
    <div className="App">
      <Link target="" href="https://www.google.com">This is Link</Link>
    {/* <Button primary>primary</Button>
     <Button secondary>Secondary</Button>
     <bigButton secondary>BigButton</bigButton>
     <bigButton primary>BigButton</bigButton> */}
    {/* <DIV>a</DIV> */}

    </div>
  );
}

export default App;
