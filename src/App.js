import logo from './logo.svg';
import './App.css';
import KanbanBoard from './components/KanbanBoard/KanbanBoard';
import Header from './components/Header/Header';
import { useState } from 'react';

function App() {
  const [groupBy, setGroupBy] = useState('status'); // Default group by "status"
  const [sortBy, setSortBy] = useState('priority'); // Default sort by "priority"

  return (
    <div className="App">
      <main>
      <Header setGroupBy={setGroupBy} setSortBy={setSortBy} />
      <KanbanBoard groupBy={groupBy} sortBy={sortBy} />
      </main>
    </div>
  );
}

export default App;
