export function Footer() {
  return (
    <footer className="py-10">
      <div className="container mx-auto max-w-6xl px-4 text-sm text-muted-foreground">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p>{'© '}{new Date().getFullYear()} {'Stefano Racca. All rights reserved.'}</p>
        </div>
      </div>
    </footer>
  )
}
