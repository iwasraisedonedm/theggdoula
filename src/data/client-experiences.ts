export interface ClientExperience {
  quote: string;
  attribution: string;
  careType: string;
  services: Array<{ label: string; href: string }>;
}

export const featuredExperience: ClientExperience = {
  quote:
    '“One of the best decisions I ever made during my pregnancy was hiring Teesee as my birth and postpartum doula. Her extensive knowledge and experience made such a difference. New…”',
  attribution: 'Jinda',
  careType: 'Family story',
  services: [
    { label: 'Birth doula support', href: '/services/birth/' },
    { label: 'Postpartum support', href: '/services/postpartum/' },
  ],
};

export const clientExperiences: ClientExperience[] = [
  {
    quote:
      "“Teesee came into our distraught home like a soothing breeze, calming our anxieties and allaying our fears... Above all else, she is empathetic and deeply sensitive to a mother's…”",
    attribution: 'Yvette H.',
    careType: 'Postpartum support',
    services: [{ label: 'Postpartum support', href: '/services/postpartum/' }],
  },
  {
    quote:
      'Teesee is a life saver. I don’t know how I would have survived my first year as a mama, let alone the first few months. Her knowledge is endless. Her compassion feels effortless.…',
    attribution: 'Kemper Jackson',
    careType: 'Newborn care',
    services: [{ label: 'Newborn care', href: '/services/newborn-care/' }],
  },
  {
    quote:
      '“When we first found out that we were pregnant it was a big surprise! We were so excited to bring a baby earth side. When It came to our doula search we were referred to Teesee…”',
    attribution: 'Nicole & Garrett',
    careType: 'Birth & postpartum',
    services: [
      { label: 'Birth doula support', href: '/services/birth/' },
      { label: 'Postpartum support', href: '/services/postpartum/' },
    ],
  },
];
