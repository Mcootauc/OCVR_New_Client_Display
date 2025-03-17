'use client';

import { useState } from 'react';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clipboard, Check, Dog, Cat, AlertCircle, Trash2 } from 'lucide-react';
import type { Client } from '@/utils/supabase';
import { formatDate } from '@/utils/format-date';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from '@/components/ui/alert-dialog';

interface ClientCardProps {
    client: Client;
    onDelete: (id: number) => Promise<void>;
}

export default function ClientCard({ client, onDelete }: ClientCardProps) {
    const [copied, setCopied] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);

    const copyToClipboard = () => {
        const clientInfo = `
Client Information:
Owner: ${client.owner_name}
Address: ${client.home_address}, ${client.city}, ${client.state} ${
            client.zip_code
        }
Phone: ${client.cell_phone}
Email: ${client.email}

Pet Information:
Name: ${client.pet_name}
Species: ${client.species}
Breed: ${client.breed}
Age: ${client.age}
Sex: ${client.sex}
Spayed/Neutered: ${client.spayed_or_neutered ? 'Yes' : 'No'}
Color: ${client.color}
Microchip: ${client.microchip}
    `.trim();

        navigator.clipboard.writeText(clientInfo);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleDelete = async () => {
        setIsDeleting(true);
        await onDelete(client.id);
        setIsDeleting(false);
        setShowDeleteDialog(false);
    };

    const getPetIcon = () => {
        const species = client.species?.toLowerCase();
        if (species === 'dog') return <Dog className="h-5 w-5 text-gray-400" />;
        if (species === 'cat') return <Cat className="h-5 w-5 text-gray-400" />;
        return <AlertCircle className="h-5 w-5 text-gray-400" />;
    };

    return (
        <>
            <Card className="overflow-hidden border-gray-800 bg-gray-900/95 hover:bg-gray-900/80 transition-colors">
                <CardHeader className="bg-gray-950/70 pb-2">
                    <div className="flex justify-between items-start">
                        <CardTitle className="text-xl font-bold text-gray-100">
                            {client.owner_name}
                        </CardTitle>
                        <Badge
                            variant="outline"
                            className="bg-blue-900/20 text-blue-300 border-gray-700"
                        >
                            {client.initials}
                        </Badge>
                    </div>
                    <div className="text-sm text-gray-400">
                        Added on {formatDate(client.created_at)}
                    </div>
                </CardHeader>
                <CardContent className="pt-4 pb-2">
                    <div className="space-y-4">
                        <div>
                            <h3 className="text-sm font-medium text-gray-300 mb-1">
                                Owner Information
                            </h3>
                            <div className="space-y-1 text-sm">
                                <p>{client.home_address}</p>
                                <p>
                                    {client.city}, {client.state}{' '}
                                    {client.zip_code}
                                </p>
                                <p>{client.cell_phone}</p>
                                <p className="text-blue-400">{client.email}</p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-sm font-medium text-gray-300 mb-1 flex items-center gap-1">
                                {getPetIcon()} Pet Information
                            </h3>
                            <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
                                <div>
                                    <span className="text-gray-500">Name:</span>{' '}
                                    {client.pet_name}
                                </div>
                                <div>
                                    <span className="text-gray-500">
                                        Species:
                                    </span>{' '}
                                    {client.species}
                                </div>
                                <div>
                                    <span className="text-gray-500">
                                        Breed:
                                    </span>{' '}
                                    {client.breed}
                                </div>
                                <div>
                                    <span className="text-gray-500">Age:</span>{' '}
                                    {client.age}
                                </div>
                                <div>
                                    <span className="text-gray-500">Sex:</span>{' '}
                                    {client.sex}
                                </div>
                                <div>
                                    <span className="text-gray-500">
                                        Color:
                                    </span>{' '}
                                    {client.color}
                                </div>
                                <div className="col-span-2">
                                    <span className="text-gray-500">
                                        Spayed/Neutered:
                                    </span>{' '}
                                    {client.spayed_or_neutered ? 'Yes' : 'No'}
                                </div>
                                <div className="col-span-2">
                                    <span className="text-gray-500">
                                        Microchip:
                                    </span>{' '}
                                    {client.microchip}
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="pt-2 flex gap-2">
                    <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 text-gray-300 border-gray-700 hover:bg-gray-800 hover:text-gray-100"
                        onClick={copyToClipboard}
                    >
                        {copied ? (
                            <>
                                <Check className="h-4 w-4 mr-2" /> Copied
                            </>
                        ) : (
                            <>
                                <Clipboard className="h-4 w-4 mr-2" /> Copy Info
                            </>
                        )}
                    </Button>
                    <Button
                        variant="destructive"
                        size="sm"
                        className="bg-red-900/80 hover:bg-red-800 text-red-100"
                        onClick={() => setShowDeleteDialog(true)}
                        disabled={isDeleting}
                    >
                        <Trash2 className="h-4 w-4" />
                    </Button>
                </CardFooter>
            </Card>

            <AlertDialog
                open={showDeleteDialog}
                onOpenChange={setShowDeleteDialog}
            >
                <AlertDialogContent className="bg-gray-900 border-gray-800">
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This will permanently delete {client.owner_name}'s
                            client record and cannot be undone.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel className="border-gray-700 hover:bg-gray-800">
                            Cancel
                        </AlertDialogCancel>
                        <AlertDialogAction
                            className="bg-red-900/80 hover:bg-red-800 text-red-100"
                            onClick={handleDelete}
                            disabled={isDeleting}
                        >
                            {isDeleting ? 'Deleting...' : 'Delete'}
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
}
