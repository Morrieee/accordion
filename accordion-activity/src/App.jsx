import { useState } from 'react'
import './App.css'

function App() {

  const[selected, setSelected] = useState(null)

  const toggle = (i) => {
    if(selected === i){
      return setSelected(null)
    }
    setSelected(i)
    
  }

  return ( 

 <div className= 'wrapper'> 
     <div className = "top"> 
     <h2>Questions And Answers About Login</h2>
     <br></br>
        <div className= 'accordion'> 
            {data.map((item, i)=> (
              <div className = 'item'>
                <div className = 'title' onClick ={() => toggle(i)}> 
                    <h2>{item.question}</h2>
                    <span>{selected === i ? '-' : '+'}</span>
                </div>
                <div className = {selected === i ? 'content show' : 'content'
                }
              >
                  {item.answer} 
                </div>  
              </div>
            ))}

          </div>  
      </div>
  </div>
  )
}

const data = [
  {
    question: 'Do I have to allow the use of cookes?',
    answer : 
      'Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.'

  },
  {
    question: 'How do I change my My Page password?',

    answer: 'Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse.'

  },
  {
    question : 'What is BankID?',

    answer: 'Enamel pin fam sustainable woke whatever venmo. Authentic asymmetrical put a bird on it, lumbersexual activated charcoal kinfolk banjo cred pickled sartorial.'

  },
  {
    question : 'Whose birth number can I use?',
    answer : 'Edison bulb direct trade gentrify beard lo-fi seitan sustainable roof party franzen occupy squid. Knausgaard cronut succulents, scenester readymade shabby chic lyft. Copper mug meh vegan gentrify.'
  },
  {
    question : 'When do I recieve a password ordered by letter?',

    answer : 'Locavore franzen fashion axe live-edge neutra irony synth af tilde shabby chic man braid chillwave waistcoat copper mug messenger bag. Banjo snackwave blog, microdosing thundercats migas vaporware viral lo-fi seitan.'

  },
]


export default App
