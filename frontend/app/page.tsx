import Button from "@/components/UI/button";

export default function Home() {

  return (
    <div className="flex flex-col  min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="flex flex-row gap-4 items-center justify-center">
        Bienvenue dans votre espace administrateur !
      </header>
      <main className="flex flex-col gap-[32px] items-center justify-center">
        <Button title="Voir les articles" href='/products-list' />
      </main>
      {/* <footer className="flex gap-[24px] flex-wrap items-center justify-center">
        
      </footer> */}
    </div>
  );
}
