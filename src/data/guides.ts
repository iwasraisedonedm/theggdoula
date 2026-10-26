export interface Guide {
  slug: string;
  number: string;
  title: string;
  topic: string;
  audience: string;
  description: string;
  cover: string;
  coverAlt: string;
  file: string;
  pages: number;
}

export const guides: Guide[] = [
  {
    slug: 'your-birth-your-voice',
    number: '01',
    title: 'Your Birth, Your Voice',
    topic: 'Birth preparation',
    audience: 'Expectant parents and the people supporting them',
    description:
      'A practical guide to naming what matters to you, preparing for conversations with your care team, and making room for plans to change.',
    cover: '/images/guides/your-birth-your-voice.jpg',
    coverAlt: 'Cover of Your Birth, Your Voice, a personal birth preferences workbook',
    file: '/downloads/guides/your-birth-your-voice.pdf',
    pages: 10,
  },
  {
    slug: 'ready-for-baby',
    number: '02',
    title: 'Ready for Baby',
    topic: 'Birth preparation',
    audience: 'Expectant parents and the people helping them prepare for birth day',
    description:
      'A practical packing and logistics guide for preparing for your birth setting, organizing key contacts, and planning the trip home.',
    cover: '/images/guides/ready-for-baby.jpg',
    coverAlt: 'Cover of the Ready for Baby birth-day preparation guide',
    file: '/downloads/guides/ready-for-baby.pdf',
    pages: 6,
  },
  {
    slug: 'breastfeeding-with-confidence',
    number: '03',
    title: 'Breastfeeding with Confidence',
    topic: 'Feeding',
    audience: 'Families exploring breastfeeding, pumping, combination feeding, or lactation support',
    description:
      'A judgment-free preparation guide for asking questions, finding skilled support, and keeping feeding decisions centered on your family.',
    cover: '/images/guides/breastfeeding-with-confidence.jpg',
    coverAlt: 'Cover of Breastfeeding with Confidence, a feeding preparation guide',
    file: '/downloads/guides/breastfeeding-with-confidence.pdf',
    pages: 10,
  },
  {
    slug: 'the-first-14-days',
    number: '04',
    title: 'The First 14 Days',
    topic: 'Postpartum',
    audience: 'New parents and the people organizing their early postpartum support',
    description:
      'A two-week home plan for rest, meals, visitors, household tasks, follow-up, and getting help when recovery feels difficult.',
    cover: '/images/guides/the-first-14-days.jpg',
    coverAlt: 'Cover of The First 14 Days, an early postpartum planning guide',
    file: '/downloads/guides/the-first-14-days.pdf',
    pages: 10,
  },
  {
    slug: 'the-fourth-trimester',
    number: '05',
    title: 'The Fourth Trimester',
    topic: 'Postpartum',
    audience: 'Parents planning support through the first six weeks and beyond',
    description:
      'A flexible family plan for recovery, feeding support, household care, emotional check-ins, and follow-up beyond the first days at home.',
    cover: '/images/guides/the-fourth-trimester.jpg',
    coverAlt: 'Cover of The Fourth Trimester, a family postpartum planning guide',
    file: '/downloads/guides/the-fourth-trimester.pdf',
    pages: 11,
  },
  {
    slug: 'supporting-her',
    number: '06',
    title: 'Supporting Her',
    topic: 'Partners & family',
    audience: 'Partners, relatives, friends, and other chosen support people',
    description:
      'A clear role plan for listening, preparing, offering practical comfort, adapting when birth plans change, and showing up after baby arrives.',
    cover: '/images/guides/supporting-her.jpg',
    coverAlt: 'Cover of Supporting Her, a guide for chosen birth and postpartum support people',
    file: '/downloads/guides/supporting-her.pdf',
    pages: 9,
  },
];

export const featuredGuide = guides.find((guide) => guide.slug === 'the-fourth-trimester')!;
