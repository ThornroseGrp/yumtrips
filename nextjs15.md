TITLE: Adding HTML and Body Tags to Next.js Root Layout (TypeScript)
DESCRIPTION: This snippet demonstrates the correct way to define the `<html>` and `<body>` tags within a Next.js Root Layout component. It shows how to wrap the `children` prop with these essential HTML tags, which is crucial for resolving the 'Missing Root Layout tags' error and ensuring proper page structure and rendering in a Next.js application.
SOURCE: https://github.com/vercel/next.js/blob/canary/errors/missing-root-layout-tags.mdx#_snippet_0

LANGUAGE: TypeScript
CODE:
```
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  )
}
```

----------------------------------------

TITLE: Running Next.js Development Server with npm
DESCRIPTION: This command initiates the Next.js development server using npm. It compiles the application and serves it locally, usually at `http://localhost:3000`, providing a development environment with hot module replacement.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-makeswift/README.md#_snippet_8

LANGUAGE: bash
CODE:
```
npm run dev
```

----------------------------------------

TITLE: Running Next.js Development Server with Yarn
DESCRIPTION: This command executes the `dev` script defined in `package.json` using Yarn, starting the Next.js development server. It provides the same functionality as `npm run dev` but uses Yarn.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-prepr/README.md#_snippet_8

LANGUAGE: bash
CODE:
```
yarn dev
```

----------------------------------------

TITLE: Migrating getStaticProps and getServerSideProps to App Router with Fetch API
DESCRIPTION: This snippet demonstrates how to replace `getStaticProps` and `getServerSideProps` from the `pages` directory with the new `fetch()` API in the `app` directory. It shows examples for static data fetching (cached indefinitely), dynamic data fetching (no caching), and revalidated data fetching (cached for a specific duration.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/02-guides/migrating/app-router-migration.mdx#_snippet_22

LANGUAGE: tsx
CODE:
```
export default async function Page() {
  // This request should be cached until manually invalidated.
  // Similar to `getStaticProps`.
  // `force-cache` is the default and can be omitted.
  const staticData = await fetch(`https://...`, { cache: 'force-cache' })

  // This request should be refetched on every request.
  // Similar to `getServerSideProps`.
  const dynamicData = await fetch(`https://...`, { cache: 'no-store' })

  // This request should be cached with a lifetime of 10 seconds.
  // Similar to `getStaticProps` with the `revalidate` option.
  const revalidatedData = await fetch(`https://...`, {
    next: { revalidate: 10 },
  })

  return <div>...</div>
}
```

LANGUAGE: jsx
CODE:
```
export default async function Page() {
  // This request should be cached until manually invalidated.
  // Similar to `getStaticProps`.
  // `force-cache` is the default and can be omitted.
  const staticData = await fetch(`https://...`, { cache: 'force-cache' })

  // This request should be refetched on every request.
  // Similar to `getServerSideProps`.
  const dynamicData = await fetch(`https://...`, { cache: 'no-store' })

  // This request should be cached with a lifetime of 10 seconds.
  // Similar to `getStaticProps` with the `revalidate` option.
  const revalidatedData = await fetch(`https://...`, {
    next: { revalidate: 10 },
  })

  return <div>...</div>
}
```

----------------------------------------

TITLE: Authenticating User Server Action - TSX/JSX
DESCRIPTION: Extends the `createUser` server function to include authentication logic. It requires an authentication token, uses an `authenticate` helper function from a library, and throws an error if the user is unauthorized before creating the user in the database, highlighting security considerations.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/05-api-reference/01-directives/use-server.mdx#_snippet_4

LANGUAGE: tsx
CODE:
```
'use server'\n\nimport { db } from '@/lib/db' // Your database client\nimport { authenticate } from '@/lib/auth' // Your authentication library\n\nexport async function createUser(\n  data: { name: string; email: string },\n  token: string\n) {\n  const user = authenticate(token)\n  if (!user) {\n    throw new Error('Unauthorized')\n  }\n  const newUser = await db.user.create({ data })\n  return newUser\n}
```

LANGUAGE: jsx
CODE:
```
'use server'\n\nimport { db } from '@/lib/db' // Your database client\nimport { authenticate } from '@/lib/auth' // Your authentication library\n\nexport async function createUser(data, token) {\n  const user = authenticate(token)\n  if (!user) {\n    throw new Error('Unauthorized')\n  }\n  const newUser = await db.user.create({ data })\n  return newUser\n}
```

----------------------------------------

TITLE: Generating Open Graph Image with External Data (TypeScript)
DESCRIPTION: This snippet demonstrates how to create an Open Graph image dynamically in Next.js by fetching post data from an external API using `fetch` and displaying the post title. It utilizes the `params` object to extract the `slug` for the API call, and sets metadata like `alt`, `size`, and `contentType` for the image.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/05-api-reference/03-file-conventions/01-metadata/opengraph-image.mdx#_snippet_20

LANGUAGE: TypeScript
CODE:
```
import { ImageResponse } from 'next/og'

