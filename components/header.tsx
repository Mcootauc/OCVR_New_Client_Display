'use client';

import { useAuth } from '@/context/auth-context';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { LogOut } from 'lucide-react';

export default function Header() {
    const { user, signOut, isLoading } = useAuth();

    return (
        <header className="border-b border-gray-800 bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/60">
            <div className="container flex h-16 items-center justify-between py-4">
                <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-gray-200">
                        Pet Client Manager
                    </span>
                </div>

                <div className="flex items-center gap-4">
                    {!isLoading &&
                        (user ? (
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button
                                        variant="ghost"
                                        className="relative h-10 w-10 rounded-full"
                                    >
                                        <Avatar className="h-10 w-10 border border-gray-700">
                                            <AvatarImage
                                                src={
                                                    user.user_metadata
                                                        .avatar_url
                                                }
                                                alt={
                                                    user.user_metadata.full_name
                                                }
                                            />
                                            <AvatarFallback className="bg-gray-800 text-gray-200">
                                                {user.user_metadata.full_name
                                                    ?.split(' ')
                                                    .map((n: string) => n[0])
                                                    .join('') ||
                                                    user.email?.[0].toUpperCase()}
                                            </AvatarFallback>
                                        </Avatar>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent
                                    className="w-56"
                                    align="end"
                                >
                                    <DropdownMenuItem className="flex flex-col items-start gap-1">
                                        <p className="font-medium">
                                            {user.user_metadata.full_name}
                                        </p>
                                        <p className="text-xs text-gray-400">
                                            {user.email}
                                        </p>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem
                                        onClick={() => signOut()}
                                        className="text-red-400 focus:text-red-400"
                                    >
                                        <LogOut className="mr-2 h-4 w-4" />
                                        <span>Log out</span>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        ) : null)}
                </div>
            </div>
        </header>
    );
}
