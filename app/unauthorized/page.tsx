'use client';

import { useAuth } from '@/context/auth-context';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { AlertTriangle } from 'lucide-react';

export default function UnauthorizedPage() {
    const { signOut } = useAuth();

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-950 px-4">
            <Card className="w-full max-w-md border-gray-800 bg-gray-900">
                <CardHeader className="space-y-1 text-center">
                    <div className="flex justify-center">
                        <AlertTriangle className="h-12 w-12 text-red-500" />
                    </div>
                    <CardTitle className="text-2xl font-bold">
                        Access Denied
                    </CardTitle>
                    <CardDescription className="text-gray-400">
                        You don't have permission to access this dashboard
                    </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                    <p className="text-sm text-gray-500">
                        This dashboard is restricted to authorized users only.
                        If you believe you should have access, please contact
                        the administrator.
                    </p>
                </CardContent>
                <CardFooter>
                    <Button
                        variant="destructive"
                        className="w-full"
                        onClick={signOut}
                    >
                        Sign Out
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}