export const alt = 'About Acme'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image({ params }: { params: { slug: string } }) {
  const post = await fetch(`https://.../posts/${params.slug}`).then((res) =>
    res.json()
  )

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {post.title}
      </div>
    ),
    {
      ...size,
    }
  )
}
```

----------------------------------------

TITLE: Refactoring Synchronous `params` and `searchParams` Access in Next.js 15 (After)
DESCRIPTION: This snippet demonstrates the corrected asynchronous access pattern for `params` and `searchParams` required in Next.js 15. The component is now `async`, and `params` and `searchParams` are `await`ed before their values are destructured, ensuring compatibility with the new Promise-based API. The `app/page.js` example shows that the `export * from` pattern remains valid as long as the exported component correctly handles the asynchronous values.
SOURCE: https://github.com/vercel/next.js/blob/canary/errors/next-prerender-sync-params.mdx#_snippet_1

LANGUAGE: jsx
CODE:
```
export default async function ComponentThatWillBeExportedAsPage({ params, searchParams }) {
  const { slug } = await params;
  const { page } = await searchParams
  return <RenderList slug={slug} page={page}>
}
```

LANGUAGE: jsx
CODE:
```
export * from '.../some-file'
```

----------------------------------------

TITLE: Using revalidatePath in a Server Action - Next.js - TypeScript
DESCRIPTION: This example shows how to integrate `revalidatePath` within a Next.js Server Action. After an asynchronous operation like `submitForm()`, `revalidatePath('/')` is called to ensure the cache for the root path is invalidated, reflecting any data changes made by the action.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/05-api-reference/04-functions/revalidatePath.mdx#_snippet_5

LANGUAGE: ts
CODE:
```
'use server'

import { revalidatePath } from 'next/cache'

export default async function submit() {
  await submitForm()
  revalidatePath('/')
}
```

----------------------------------------

TITLE: Running Next.js Development Server
DESCRIPTION: These commands initiate the Next.js development server, making the application accessible locally at `http://localhost:3000`. They demonstrate how to execute the `dev` script using various popular JavaScript package managers.
SOURCE: https://github.com/vercel/next.js/blob/canary/packages/create-next-app/templates/default/js/README-template.md#_snippet_0

LANGUAGE: bash
CODE:
```
npm run dev
```

LANGUAGE: bash
CODE:
```
yarn dev
```

LANGUAGE: bash
CODE:
```
pnpm dev
```

LANGUAGE: bash
CODE:
```
bun dev
```

----------------------------------------

TITLE: Creating a Server Component Page with Data Fetching (TypeScript)
DESCRIPTION: Defines a Server Component page that imports and renders a Client Component. It demonstrates the new data fetching API by asynchronously fetching posts directly within the Server Component and passing the data as props to the Client Component. This replaces `getServerSideProps` or `getStaticProps`.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/02-guides/migrating/app-router-migration.mdx#_snippet_19

LANGUAGE: tsx
CODE:
```
// Import your Client Component
import HomePage from './home-page'

async function getPosts() {
  const res = await fetch('https://...')
  const posts = await res.json()
  return posts
}

export default async function Page() {
  // Fetch data directly in a Server Component
  const recentPosts = await getPosts()
  // Forward fetched data to your Client Component
  return <HomePage recentPosts={recentPosts} />
}
```

----------------------------------------

TITLE: Revalidating Path Cache in Server Actions (Next.js)
DESCRIPTION: This code illustrates how to revalidate the Next.js Cache for a specific path (`/posts`) within a Server Action using the `revalidatePath` API. This ensures that subsequent requests to `/posts` will fetch fresh data, invalidating any previously cached content. It's typically used after data mutations like creating a new post.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-building-your-application/02-data-fetching/03-server-actions-and-mutations.mdx#_snippet_12

LANGUAGE: ts
CODE:
```
'use server'

import { revalidatePath } from 'next/cache'

export async function createPost() {
  try {
    // ...
  } catch (error) {
    // ...
  }

  revalidatePath('/posts')
}
```

LANGUAGE: js
CODE:
```
'use server'

import { revalidatePath } from 'next/cache'

export async function createPost() {
  try {
    // ...
  } catch (error) {
    // ...
  }

  revalidatePath('/posts')
}
```

----------------------------------------

TITLE: Fetching Data in Server Component (JSX)
DESCRIPTION: Demonstrates how to use the extended `fetch` function within an `async` Server Component written in JSX to fetch data from an external API and render it.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/05-api-reference/04-functions/fetch.mdx#_snippet_1

LANGUAGE: jsx
CODE:
```
export default async function Page() {
  let data = await fetch('https://api.vercel.app/blog')
  let posts = await data.json()
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}
```

----------------------------------------

TITLE: Resolving Math.random() Prerendering Issue with `connection` and `Suspense` in Next.js (After Fix)
DESCRIPTION: This solution refactors the `Page` component to use `Suspense` and the `connection` function from `next/server`. By wrapping the `DynamicProductsView` in `Suspense` and calling `await connection()` within `DynamicProductsView` before `Math.random()`, Next.js is informed that this part of the component should not be prerendered, ensuring `Math.random()` executes on each request and provides unique values.
SOURCE: https://github.com/vercel/next.js/blob/canary/errors/next-prerender-random.mdx#_snippet_1

