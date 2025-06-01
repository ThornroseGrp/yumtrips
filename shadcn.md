TITLE: Creating a Theme Provider in React (TSX)
DESCRIPTION: This snippet defines a `ThemeProvider` component using React Context API to manage the application's theme state (light, dark, system). It persists the theme preference in `localStorage` and dynamically applies CSS classes to the document's root element, also detecting the user's system theme preference. The `useTheme` hook is provided for consuming the theme context.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/dark-mode/vite.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
import { createContext, useContext, useEffect, useState } from "react"

type Theme = "dark" | "light" | "system"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  )

  useEffect(() => {
    const root = window.document.documentElement

    root.classList.remove("light", "dark")

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light"

      root.classList.add(systemTheme)
      return
    }

    root.classList.add(theme)
  }, [theme])

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme)
      setTheme(theme)
    },
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider")

  return context
}
```

----------------------------------------

TITLE: Initializing shadcn Project with CLI (Bash)
DESCRIPTION: This command initializes a new shadcn project, installing necessary dependencies, adding the `cn` utility, and configuring CSS variables for styling. It sets up the foundational structure for component integration.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/cli.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
npx shadcn@latest init
```

----------------------------------------

TITLE: Initializing shadcn/ui Project in Next.js (Bash)
DESCRIPTION: This command initializes a new Next.js project or sets up an existing one with shadcn/ui. It prompts the user to choose between a standard Next.js project or a Monorepo setup, configuring the necessary files and dependencies for shadcn/ui integration.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/installation/next.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
npx shadcn@latest init
```

----------------------------------------

TITLE: Initializing shadcn/ui in an Astro project
DESCRIPTION: Runs the `shadcn` CLI's `init` command to set up the necessary configuration files and directories for shadcn/ui within the Astro project. This command prepares the project to integrate shadcn/ui components.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/installation/astro.mdx#_snippet_2

LANGUAGE: bash
CODE:
```
npx shadcn@latest init
```

----------------------------------------

TITLE: Installing Input Component via Shadcn CLI (Bash)
DESCRIPTION: This command uses the Shadcn UI CLI to automatically add the Input component and its dependencies to your project, simplifying the setup process.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/components/input.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
npx shadcn@latest add input
```

----------------------------------------

TITLE: Installing shadcn/ui Chart Component via CLI
DESCRIPTION: This command-line interface snippet shows how to quickly add the `chart.tsx` component to your project using the shadcn/ui CLI. It's the recommended method for integrating the chart component.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/components/chart.mdx#_snippet_1

LANGUAGE: bash
CODE:
```
npx shadcn@latest add chart
```

----------------------------------------

TITLE: Installing Shadcn UI Table Component (Bash)
DESCRIPTION: This command uses the `shadcn` CLI to add the basic `<Table />` component to your project, providing the foundational UI elements for building data tables. It sets up the necessary files and dependencies for the component.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/components/data-table.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
npx shadcn@latest add table
```

----------------------------------------

TITLE: Creating a Reusable DataTable Component with React Table (TypeScript)
DESCRIPTION: This snippet defines a generic `DataTable` component that leverages `@tanstack/react-table` for core table functionalities and shadcn/ui's `Table` components for presentation. It accepts `columns` and `data` as props, dynamically renders headers and rows, and includes a fallback for no results.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/components/data-table.mdx#_snippet_4

LANGUAGE: tsx
CODE:
```
"use client"

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}
```

----------------------------------------

TITLE: Initializing shadcn/ui Project with CLI
DESCRIPTION: This command initiates the shadcn/ui project setup process. Running 'npx shadcn@latest init' prompts the user with a series of questions to configure the 'components.json' file, which dictates how components are installed and styled.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/changelog.mdx#_snippet_6

LANGUAGE: bash
CODE:
```
npx shadcn@latest init
```

----------------------------------------

TITLE: Enabling Sorting in TanStack React Table (TSX)
DESCRIPTION: This snippet updates the `DataTable` component to enable column sorting. It introduces `SortingState` and `setSorting` using `React.useState` to manage sorting state. The `useReactTable` hook is configured with `onSortingChange`, `getSortedRowModel`, and `state.sorting` to integrate sorting functionality.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/components/data-table.mdx#_snippet_10

LANGUAGE: tsx
CODE:
```
"use client"

