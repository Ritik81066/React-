function App() {

  return (
    <>
    <UserContextProvider>
      <h1>Welcome to chai or code</h1>
      <Login></Login>
      <Profile />
    </UserContextProvider>
    </>
  )
}

export default App