LANGUAGE: jsx
CODE:
```
import { connection } from 'next/server'

async function ProductsSkeleton() {
  ...
}

export default async function Page() {
  const products = await getCachedProducts();
  return <Suspense fallback={<ProductsSkeleton />}>
    <DynamicProductsView products={products} />
  </Suspense>
}

async function DynamicProductsView() {
  await connection();
  const randomSeed = Math.random()
  const randomizedProducts = randomize(products, randomSeed)
  return <ProductsView products={randomizedProducts} />
}
```

----------------------------------------

TITLE: Starting Next.js Development Server - Bash
DESCRIPTION: This snippet provides commands to start the Next.js development server using various package managers. Running one of these commands launches the application locally, typically accessible at http://localhost:3000, enabling real-time page updates during development.
SOURCE: https://github.com/vercel/next.js/blob/canary/packages/create-next-app/templates/app-empty/js/README-template.md#_snippet_0

LANGUAGE: bash
CODE:
```
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

----------------------------------------

TITLE: Defining Multiple Fonts as CSS Variables in Next.js Layout (App Router)
DESCRIPTION: This snippet shows how to initialize multiple Google Fonts (Inter, Roboto Mono) with `variable` properties in the Next.js App Router's `RootLayout`. These variables are then applied to the `html` element's `className`, making the fonts accessible as CSS variables for styling throughout the application.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/05-api-reference/02-components/font.mdx#_snippet_29

LANGUAGE: TSX
CODE:
```
import { Inter, Roboto_Mono } from 'next/font/google'
import styles from './global.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto_mono.variable}`}>
      <body>
        <h1>My App</h1>
        <div>{children}</div>
      </body>
    </html>
  )
}
```

LANGUAGE: JSX
CODE:
```
import { Inter, Roboto_Mono } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto_mono.variable}`}>
      <body>
        <h1>My App</h1>
        <div>{children}</div>
      </body>
    </html>
  )
}
```

----------------------------------------

TITLE: Integrating Dynamic User Component with Suspense (JavaScript)
DESCRIPTION: This snippet demonstrates how to integrate a dynamic component (`User`) into a page that uses Partial Prerendering. By wrapping the `User` component with `Suspense`, the static parts of the page are prerendered, while the dynamic `User` component is streamed, improving initial load performance.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/01-getting-started/12-partial-prerendering.mdx#_snippet_8

LANGUAGE: JSX
CODE:
```
import { Suspense } from 'react'
import { User, AvatarSkeleton } from './user'

export const experimental_ppr = true

export default function Page() {
  return (
    <section>
      <h1>This will be prerendered</h1>
      <Suspense fallback={<AvatarSkeleton />}>
        <User />
      </Suspense>
    </section>
  )
}
```

----------------------------------------

TITLE: Passing Data from Server to Client Components via Props
DESCRIPTION: This snippet illustrates how data fetched on the server can be passed down to a Client Component using standard React props. The `Page` Server Component fetches `post.likes` and passes it directly to the `LikeButton` Client Component, which then uses this data for its client-side functionality.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/01-getting-started/07-server-and-client-components.mdx#_snippet_3

LANGUAGE: TypeScript
CODE:
```
import LikeButton from '@/app/ui/like-button'
import { getPost } from '@/lib/data'

export default async function Page({ params }: { params: { id: string } }) {
  const post = await getPost(params.id)

  return <LikeButton likes={post.likes} />
}
```

LANGUAGE: JavaScript
CODE:
```
import LikeButton from '@/app/ui/like-button'
import { getPost } from '@/lib/data'

export default async function Page({ params }) {
  const post = await getPost(params.id)

  return <LikeButton likes={post.likes} />
}
```

LANGUAGE: TypeScript
CODE:
```
'use client'

export default function LikeButton({ likes }: { likes: number }) {
  // ...
}
```

LANGUAGE: JavaScript
CODE:
```
'use client'

export default function LikeButton({ likes }) {
  // ...
}
```

----------------------------------------

TITLE: Defining a Dashboard Layout Component in Next.js
DESCRIPTION: This snippet demonstrates how to define a layout component for a specific route segment, such as a dashboard. It accepts a `children` prop, which will be populated with the nested route segments, and wraps them within a `<section>` element. This pattern allows for shared UI across multiple pages within a specific part of the application.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/05-api-reference/03-file-conventions/layout.mdx#_snippet_0

LANGUAGE: typescript
CODE:
```
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <section>{children}</section>
}
```

LANGUAGE: javascript
CODE:
```
export default function DashboardLayout({ children }) {
  return <section>{children}</section>
}
```

----------------------------------------

TITLE: Caching ORM/Database Queries with `unstable_cache` in Next.js App Router
DESCRIPTION: Illustrates using `unstable_cache` to cache data retrieved from an ORM or database in the Next.js App Router. It defines a `getCachedPosts` function that wraps a database query, applies a `posts` tag, and sets a revalidation time, allowing for on-demand invalidation via `revalidateTag`.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/02-guides/incremental-static-regeneration.mdx#_snippet_7

