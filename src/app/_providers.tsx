// src/app/providers.tsx
"use client"; // Ini adalah Client Component

import * as React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { SessionProvider } from "next-auth/react";
import { BreadcrumbProvider } from "@/context/breadcrumb-context";
import { NuqsAdapter } from "nuqs/adapters/next/app";

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // Durasi data dianggap "fresh" sebelum dianggap "stale"
            staleTime: 1000 * 60 * 5, // 5 menit
            refetchOnWindowFocus: false, // Opsi populer untuk menghindari refetch berlebihan
          },
        },
      })
  );

  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>
        <NuqsAdapter>
          <BreadcrumbProvider>{children}</BreadcrumbProvider>
        </NuqsAdapter>
        {/* Devtools hanya akan muncul di development mode */}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </SessionProvider>
  );
}
