import TestPage from '@pages/TestPage';

function App() {
  var obj = {
    str: /abc/,
  };

  console.log(1, obj.str);

  return <TestPage />;
}

// TODO: import order

export default App;