LANGUAGE: tsx
CODE:
```
import { unstable_cache } from 'next/cache'
import { db, posts } from '@/lib/db'

const getCachedPosts = unstable_cache(
  async () => {
    return await db.select().from(posts)
  },
  ['posts'],
  { revalidate: 3600, tags: ['posts'] }
)

export default async function Page() {
  const posts = getCachedPosts()
  // ...
}
```

LANGUAGE: jsx
CODE:
```
import { unstable_cache } from 'next/cache'
import { db, posts } from '@/lib/db'

const getCachedPosts = unstable_cache(
  async () => {
    return await db.select().from(posts)
  },
  ['posts'],
  { revalidate: 3600, tags: ['posts'] }
)

export default async function Page() {
  const posts = getCachedPosts()
  // ...
}
```

----------------------------------------

TITLE: Applying Title Template in Next.js Layout (TSX)
DESCRIPTION: This snippet demonstrates how to use `title.template` in a Next.js layout to add a prefix or suffix to titles defined in child route segments. A `default` title is required when using a template.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/05-api-reference/04-functions/generate-metadata.mdx#_snippet_7

LANGUAGE: tsx
CODE:
```
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s | Acme',
    default: 'Acme', // a default is required when creating a template
  },
}
```

----------------------------------------

TITLE: Revalidating Cache Tag in Server Action - TypeScript
DESCRIPTION: This TypeScript Server Action demonstrates how to use `revalidateTag` to invalidate the 'posts' cache tag. After an asynchronous operation like `addPost()`, calling `revalidateTag('posts')` ensures that any cached data associated with the 'posts' tag will be revalidated on the next visit to a relevant path.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/05-api-reference/04-functions/revalidateTag.mdx#_snippet_2

LANGUAGE: ts
CODE:
```
'use server'

import { revalidateTag } from 'next/cache'

export default async function submit() {
  await addPost()
  revalidateTag('posts')
}
```

----------------------------------------

TITLE: Basic Usage of create-next-app CLI (Bash)
DESCRIPTION: This command provides the fundamental syntax for `create-next-app`, allowing users to quickly scaffold a new Next.js project. It accepts an optional `project-name` and various `options` to customize the initial setup, serving as the entry point for creating Next.js applications.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/05-api-reference/06-cli/create-next-app.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app@latest [project-name] [options]
```

----------------------------------------

TITLE: Revalidating Cache Tag in Server Action - JavaScript
DESCRIPTION: This JavaScript Server Action demonstrates how to use `revalidateTag` to invalidate the 'posts' cache tag. After an asynchronous operation like `addPost()`, calling `revalidateTag('posts')` ensures that any cached data associated with the 'posts' tag will be revalidated on the next visit to a relevant path.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/05-api-reference/04-functions/revalidateTag.mdx#_snippet_3

LANGUAGE: js
CODE:
```
'use server'

import { revalidateTag } from 'next/cache'

export default async function submit() {
  await addPost()
  revalidateTag('posts')
}
```

----------------------------------------

TITLE: Extracting Path Parameters with URLPattern in Next.js Middleware (TypeScript)
DESCRIPTION: This snippet provides a fix for the deprecated `request.page` by using the `URLPattern` API to parse path parameters (`locale` and `slug`) from the request URL. It defines a `params` helper function to abstract the URL pattern matching and then uses the extracted parameters for redirection, achieving similar functionality without relying on deprecated features.
SOURCE: https://github.com/vercel/next.js/blob/canary/errors/middleware-request-page.mdx#_snippet_1

LANGUAGE: TypeScript
CODE:
```
import { NextRequest, NextResponse } from 'next/server'

const PATTERNS = [
  [
    new URLPattern({ pathname: '/:locale/:slug' }),
    ({ pathname }) => pathname.groups,
  ],
]

const params = (url) => {
  const input = url.split('?')[0]
  let result = {}

  for (const [pattern, handler] of PATTERNS) {
    const patternResult = pattern.exec(input)
    if (patternResult !== null && 'pathname' in patternResult) {
      result = handler(patternResult)
      break
    }
  }
  return result
}

