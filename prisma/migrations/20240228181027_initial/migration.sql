-- CreateTable
CREATE TABLE "fakturaoversikt" (
    "faktura_nr" INTEGER,
    "faktura_dato" TEXT,
    "forfallsdato" TEXT,
    "kundenummer" INTEGER,
    "avdelingsnummer" TEXT,
    "avdelingsnavn" TEXT,
    "prosjektnummer" TEXT,
    "prosjektledernummer" TEXT,
    "belop_eks_mva" DOUBLE PRECISION,
    "valuta" TEXT,
    "belop_inkl_mva" DOUBLE PRECISION,
    "betalt" DOUBLE PRECISION,
    "utestaende" DOUBLE PRECISION,
    "purring" DOUBLE PRECISION,
    "purring_status" TEXT,
    "purring_sist_sendt" TEXT,
    "purring_forfallsdato" TEXT,
    "selskap" INTEGER,
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),

    CONSTRAINT "fakturaoversikt_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "saldobalanse" (
    "kontonummer" INTEGER,
    "kontonavn" TEXT,
    "inngaaende_saldo" DOUBLE PRECISION,
    "endring" DOUBLE PRECISION,
    "utgaaende_saldo" DOUBLE PRECISION,
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "selskap" INTEGER,

    CONSTRAINT "saldobalanse_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "timestatistikk" (
    "avdelingsnummer" TEXT,
    "avdelingsnavn" TEXT,
    "ansattnummer" TEXT,
    "normaltid" DOUBLE PRECISION,
    "registrert_tid_sum_med_lonn" DOUBLE PRECISION,
    "registrert_tid_fravaer_med_lonn" DOUBLE PRECISION,
    "registrert_tid_nettotid" DOUBLE PRECISION,
    "registrert_tid_pluss_tid" DOUBLE PRECISION,
    "fakt_timer_budsjett" DOUBLE PRECISION,
    "fakt_timer_registrert" DOUBLE PRECISION,
    "fakt_grad_budsjett_prosent" DOUBLE PRECISION,
    "fakt_grad_prosent_registrert" DOUBLE PRECISION,
    "budsjett_oppnaa_grad_prosent" DOUBLE PRECISION,
    "fakt_tid_i_prosent_av_nettotid" DOUBLE PRECISION,
    "sum_ufakturert_prosj" DOUBLE PRECISION,
    "selskap" INTEGER,
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "sum_div_oppgaver" DOUBLE PRECISION,
    "sum_gen_akt" DOUBLE PRECISION,

    CONSTRAINT "timestatistikk_pk" PRIMARY KEY ("id")
);