import * as React from "react"
import {
  ColumnDef,
  SortingState,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([])

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
  })

  return (
    <div>
      <div className="rounded-md border">
        <Table>{ ... }</Table>
      </div>
    </div>
  )
}
```

----------------------------------------

TITLE: Rendering the DataTable Component in a Page (TypeScript)
DESCRIPTION: This code demonstrates how to integrate and render the `DataTable` component within a Next.js page component. It includes an asynchronous `getData` function to simulate fetching data, which is then passed along with column definitions to the `DataTable` for display.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/components/data-table.mdx#_snippet_5

LANGUAGE: tsx
CODE:
```
import { Payment, columns } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    // ...
  ]
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
```

----------------------------------------

TITLE: Adding Specific shadcn Components (Bash)
DESCRIPTION: This command adds a specified shadcn component to your project, automatically installing any required dependencies. Replace `[component]` with the name of the desired component to integrate it into your codebase.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/packages/shadcn/README.md#_snippet_1

LANGUAGE: bash
CODE:
```
npx shadcn add [component]
```

----------------------------------------

TITLE: Defining Global CSS Variables for Light and Dark Themes in CSS
DESCRIPTION: This CSS snippet defines a comprehensive set of custom properties (CSS variables) within the `:root` pseudo-class for the default (light) theme and overrides them within the `.dark` class for dark mode. These variables control various aspects of the UI's appearance, including background, foreground, component-specific colors (card, popover, primary, secondary, muted, accent, destructive), borders, inputs, rings, and chart colors. They are designed to be easily consumed by other CSS rules or JavaScript to maintain a consistent design system.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/theming.mdx#_snippet_11

LANGUAGE: css
CODE:
```
:root {
  --radius: 0.625rem;
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.145 0 0);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
  --primary-foreground: oklch(0.985 0 0);
  --secondary: oklch(0.97 0 0);
  --secondary-foreground: oklch(0.205 0 0);
  --muted: oklch(0.97 0 0);
  --muted-foreground: oklch(0.556 0 0);
  --accent: oklch(0.97 0 0);
  --accent-foreground: oklch(0.205 0 0);
  --destructive: oklch(0.577 0.245 27.325);
  --border: oklch(0.922 0 0);
  --input: oklch(0.922 0 0);
  --ring: oklch(0.708 0 0);
  --chart-1: oklch(0.646 0.222 41.116);
  --chart-2: oklch(0.6 0.118 184.704);
  --chart-3: oklch(0.398 0.07 227.392);
  --chart-4: oklch(0.828 0.189 84.429);
  --chart-5: oklch(0.769 0.188 70.08);
  --sidebar: oklch(0.985 0 0);
  --sidebar-foreground: oklch(0.145 0 0);
  --sidebar-primary: oklch(0.205 0 0);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.97 0 0);
  --sidebar-accent-foreground: oklch(0.205 0 0);
  --sidebar-border: oklch(0.922 0 0);
  --sidebar-ring: oklch(0.708 0 0);
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --card: oklch(0.205 0 0);
  --card-foreground: oklch(0.985 0 0);
  --popover: oklch(0.205 0 0);
  --popover-foreground: oklch(0.985 0 0);
  --primary: oklch(0.922 0 0);
  --primary-foreground: oklch(0.205 0 0);
  --secondary: oklch(0.269 0 0);
  --secondary-foreground: oklch(0.985 0 0);
  --muted: oklch(0.269 0 0);
  --muted-foreground: oklch(0.708 0 0);
  --accent: oklch(0.269 0 0);
  --accent-foreground: oklch(0.985 0 0);
  --destructive: oklch(0.704 0.191 22.216);
  --border: oklch(1 0 0 / 10%);
  --input: oklch(1 0 0 / 15%);
  --ring: oklch(0.556 0 0);
  --chart-1: oklch(0.488 0.243 264.376);
  --chart-2: oklch(0.696 0.17 162.48);
  --chart-3: oklch(0.769 0.188 70.08);
  --chart-4: oklch(0.627 0.265 303.9);
  --chart-5: oklch(0.645 0.246 16.439);
  --sidebar: oklch(0.205 0 0);
  --sidebar-foreground: oklch(0.985 0 0);
  --sidebar-primary: oklch(0.488 0.243 264.376);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.269 0 0);
  --sidebar-accent-foreground: oklch(0.985 0 0);
  --sidebar-border: oklch(1 0 0 / 10%);
  --sidebar-ring: oklch(0.556 0 0);
}
```

----------------------------------------

TITLE: Nesting Link Component with Button asChild in TSX
DESCRIPTION: This TSX example demonstrates using the `asChild` prop on the `Button` component to render its child (`Link` in this case) with button styling, allowing for custom routing behavior.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/components/button.mdx#_snippet_6

LANGUAGE: tsx
CODE:
```
<Button asChild>
  <Link href="/login">Login</Link>