export function middleware(request: NextRequest) {
  const { locale, slug } = params(request.url)

  if (locale && slug) {
    const { search, protocol, host } = request.nextUrl
    const url = new URL(`${protocol}//${locale}.${host}/${slug}${search}`)
    return NextResponse.redirect(url)
  }
}
```

----------------------------------------

TITLE: Defining Basic Root Layout in Next.js App Router
DESCRIPTION: This snippet defines the basic structure of a root layout component in a Next.js App Router application. It's a React Server Component that receives `children` as a prop, representing the content of nested pages or layouts. Initially, it returns a placeholder, indicating where the main HTML structure will be placed.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/02-guides/migrating/from-create-react-app.mdx#_snippet_2

LANGUAGE: TypeScript
CODE:
```
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return '...'
}
```

LANGUAGE: JavaScript
CODE:
```
export default function RootLayout({ children }) {
  return '...'
}
```

----------------------------------------

TITLE: Handling Form Submissions with Server Actions and FormData (Next.js)
DESCRIPTION: This snippet demonstrates how to create a Server Action function (`createInvoice`) that automatically receives the `FormData` object from an HTML form submission. It shows how to extract individual field values using `formData.get()` and how to assign the Server Action to the form's `action` attribute. This pattern is used for processing form data directly on the server.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/02-guides/forms.mdx#_snippet_0

LANGUAGE: TypeScript
CODE:
```
export default function Page() {
  async function createInvoice(formData: FormData) {
    'use server'

    const rawFormData = {
      customerId: formData.get('customerId'),
      amount: formData.get('amount'),
      status: formData.get('status')
    }

    // mutate data
    // revalidate the cache
  }

  return <form action={createInvoice}>...</form>
}
```

LANGUAGE: JavaScript
CODE:
```
export default function Page() {
  async function createInvoice(formData) {
    'use server'

    const rawFormData = {
      customerId: formData.get('customerId'),
      amount: formData.get('amount'),
      status: formData.get('status')
    }

    // mutate data
    // revalidate the cache
  }

  return <form action={createInvoice}>...</form>
}
```

----------------------------------------

TITLE: Protecting Server-Only Code with `server-only` in Next.js
DESCRIPTION: This updated getData function imports the server-only package as its first line. This ensures that any attempt to import this module into a Client Component will result in a build-time error, effectively preventing sensitive server-only code, like API keys, from being inadvertently bundled for the client.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/01-getting-started/07-server-and-client-components.mdx#_snippet_13

LANGUAGE: JavaScript
CODE:
```
import 'server-only'

export async function getData() {
  const res = await fetch('https://external-service.com/data', {
    headers: {
      authorization: process.env.API_KEY,
    },
  })

  return res.json()
}
```

----------------------------------------

TITLE: Updating Post Server Action (Inline) - TSX/JSX
DESCRIPTION: Demonstrates using `'use server'` inline within an asynchronous function (`updatePost`) defined inside a Next.js Server Component page. This server function handles form data, saves the post, and then revalidates the page path using `revalidatePath` from `next/cache`.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/05-api-reference/01-directives/use-server.mdx#_snippet_3

LANGUAGE: tsx
CODE:
```
import { EditPost } from './edit-post'\nimport { revalidatePath } from 'next/cache'\n\nexport default async function PostPage({ params }: { params: { id: string } }) {\n  const post = await getPost(params.id)\n\n  async function updatePost(formData: FormData) {\n    'use server'\n    await savePost(params.id, formData)\n    revalidatePath(`/posts/${params.id}`)\n  }\n\n  return <EditPost updatePostAction={updatePost} post={post} />\n}
```

LANGUAGE: jsx
CODE:
```
import { EditPost } from './edit-post'\nimport { revalidatePath } from 'next/cache'\n\nexport default async function PostPage({ params }) {\n  const post = await getPost(params.id)\n\n  async function updatePost(formData) {\n    'use server'\n    await savePost(params.id, formData)\n    revalidatePath(`/posts/${params.id}`)\n  }\n\n  return <EditPost updatePostAction={updatePost} post={post} />\n}
```

----------------------------------------

TITLE: Defining a Basic Next.js Server Action
DESCRIPTION: This snippet shows the basic structure for defining a Server Action in Next.js. The 'use server' directive marks the function to be executed on the server. This action can then be imported and called directly from client or server components.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/02-guides/single-page-applications.mdx#_snippet_9

LANGUAGE: tsx
CODE:
```
'use server'

export async function create() {}
```

LANGUAGE: js
CODE:
```
'use server'

export async function create() {}
```

----------------------------------------

TITLE: Initializing a Next.js Project Automatically with create-next-app
DESCRIPTION: This command initiates the automatic setup of a new Next.js application using the `create-next-app` CLI tool. It prompts the user for project details like name, TypeScript, ESLint, Tailwind CSS, `src/` directory usage, App Router, Turbopack, and import aliases, then creates the project folder and installs dependencies.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/01-getting-started/01-installation.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app@latest
```

----------------------------------------

TITLE: Running Next.js Development Server Locally
DESCRIPTION: These commands install the project dependencies using npm and then start the Next.js development server. This allows the application to be accessed locally, typically at `http://localhost:3000`.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-fauna/README.md#_snippet_3

LANGUAGE: bash
CODE:
```
npm install
npm run dev
```

----------------------------------------

TITLE: Migrating Next.js Cookies API to Async (TypeScript)
DESCRIPTION: This snippet demonstrates the recommended asynchronous usage of the `cookies` API in Next.js 15. The `cookies()` function now returns a Promise, requiring `await` to access the cookie store.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/02-guides/upgrading/version-15.mdx#_snippet_2

LANGUAGE: typescript
CODE:
```
import { cookies } from 'next/headers'

// Before
const cookieStore = cookies()
const token = cookieStore.get('token')

// After
const cookieStore = await cookies()
const token = cookieStore.get('token')
```

----------------------------------------

TITLE: Generating Dynamic Metadata with `generateMetadata` Function in Next.js (TypeScript)
DESCRIPTION: This snippet illustrates how to generate dynamic metadata using an asynchronous `generateMetadata` function in a `page.tsx` file. It accepts `params` and `searchParams` to read route information and `parent` to access and extend metadata from parent segments. This is ideal for metadata that depends on external data or dynamic route segments, requiring `Metadata` and `ResolvingMetadata` types from 'next'.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/05-api-reference/04-functions/generate-metadata.mdx#_snippet_2

