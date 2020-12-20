import React, {Component} from 'react'

const OthertableHeader = () => {
    return (
      <thead>
        <tr>
          <th>Name</th>
          <th>Kind</th>
        </tr>
      </thead>
    )
  }
  const OthertableBody = (props) => {
      const rowAnimal = props.animalData.map((row, index) => {
        return (
            <tr key={index}>
              <td>{row.name}</td>
              <td>{row.genre}</td>
            </tr>
          )
        })

        return <tbody>{rowAnimal}</tbody>
      }

      class OtherTable extends Component {
          render(){
              const {animalData} = this.props
              return (
                <table>
                  <OthertableHeader />
                  <OthertableBody animalData = {animalData} />
                </table>
              )
          }
      }
  
      export default OtherTable;