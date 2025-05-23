export const NotFound = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-secondary/30 px-4">
      <div className="container max-w-3xl text-center">
        <h1 className="text-6xl font-extrabold mb-4 text-primary">404</h1>
        <p className="text-2xl mb-6 text-muted-foreground">
          Opa, essa página não foi encontrada!
        </p>
        <a
          href="/"
          className="inline-block px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition"
        >
          Voltar para o início
        </a>
      </div>
    </section>
  )
}