LANGUAGE: tsx
CODE:
```
import type { Metadata, ResolvingMetadata } from 'next'

type Props = {
  params: Promise<{ id: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const { id } = await params

  // fetch data
  const product = await fetch(`https://.../${id}`).then((res) => res.json())

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []

  return {
    title: product.title,
    openGraph: {
      images: ['/some-specific-page-image.jpg', ...previousImages],
    },
  }
}

export default function Page({ params, searchParams }: Props) {}
```

----------------------------------------

TITLE: Storing Session Secret Key in .env (Bash)
DESCRIPTION: This snippet demonstrates how to store the generated session secret key as an environment variable named `SESSION_SECRET` in a `.env` file. This practice keeps sensitive information out of source control and allows for easy configuration.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/02-guides/authentication.mdx#_snippet_14

LANGUAGE: Bash
CODE:
```
SESSION_SECRET=your_secret_key
```

----------------------------------------

TITLE: Using next/image Component in Next.js
DESCRIPTION: Demonstrates the recommended way to display images in Next.js using the `<Image />` component from `next/image`. This component automatically handles image optimization, improving performance. It requires `src`, `alt`, `width`, and `height` props.
SOURCE: https://github.com/vercel/next.js/blob/canary/errors/no-img-element.mdx#_snippet_0

LANGUAGE: jsx
CODE:
```
import Image from 'next/image'

function Home() {
  return (
    <Image
      src="https://example.com/hero.jpg"
      alt="Landscape picture"
      width={800}
      height={500}
    />
  )
}

export default Home
```

----------------------------------------

TITLE: Fetching Data with End-to-End Type Safety in Next.js App Router (TypeScript)
DESCRIPTION: This snippet demonstrates how to fetch data asynchronously within a Next.js App Router component (`app/page.tsx`) while maintaining end-to-end type safety. It shows a `getData` function that fetches from an API and returns the JSON response, which is then consumed by the `Page` component. The key benefit is that the return value is not serialized, allowing complex types like `Date`, `Map`, and `Set` to be passed directly.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/05-api-reference/05-config/02-typescript.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
async function getData() {
  const res = await fetch('https://api.example.com/...')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  return res.json()
}

export default async function Page() {
  const name = await getData()

  return '...'
}
```

----------------------------------------

TITLE: Optimizing Bundle Size with Client Component Boundaries
DESCRIPTION: This example demonstrates how to strategically place the `'use client'` directive to minimize client-side JavaScript bundles. It shows a `Search` component marked as a Client Component for interactivity, while the parent `Layout` component remains a Server Component, importing the `Search` component without needing to be a client component itself. This approach ensures only interactive parts are bundled for the client.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/01-getting-started/07-server-and-client-components.mdx#_snippet_2

LANGUAGE: TypeScript
CODE:
```
'use client'

export default function Search() {
  // ...
}
```

LANGUAGE: JavaScript
CODE:
```
'use client'

export default function Search() {
  // ...
}
```

LANGUAGE: TypeScript
CODE:
```
// Client Component
import Search from './search'
// Server Component
import Logo from './logo'

// Layout is a Server Component by default
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav>
        <Logo />
        <Search />
      </nav>
      <main>{children}</main>
    </>
  )
}
```

LANGUAGE: JavaScript
CODE:
```
// Client Component
import Search from './search'
// Server Component
import Logo from './logo'

// Layout is a Server Component by default
export default function Layout({ children }) {
  return (
    <>
      <nav>
        <Logo />
        <Search />
      </nav>
      <main>{children}</main>
    </>
  )
}
```

----------------------------------------

TITLE: Implementing Sequential Data Fetching with React Suspense in Next.js
DESCRIPTION: This example demonstrates sequential data fetching where the `Playlists` component fetches data only after the `Page` component has retrieved artist information, as `Playlists` depends on the `artistID`. It also shows how to use React's `<Suspense>` component to provide a fallback UI, improving user experience by enabling streaming while data is being fetched.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/01-getting-started/08-fetching-data.mdx#_snippet_10

LANGUAGE: tsx
CODE:
```
export default async function Page({
  params,
}: {
  params: Promise<{ username: string }>
}) {
  const { username } = await params
  // Get artist information
  const artist = await getArtist(username)

  return (
    <>
      <h1>{artist.name}</h1>
      {/* Show fallback UI while the Playlists component is loading */}
      <Suspense fallback={<div>Loading...</div>}>
        {/* Pass the artist ID to the Playlists component */}
        <Playlists artistID={artist.id} />
      </Suspense>
    </>
  )
}

async function Playlists({ artistID }: { artistID: string }) {
  // Use the artist ID to fetch playlists
  const playlists = await getArtistPlaylists(artistID)

  return (
    <ul>
      {playlists.map((playlist) => (
        <li key={playlist.id}>{playlist.name}</li>
      ))}
    </ul>
  )
}
```

