import '@styles/globals.css'

import Navbar from '@components/Navbar'
import Provider from '@components/Provider'

export const metadata = {
    title: "Stitch&Bitch",
    description: 'Find your community in fiber arts'
}

export default function RootLayout({ children }) {
    return (
      <html lang="en" data-theme="lemonade">
        <body>
            <Provider>
                <main className="app">
                    <Navbar />
                    {children}
                </main>
            </Provider>
        </body>
      </html>
    )
}