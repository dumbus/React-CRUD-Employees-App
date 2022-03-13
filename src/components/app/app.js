import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

function App() {

  const data = [
    {name: 'John C.', salary: 3000, increase: false},
    {name: 'Alex S.', salary: 800, increase: false},
    {name: 'Adam W.', salary: 1000, increase: false},
    {name: 'Max D.', salary: 1200, increase: false},
    {name: 'Michel S.', salary: 1500, increase: true}
  ];

  return(
    <div className="app">
      <AppInfo />

      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>

      <EmployeesList data={data} />
      <EmployeesAddForm />
    </div>
  );
}

export default App;