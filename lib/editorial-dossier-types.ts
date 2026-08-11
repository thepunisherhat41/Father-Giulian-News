export type DossierSource = {
  label: string;
  url: string;
};

export type DossierSection = {
  kicker?: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type EditorialDossier = {
  readingTime: string;
  title: string;
  deck: string;
  opening: string[];
  sections: DossierSection[];
  callout?: {
    label: string;
    title: string;
    text: string;
  };
  takeaways: string[];
  sources?: DossierSource[];
  disclaimer?: string;
};
