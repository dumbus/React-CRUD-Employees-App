import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

function App() {

  const data = [
    {name: 'John C.', salary: 3000, increase: false, id: 1},
    {name: 'Alex S.', salary: 800, increase: false, id: 2},
    {name: 'Adam W.', salary: 1000, increase: false, id: 3},
    {name: 'Max D.', salary: 1200, increase: false, id: 4},
    {name: 'Michel S.', salary: 1500, increase: true, id: 5}
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