type Props = {
  children: React.ReactNode
}

export default async function RootLayout({ children }: Props) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
          <main className="grow bg-primary-light text-white">{children}</main>
      </body>
    </html>
  )
}