</Button>
```

----------------------------------------

TITLE: Installing Core Dependencies (npm)
DESCRIPTION: This command installs the essential npm packages required for `shadcn-ui` components, including `class-variance-authority`, `clsx`, `tailwind-merge`, `lucide-react`, and `tw-animate-css`. These dependencies provide styling utilities, component logic, and icon support. It's a prerequisite for using the UI components.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/installation/manual.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
npm install class-variance-authority clsx tailwind-merge lucide-react tw-animate-css
```

----------------------------------------

TITLE: Building a Profile Form with shadcn/ui and React Hook Form (TSX)
DESCRIPTION: This snippet demonstrates how to create a client-side validated form using shadcn/ui's Form components, react-hook-form for state management, and Zod for schema validation. It defines a simple username field with a minimum length requirement and renders the form with an input and submit button.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/components/form.mdx#_snippet_6

LANGUAGE: TSX
CODE:
```
"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

export function ProfileForm() {
  // ...

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
```

----------------------------------------

TITLE: Displaying a Basic Toast Notification (TypeScript/React)
DESCRIPTION: This snippet demonstrates the most basic usage of the `toast` function from `sonner`. Calling `toast` with a string argument will display a simple, default toast notification containing that message.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/components/sonner.mdx#_snippet_5

LANGUAGE: tsx
CODE:
```
toast("Event has been created.")
```

----------------------------------------

TITLE: Configuring shadcn/ui components.json for packages/ui (Tailwind CSS v3)
DESCRIPTION: This configuration defines the `components.json` settings for a shared UI package (`packages/ui`) within a monorepo, specifically for Tailwind CSS v3. It includes the schema, style, RSC, and TSX settings, and explicitly points to the local `tailwind.config.ts` file. Aliases are configured to ensure proper resolution of paths for components, utilities, hooks, and libraries within the workspace.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/monorepo.mdx#_snippet_9

LANGUAGE: json
CODE:
```
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "src/styles/globals.css",
    "baseColor": "zinc",
    "cssVariables": true
  },
  "iconLibrary": "lucide",
  "aliases": {
    "components": "@workspace/ui/components",
    "utils": "@workspace/ui/lib/utils",
    "hooks": "@workspace/ui/hooks",
    "lib": "@workspace/ui/lib",
    "ui": "@workspace/ui/components"
  }
}
```

----------------------------------------

TITLE: Configuring Global CSS Variables for Shadcn UI Theming
DESCRIPTION: This CSS snippet defines a comprehensive set of CSS variables for light and dark themes using the `oklch` color format. It imports Tailwind CSS and `tw-animate-css` and sets up base styles, which are crucial for consistent UI theming across the application.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/installation/manual.mdx#_snippet_2

