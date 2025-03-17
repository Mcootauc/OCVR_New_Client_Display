import ClientGrid from '@/components/client-grid';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';

export default function Home() {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
        >
            <main className="min-h-screen bg-background">
                <div className="container mx-auto py-8 px-4">
                    <h1 className="text-3xl font-bold text-primary mb-8">
                        Client Information Dashboard
                    </h1>
                    <ClientGrid />
                </div>
            </main>
            <Toaster />
        </ThemeProvider>
    );
}
