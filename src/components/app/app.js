import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {name: 'John C.', salary: 3000, increase: false, rise: true, id: 1},
        {name: 'Alex S.', salary: 800, increase: true, rise: false, id: 2},
        {name: 'Adam W.', salary: 1000, increase: false, rise: false, id: 3},
        {name: 'Max D.', salary: 1200, increase: false, rise: false, id: 4},
        {name: 'Michel S.', salary: 1500, increase: false, rise: false, id: 5}
      ]
    }
    this.maxId = 6;
  }

  addItem = (name, salary) => {
    const newItem = {
      name: name,
      salary: salary,
      increase: false,
      rise: false,
      id: this.maxId++
    }

    this.setState(({data}) => {
      const newData = [...data, newItem];

      return {
        data: newData
      }
    })
  }

  deleteItem = (id) => {
    this.setState(({data}) => {
      return {
        data: data.filter(item => item.id !== id)
      }
    })
  }

  onToggleProp = (id, prop) => {
    this.setState(({data}) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return {...item, [prop]: !item[prop]}
        }
        return item;
      })
    }))
  }

  render() {
    const total = this.state.data.length;
    const increased = this.state.data.filter((item) => item.increase).length;

    return(
      <div className="app">
        <AppInfo
          total={total}
          increased={increased}/>
  
        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>
  
        <EmployeesList
          data={this.state.data}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}/>
        <EmployeesAddForm onAdd={this.addItem}/>
      </div>
    );
  }
}

export default App;