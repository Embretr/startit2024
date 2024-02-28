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
import { Textarea } from "../../../components/ui/textarea";

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
}

export default function CreateEmailDialog({
  action,
  isOpen,
}: CreateEmailDialogProps) {
  return (
    <Dialog open={isOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{action.title}</DialogTitle>
          <DialogDescription>{action.description}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid w-full items-center gap-4">
            <Label htmlFor="username">Epost adresse</Label>
            <Input id="username" value="info@kunde1.no" />
          </div>
          <div className="grid w-full items-center gap-4">
            <Label htmlFor="username">Emne</Label>
            <Input id="username" value="Manglende innbetaling av faktura" />
          </div>
          <div className="grid w-full items-center gap-4">
            <Label htmlFor="message">Innhold</Label>
            <Textarea
              id="message"
              placeholder="Skriv inn innholder til eposten her... "
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Send epost</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
