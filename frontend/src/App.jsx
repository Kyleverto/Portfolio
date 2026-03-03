import Header from "./components/Header";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Header />

      <main className="max-w-6xl mx-auto py-12 px-6">
        {/* We will build the Hero and Project Grid here next */}
        <section className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4">Project Showcase</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A collection of MERN stack applications and software projects I've
            built while studying software development.
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;
