import React from 'react';
import StudentDashboard from './components/StudentDashboard';

function App() {
  // Fake data to test the design
  const testData = { name: "Lucas (Test Student)" };

  return (
    <StudentDashboard data={testData} />
  );
}

export default App;