export default function Home() {
  return (
    <div>
      <h1>Gerador de Cancelamento Alpha</h1>

      <div>
        <img
          src="/api/image-generator?titlte=Hello World"
          alt="Imagem gereada"
        />

        <a href="/api/image-generator?titlte=Hello World">
          /api/image-generator?titlte=Hello World
        </a>
      </div>
    </div>
  );
}
