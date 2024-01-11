function App() {
  const handleCallApi = () => {
    fetch('http://localhost:3000/api/users', {
      method: 'get',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  return (
    <div className="text-3xl font-bold text-red-700">
      <button
        className="border-2 border-blue-300 rounded-md py-3 px-2 w-28"
        onClick={handleCallApi}
      >
        API
      </button>
    </div>
  );
}

export default App;