LANGUAGE: css
CODE:
```
@import "tailwindcss";
@import "tw-animate-css";

@custom-variant dark (&:is(.dark *));

:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.145 0 0);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
  --primary-foreground: oklch(0.985 0 0);
  --secondary: oklch(0.97 0 0);
  --secondary-foreground: oklch(0.205 0 0);
  --muted: oklch(0.97 0 0);
  --muted-foreground: oklch(0.556 0 0);
  --accent: oklch(0.97 0 0);
  --accent-foreground: oklch(0.205 0 0);
  --destructive: oklch(0.577 0.245 27.325);
  --destructive-foreground: oklch(0.577 0.245 27.325);
  --border: oklch(0.922 0 0);
  --input: oklch(0.922 0 0);
  --ring: oklch(0.708 0 0);
  --chart-1: oklch(0.646 0.222 41.116);
  --chart-2: oklch(0.6 0.118 184.704);
  --chart-3: oklch(0.398 0.07 227.392);
  --chart-4: oklch(0.828 0.189 84.429);
  --chart-5: oklch(0.769 0.188 70.08);
  --radius: 0.625rem;
  --sidebar: oklch(0.985 0 0);
  --sidebar-foreground: oklch(0.145 0 0);
  --sidebar-primary: oklch(0.205 0 0);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.97 0 0);
  --sidebar-accent-foreground: oklch(0.205 0 0);
  --sidebar-border: oklch(0.922 0 0);
  --sidebar-ring: oklch(0.708 0 0);
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --card: oklch(0.145 0 0);
  --card-foreground: oklch(0.985 0 0);
  --popover: oklch(0.145 0 0);
  --popover-foreground: oklch(0.985 0 0);
  --primary: oklch(0.985 0 0);
  --primary-foreground: oklch(0.205 0 0);
  --secondary: oklch(0.269 0 0);
  --secondary-foreground: oklch(0.985 0 0);
  --muted: oklch(0.269 0 0);
  --muted-foreground: oklch(0.708 0 0);
  --accent: oklch(0.269 0 0);
  --accent-foreground: oklch(0.985 0 0);
  --destructive: oklch(0.396 0.141 25.723);
  --destructive-foreground: oklch(0.637 0.237 25.331);
  --border: oklch(0.269 0 0);
  --input: oklch(0.269 0 0);
  --ring: oklch(0.439 0 0);
  --chart-1: oklch(0.488 0.243 264.376);
  --chart-2: oklch(0.696 0.17 162.48);
  --chart-3: oklch(0.769 0.188 70.08);
  --chart-4: oklch(0.627 0.265 303.9);
  --chart-5: oklch(0.645 0.246 16.439);
  --sidebar: oklch(0.205 0 0);
  --sidebar-foreground: oklch(0.985 0 0);
  --sidebar-primary: oklch(0.488 0.243 264.376);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.269 0 0);
  --sidebar-accent-foreground: oklch(0.985 0 0);
  --sidebar-border: oklch(0.269 0 0);
  --sidebar-ring: oklch(0.439 0 0);
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  --color-sidebar: var(--sidebar);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-ring: var(--sidebar-ring);
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
  }
}
```

----------------------------------------

TITLE: Using Custom Link Component with BreadcrumbLink in TSX
DESCRIPTION: This snippet shows how to integrate a custom link component, such as `next/link`, with `BreadcrumbLink` using the `asChild` prop. This allows the breadcrumb links to leverage functionalities from routing libraries, ensuring proper navigation behavior within your application.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/components/breadcrumb.mdx#_snippet_6

LANGUAGE: tsx
CODE:
```
import { Link } from "next/link"

...

<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink asChild>
        <Link href="/">Home</Link>
      </BreadcrumbLink>
    </BreadcrumbItem>
    {/* ... */}
  </BreadcrumbList>
</Breadcrumb>
```

----------------------------------------

TITLE: Initializing shadcn/ui Project with CLI (Bash)
DESCRIPTION: This command initializes a `components.json` file in your project, which is essential for using the shadcn/ui CLI to add and manage components. It sets up the basic configuration required for component generation.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/components-json.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
npx shadcn@latest init
```

----------------------------------------

TITLE: Creating a Tailwind CSS Class Name Utility Helper in TypeScript
DESCRIPTION: This TypeScript function `cn` combines `clsx` and `tailwind-merge` to conditionally apply and intelligently merge Tailwind CSS classes. It prevents style conflicts and simplifies class management, making it a common and highly useful utility in projects utilizing Tailwind CSS.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/installation/manual.mdx#_snippet_3

LANGUAGE: typescript
CODE:
```
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

----------------------------------------

TITLE: Initializing shadcn Project Dependencies (Bash)
DESCRIPTION: This command initializes a new shadcn project by installing necessary dependencies, adding the `cn` utility, configuring `tailwind.config.js`, and setting up CSS variables. It is the essential first step for setting up a new project.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/packages/shadcn/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx shadcn init
```

----------------------------------------

TITLE: Defining React Hook Form with Zod Resolver and Submit Handler in TSX
DESCRIPTION: This code block illustrates the complete setup of a form using `react-hook-form` with Zod for validation. It shows how to initialize the `useForm` hook with `zodResolver`, set default values, and define an `onSubmit` function to handle form submission, ensuring type-safe access to validated form values.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/components/form.mdx#_snippet_5

LANGUAGE: tsx
CODE:
```
"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters."
  })
})

