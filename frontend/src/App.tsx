function App() {
  return (
    <div>
      <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-light border-bottom shadow-sm">
        <div className="container">
          <nav className="my-2 my-md-0 mr-md-3">
            <img src={ImgDsDark} alt="DevSuperior" width="120" />
          </nav>
        </div>
      </div>
      <footer className="footer mt-auto py-3 bg-dark">
        <div className="container">
          <p className="text-light">App desenvolvido por <a href="https://github.com/acenelio" target="_blank" rel="noreferrer">Nelio Alves</a></p>
          <p className="text-light"><small><strong>Semana Spring React</strong><br/>
            Evento promovido pela escola DevSuperior: <a href="https://instagram.com/devsuperior.ig" target="_blank" rel="noreferrer">@devsuperior.ig</a></small></p>
        </div>
    </footer>
    </div>
  );
}

export default App;
