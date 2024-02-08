"use client";

import React from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "api/client";

function Providers({ children }: React.PropsWithChildren) {

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider >
    );
}

export default Providers;