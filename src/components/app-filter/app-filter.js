import './app-filter.css';

const AppFilter = () => {
  return (
    <div className="btn-group">
      <div className="button btn btn-light" type="button">
        Все сотрудники.
      </div>
      <div className="button btn btn-outline-light" type="button">
        Сотрудники на повышение
      </div>
      <div className="button btn btn-outline-light" type="button">
        З/П больше 1000$
      </div>
    </div>
  );
}

export default AppFilter;