export function ProfileForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: ""
    }
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
}
```

----------------------------------------

TITLE: Installing Navigation Menu via CLI (Bash)
DESCRIPTION: Installs the Shadcn UI Navigation Menu component using the command-line interface, adding it to your project with a single command.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/components/navigation-menu.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
npx shadcn@latest add navigation-menu
```

----------------------------------------

TITLE: Installing Radio Group Component via CLI (Bash)
DESCRIPTION: This snippet demonstrates how to install the Radio Group component using the shadcn/ui CLI, which automates the setup process by adding the component's code and dependencies to your project.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/components/radio-group.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
npx shadcn@latest add radio-group
```

----------------------------------------

TITLE: Installing Alert Component via CLI (Bash)
DESCRIPTION: This snippet demonstrates how to install the `Alert` component using the `shadcn/ui` command-line interface (CLI). It's the recommended and simplest way to add the component to your project, handling dependencies automatically.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/components/alert.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
npx shadcn@latest add alert
```

----------------------------------------

TITLE: Adding a shadcn/ui Component (Button)
DESCRIPTION: This command uses the `shadcn/ui` CLI to add the `Button` component to the project, automatically generating the necessary component files and dependencies.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/installation/vite.mdx#_snippet_8

LANGUAGE: bash
CODE:
```
npx shadcn@latest add button
```

----------------------------------------

TITLE: Basic Dropdown Menu Usage in TSX
DESCRIPTION: This example shows the fundamental structure of a Shadcn UI Dropdown Menu, including the trigger, content, label, separator, and individual menu items, demonstrating a simple interactive menu.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/components/dropdown-menu.mdx#_snippet_3

LANGUAGE: tsx
CODE:
```
<DropdownMenu>
  <DropdownMenuTrigger>Open</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuItem>Team</DropdownMenuItem>
    <DropdownMenuItem>Subscription</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
```

----------------------------------------

TITLE: Basic Command Menu Structure in React
DESCRIPTION: This code demonstrates the fundamental structure of a `Command` menu, including an input field, a list to display results, and categorized command items. It shows how to use `CommandInput`, `CommandList`, `CommandEmpty`, `CommandGroup`, `CommandItem`, and `CommandSeparator` to build a functional command interface.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/components/command.mdx#_snippet_3

LANGUAGE: tsx
CODE:
```
<Command>
  <CommandInput placeholder="Type a command or search..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Suggestions">
      <CommandItem>Calendar</CommandItem>
      <CommandItem>Search Emoji</CommandItem>
      <CommandItem>Calculator</CommandItem>
    </CommandGroup>
    <CommandSeparator />
    <CommandGroup heading="Settings">
      <CommandItem>Profile</CommandItem>
      <CommandItem>Billing</CommandItem>
      <CommandItem>Settings</CommandItem>
    </CommandGroup>
  </CommandList>
</Command>
```

----------------------------------------

TITLE: Implementing Basic Sheet Component (TSX)
DESCRIPTION: This snippet provides a foundational example of how to construct and use the Shadcn UI Sheet component. It demonstrates the basic structure, including a `SheetTrigger` to open the sheet and `SheetContent` containing a `SheetHeader`, `SheetTitle`, and `SheetDescription`.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/components/sheet.mdx#_snippet_3

LANGUAGE: tsx
CODE:
```
<Sheet>
  <SheetTrigger>Open</SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Are you absolutely sure?</SheetTitle>
      <SheetDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
```

----------------------------------------

TITLE: Basic FormField Usage with React Hook Form in TSX
DESCRIPTION: This example demonstrates how to integrate the `FormField` component with `react-hook-form`'s `useForm` hook. It shows how to pass the `control` object and `name` prop, render an `Input` component, and include `FormLabel`, `FormDescription`, and `FormMessage` for a complete form field.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/components/form.mdx#_snippet_1

LANGUAGE: tsx
CODE:
```
const form = useForm()

<FormField
  control={form.control}
  name="username"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Username</FormLabel>
      <FormControl>
        <Input placeholder="shadcn" {...field} />
      </FormControl>
      <FormDescription>This is your public display name.</FormDescription>
      <FormMessage />
    </FormItem>
  )}
/>
```