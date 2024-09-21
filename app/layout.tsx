import 'styles/global.css'
import 'styles/home.css'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-white dark:text-white dark:bg-black',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <head>
        <meta name="viewport" />
        <title>vxnuaj</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/assets/3.png" type="image/x-icon" />
      </head>
      <body className="antialiased max-w-xl mx-auto mt-8 px-4">
        <main className="flex-auto min-w-[360px] mt-6 flex flex-col px-2 md:px-0">
          {children}
        </main>
      </body>
    </html>
  )
}
