import { PlusIcon } from "@heroicons/react/24/outline";
import { Button } from "../_components/button";
import Header from "../_components/header";
import Invoices from "../_components/invoices";

export default async function Home() {
  return (
    <div className="h-[200vh] p-6">
      <Header
        title="Fakturaoversikt"
        breadcrumb={["Hjem", "Fakturaoversikt"]}
        primaryCta={
          <Button>
            Ny faktura <PlusIcon className="h-4 w-4" />
          </Button>
        }
      />
      <Invoices />
    </div>
  );
}
