CREATE TABLE timestatistikk
(
    avdelingsnummer                 text,
    avdelingsnavn                   text,
    ansattnummer                    text,
    normaltid                       double precision,
    registrert_tid_sum_med_lonn     double precision,
    registrert_tid_fravaer_med_lonn double precision,
    registrert_tid_nettotid         double precision,
    registrert_tid_pluss_tid        double precision,
    fakt_timer_budsjett             double precision,
    fakt_timer_registrert           double precision,
    fakt_grad_budsjett_prosent      double precision,
    fakt_grad_prosent_registrert    double precision,
    budsjett_oppnaa_grad_prosent    double precision,
    fakt_tid_i_prosent_av_nettotid  double precision,
    sum_ufakturert_prosj            double precision,
    selskap                         integer,
    id                              uuid DEFAULT gen_random_uuid()
        CONSTRAINT timestatistikk_pk
            PRIMARY KEY,
    sum_div_oppgaver                double precision,
    sum_gen_akt                     double precision
);

CREATE TABLE saldobalanse
(
    kontonummer      integer,
    kontonavn        text,
    inngaaende_saldo double precision,
    endring          double precision,
    utgaaende_saldo  double precision,
    id               uuid DEFAULT gen_random_uuid() NOT NULL
        CONSTRAINT saldobalanse_pk
            PRIMARY KEY,
    selskap          integer
);

CREATE TABLE fakturaoversikt
(
    faktura_nr           int,
    faktura_dato         text,
    forfallsdato         text,
    kundenummer          integer,
    avdelingsnummer      text,
    avdelingsnavn        text,
    prosjektnummer       text,
    prosjektledernummer  text,
    belop_eks_mva        double precision,
    valuta               text,
    belop_inkl_mva       double precision,
    betalt               double precision,
    utestaende           double precision,
    purring              double precision,
    purring_status       text,
    purring_sist_sendt   text,
    purring_forfallsdato text,
    selskap                         integer,
    id                              uuid DEFAULT gen_random_uuid() PRIMARY KEY
);
