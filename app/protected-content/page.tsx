import { redirect } from 'next/navigation'
import { CustomMDX } from 'app/components/mdx'
import { serialize } from 'next-mdx-remote/serialize'
import 'styles/priv.css'
import fs from 'fs'
import path from 'path'
import { cookies } from 'next/headers' // For accessing cookies server-side

export default async function ProtectedContent() {
  // Check for the 'authenticated' cookie
  const cookieStore = cookies()
  const isAuthenticated = cookieStore.get('authenticated')

  // If the user is not authenticated, redirect to the login page (or another page)
  if (!isAuthenticated || isAuthenticated.value !== 'true') {
    redirect('/') 
  }

  // Adjust this to your file path
  const filePath = path.join(process.cwd(), 'app/protected-content/protected-content.mdx')

  // Read and serialize the MDX content
  let fileContent
  try {
    fileContent = fs.readFileSync(filePath, 'utf-8')
  } catch (err) {
    redirect('/error')  // If the file doesn't exist, redirect to an error page
  }

  // Serialize the MDX content
  const mdxSource = await serialize(fileContent)

  return (
    <section className="protected-content">
      <h1>Protected Content</h1>
      <a href="https://vxnuaj.com" style={{ fontSize: 20 }}>Go Home?</a>
      <CustomMDX source={mdxSource} />
    </section>
  )
}
