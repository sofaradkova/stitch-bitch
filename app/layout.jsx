import '@styles/globals.css'

import Navbar from '@components/Navbar'
import Provider from '@components/Provider'
import BasicFooter from '@components/Footer'

export const metadata = {
    title: "Stitch&Bitch",
    description: 'Find your community in fiber arts'
}

export default function RootLayout({ children }) {
    return (
      <html lang="en" data-theme="lemonade">
        <body>
            <Provider>
                <main className="app min-h-screen">
                    <Navbar />
                    {children}
                    <BasicFooter />
                </main>
            </Provider>
        </body>
      </html>
    )
}