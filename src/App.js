import React, {Component} from 'react'
import Table from './Table'
import OtherTable from './OtherTable'

class App extends Component {
    render() {
        const characters = [
            {
              name: 'Charlie',
              job: 'Janitor',
            },
            {
              name: 'Mac',
              job: 'Bouncer',
            },
            {
              name: 'Dee',
              job: 'Aspring actress',
            },
            {
              name: 'Dennis',
              job: 'Bartender',
            },
          ]

          const animals =[
              {
                  name :'georges',
                  genre :'dog'
              },
              {
                  name :'fabrice',
                  genre : 'cat'
              },
          ]
      
          return (
            <div className="container">
              <Table characterData ={characters} />
              <OtherTable animalData = {animals}/>
    
            </div>
        
      )
    }
  }

  
export default App