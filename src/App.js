import ToastContainer, { toast } from "./components/Toast";

function App() {
  const showInfo = () => toast.info("This is an info message")
  const showError = () => toast.error("This is an error message")

  return (
    <>
      <button className="btn btn-primary m-3" onClick={showInfo}>Show info toast</button> <br />
      <button className="btn btn-danger m-3" onClick={showError}>Show error toast</button>
      <ToastContainer />
    </>
  );
}

export default App;