LANGUAGE: jsx
CODE:
```
export default async function Page({ params }) {
  const { username } = await params
  // Get artist information
  const artist = await getArtist(username)

  return (
    <>
      <h1>{artist.name}</h1>
      {/* Show fallback UI while the Playlists component is loading */}
      <Suspense fallback={<div>Loading...</div>}>
        {/* Pass the artist ID to the Playlists component */}
        <Playlists artistID={artist.id} />
      </Suspense>
    </>
  )
}

async function Playlists({ artistID }) {
  // Use the artist ID to fetch playlists
  const playlists = await getArtistPlaylists(artistID)

  return (
    <ul>
      {playlists.map((playlist) => (
        <li key={playlist.id}>{playlist.name}</li>
      ))}
    </ul>
  )
}
```

----------------------------------------

TITLE: Displaying Server Function Errors with useActionState in Next.js (React)
DESCRIPTION: This React client component demonstrates how to use the `useActionState` hook to manage the state and actions of a form. It passes the `createPost` server action and an initial state to the hook, then uses the returned `state` to conditionally display error messages to the user. It takes no explicit props but relies on the `createPost` action for its functionality.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/01-getting-started/11-error-handling.mdx#_snippet_1

LANGUAGE: TSX
CODE:
```
'use client'

import { useActionState } from 'react'
import { createPost } from '@/app/actions'

const initialState = {
  message: '',
}

export function Form() {
  const [state, formAction, pending] = useActionState(createPost, initialState)

  return (
    <form action={formAction}>
      <label htmlFor="title">Title</label>
      <input type="text" id="title" name="title" required />
      <label htmlFor="content">Content</label>
      <textarea id="content" name="content" required />
      {state?.message && <p aria-live="polite">{state.message}</p>}
      <button disabled={pending}>Create Post</button>
    </form>
  )
}
```

LANGUAGE: JSX
CODE:
```
'use client'

import { useActionState } from 'react'
import { createPost } from '@/app/actions'

const initialState = {
  message: '',
}

export function Form() {
  const [state, formAction, pending] = useActionState(createPost, initialState)

  return (
    <form action={formAction}>
      <label htmlFor="title">Title</label>
      <input type="text" id="title" name="title" required />
      <label htmlFor="content">Content</label>
      <textarea id="content" name="content" required />
      {state?.message && <p aria-live="polite">{state.message}</p>}
      <button disabled={pending}>Create Post</button>
    </form>
  )
}
```

----------------------------------------

TITLE: Creating Root Layout for Next.js App Router (TypeScript)
DESCRIPTION: This TypeScript React component defines the mandatory root layout for applications using the Next.js App Router. It wraps the entire application, requiring `<html>` and `<body>` tags, and receives `children` as a prop to render nested routes and components within the layout.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/01-getting-started/01-installation.mdx#_snippet_3

LANGUAGE: typescript
CODE:
```
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
```

----------------------------------------

TITLE: Calling Server Action from Client Component (TypeScript)
DESCRIPTION: This Client Component imports and calls a Server Action defined in a separate module. The 'use client' directive marks this component as a Client Component, enabling interactive client-side functionality while still leveraging server-side mutations.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-building-your-application/02-data-fetching/03-server-actions-and-mutations.mdx#_snippet_4

LANGUAGE: TypeScript
CODE:
```
'use client'

import { create } from './actions'

export function Button() {
  return <button onClick={() => create()}>Create</button>
}
```

----------------------------------------

TITLE: Basic Navigation with Next.js Link Component
DESCRIPTION: This snippet demonstrates the fundamental usage of the `next/link` component for client-side navigation. It imports `Link` and renders it with a simple string `href` prop, directing the user to the `/dashboard` route upon clicking. This approach enables fast, pre-fetched transitions without full page reloads.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/05-api-reference/02-components/link.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
import Link from 'next/link'

export default function Page() {
  return <Link href="/dashboard">Dashboard</Link>
}
```

LANGUAGE: jsx
CODE:
```
import Link from 'next/link'

export default function Page() {
  return <Link href="/dashboard">Dashboard</Link>
}
```

LANGUAGE: tsx
CODE:
```
import Link from 'next/link'

export default function Home() {
  return <Link href="/dashboard">Dashboard</Link>
}
```

LANGUAGE: jsx
CODE:
```
import Link from 'next/link'

export default function Home() {
  return <Link href="/dashboard">Dashboard</Link>
}
```

----------------------------------------

TITLE: Implementing Optimistic Updates with useOptimistic in TypeScript
DESCRIPTION: This example shows how to use the `useOptimistic` hook to immediately update the UI with a new message before the server action (`send`) completes. This provides a more responsive user experience by assuming the action will succeed and updating the UI instantly.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/02-guides/forms.mdx#_snippet_15

LANGUAGE: TypeScript
CODE:
```
'use client'

import { useOptimistic } from 'react'
import { send } from './actions'

type Message = {
  message: string
}

