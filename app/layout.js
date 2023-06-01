import "./globals.css";

export const metadata = {
  title: "Ahead",
  description: "task based assignment!"
}

const RootLayout = ({children}) => {
  return (
    <html>
      <body>
        <div className='main'>
          <main className='app'>
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}

export default RootLayout