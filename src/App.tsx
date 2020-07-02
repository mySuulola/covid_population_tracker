import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import TaskInputField  from './components/TaskInputField';
import TaskDisplayField from './components/TaskDisplayField';
import todoStore from './store/todostore';

const store = createStore(todoStore);


const App: React.FC = () => {

  return (
    <Provider store={store}>
      <div className="container-fluid p-5">
        <TaskDisplayField />
        <TaskInputField />

      </div>

    </Provider>

  )

}

export default App;
