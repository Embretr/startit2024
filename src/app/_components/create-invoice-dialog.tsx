"use client";
import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Textarea } from "../../components/ui/textarea";
import { api } from "../../trpc/react";
import { useRouter } from "next/navigation";

export interface AIFakturaResponse {
  actions: Actions;
}

export interface Actions {
  statusCode: number;
  actions: Action[];
}

export interface Action {
  title: string;
  description: string;
  actionId: number;
}

interface CreateEmailDialogProps {
  action: Action;
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

export default function CreateInvoiceDialog({
  action,
  isOpen,
  onOpenChange,
}: CreateEmailDialogProps) {
  const router = useRouter();
  const invoiceMutation = api.faktura.create.useMutation();
  const createInvoice = async () => {
    await invoiceMutation.mutateAsync({
      forfallsdato: "0006-10-22",
      kundenummer: 10032,
      selskap: 1,
      utestaende: 4599,
    });
    onOpenChange(false);
    router.refresh();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{action.title}</DialogTitle>
          <DialogDescription>{action.description}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid w-full items-center gap-4">
            <Label htmlFor="username">Selskap</Label>
            <Input id="username" value="Kunde 1 - 483902489" />
          </div>
          <div className="grid w-full items-center gap-4">
            <Label htmlFor="username">Forfallsdato</Label>
            <Input id="username" value="22.10.2024" />
          </div>
          <div className="grid w-full items-center gap-4">
            <Label htmlFor="username">KID nummer</Label>
            <Input id="username" value="938942839483" />
          </div>
          <div className="grid w-full items-center gap-4">
            <Label htmlFor="username">Beløp</Label>
            <Input id="username" value="4599" />
          </div>
          <div className="grid w-full items-center gap-4">
            <Label htmlFor="message">Notat</Label>
            <Textarea id="message" placeholder="Skriv et notat her ..." />
          </div>
        </div>
        <DialogFooter>
          <Button type="button" onClick={createInvoice}>
            Opprett faktura
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