export function Thread({ messages }: { messages: Message[] }) {
  const [optimisticMessages, addOptimisticMessage] = useOptimistic<
    Message[],
    string
  >(messages, (state, newMessage) => [...state, { message: newMessage }])

  const formAction = async (formData: FormData) => {
    const message = formData.get('message') as string
    addOptimisticMessage(message)
    await send(message)
  }

  return (
    <div>
      {optimisticMessages.map((m, i) => (
        <div key={i}>{m.message}</div>
      ))}
      <form action={formAction}>
        <input type="text" name="message" />
        <button type="submit">Send</button>
      </form>
    </div>
  )
}
```

----------------------------------------

TITLE: Composing Server and Client Components (Initial Example)
DESCRIPTION: This example demonstrates how a Next.js Server Component (`Page`) fetches data and passes it as props to a Client Component (`LikeButton`). The `Page` component runs on the server, handling data fetching, while the `LikeButton` is a client component responsible for interactivity, declared with `'use client'` to indicate its client-side execution.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/01-getting-started/07-server-and-client-components.mdx#_snippet_0

LANGUAGE: TypeScript
CODE:
```
import LikeButton from '@/app/ui/like-button'
import { getPost } from '@/lib/data'

export default async function Page({ params }: { params: { id: string } }) {
  const post = await getPost(params.id)

  return (
    <div>
      <main>
        <h1>{post.title}</h1>
        {/* ... */}
        <LikeButton likes={post.likes} />
      </main>
    </div>
  )
}
```

LANGUAGE: JavaScript
CODE:
```
import LikeButton from '@/app/ui/like-button'
import { getPost } from '@/lib/data'

export default async function Page({ params }) {
  const post = await getPost(params.id)

  return (
    <div>
      <main>
        <h1>{post.title}</h1>
        {/* ... */}
        <LikeButton likes={post.likes} />
      </main>
    </div>
  )
}
```

LANGUAGE: TypeScript
CODE:
```
'use client'

import { useState } from 'react'

export default function LikeButton({ likes }: { likes: number }) {
  // ...
}
```

LANGUAGE: JavaScript
CODE:
```
'use client'

import { useState } from 'react'

export default function LikeButton({ likes }) {
  // ...
}
```

----------------------------------------

TITLE: Creating Root Layout for Next.js App Router (JavaScript)
DESCRIPTION: This JavaScript React component defines the mandatory root layout for applications using the Next.js App Router. It wraps the entire application, requiring `<html>` and `<body>` tags, and receives `children` as a prop to render nested routes and components within the layout.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/01-getting-started/01-installation.mdx#_snippet_4

LANGUAGE: javascript
CODE:
```
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
```

----------------------------------------

TITLE: Implementing Server-Side Form Validation with Zod in Next.js (TypeScript)
DESCRIPTION: This snippet demonstrates server-side form validation using the Zod library within a Next.js Server Action. It defines a schema for an email field and uses `safeParse` to validate incoming `FormData`. If validation fails, it returns an object containing field-specific errors.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/02-guides/forms.mdx#_snippet_3

LANGUAGE: TypeScript
CODE:
```
'use server'

import { z } from 'zod'

const schema = z.object({
  email: z.string({
    invalid_type_error: 'Invalid Email',
  }),
})

export default async function createUser(formData: FormData) {
  const validatedFields = schema.safeParse({
    email: formData.get('email'),
  })

  // Return early if the form data is invalid
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  // Mutate data
}
```

----------------------------------------

TITLE: Starting Next.js Development Server
DESCRIPTION: This command starts the Next.js development server, which watches for code changes and automatically reloads the application. It's the primary command for active development.
SOURCE: https://github.com/vercel/next.js/blob/canary/contributing/core/developing.md#_snippet_5

LANGUAGE: bash
CODE:
```
pnpm dev
```

----------------------------------------

TITLE: Defining Root Layout and Metadata in Next.js (TypeScript)
DESCRIPTION: This snippet defines the root layout for a Next.js application using TypeScript, including the `Metadata` object for SEO and web shareability. It sets up the basic HTML structure with a `div` for children, serving as the main entry point for the application's UI.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/02-guides/migrating/from-vite.mdx#_snippet_7

LANGUAGE: typescript
CODE:
```
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'My App',
  description: 'My App is a...', 
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  )
}
```

----------------------------------------

TITLE: Importing and Using Google Fonts in App Router (TypeScript)
DESCRIPTION: This snippet demonstrates how to import and use the `Inter` Google Font in a Next.js App Router `layout.tsx` file. It initializes the font with `latin` subsets and `swap` display strategy, then applies it globally to the `<html>` element using `inter.className`. This optimizes font loading by self-hosting and preventing layout shifts.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/05-api-reference/02-components/font.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
import { Inter } from 'next/font/google'

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  )
}
```

----------------------------------------

TITLE: Accessing Dynamic Route Parameters in Next.js Open Graph Image (TypeScript)
DESCRIPTION: This snippet demonstrates how to access dynamic route parameters (`params`) within the default export function of an `opengraph-image.tsx` file. The `params` object contains route segments from the root down to the image file's location, allowing for dynamic image generation based on URL segments.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/05-api-reference/03-file-conventions/01-metadata/opengraph-image.mdx#_snippet_9

LANGUAGE: tsx
CODE:
```
export default function Image({ params }: { params: { slug: string } }) {
  // ...
}
```