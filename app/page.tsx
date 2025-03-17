import ClientGrid from '@/components/client-grid';
import { ThemeProvider } from '@/components/theme-provider';
import ProtectedRoute from '@/components/protected-route';
import Header from '@/components/header';

export default function Home() {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
        >
            <ProtectedRoute>
                <div className="min-h-screen bg-background flex flex-col">
                    <Header />
                    <main className="flex-1">
                        <div className="container mx-auto py-8 px-4">
                            <h1 className="text-3xl font-bold text-primary mb-8">
                                Client Information Dashboard
                            </h1>
                            <ClientGrid />
                        </div>
                    </main>
                </div>
            </ProtectedRoute>
        </ThemeProvider>
    );
}
