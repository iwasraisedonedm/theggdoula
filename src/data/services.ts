export interface ServiceRecord {
  slug: string;
  heroImage: string;
  heroImageAlt: string;
  number: string;
  name: string;
  stage: string;
  summary: string;
  focus: string;
  benefit: string;
  idealClient: string;
  detail: string;
}

export interface Service extends ServiceRecord {
  title: string;
  slug: string;
  description: string;
  heroImage: string;
  heroImageAlt: string;
  introduction: string;
  inclusions: string[];
  benefits: string[];
  process: Array<{ title: string; description: string }>;
  faqs: Array<{ question: string; answer: string }>;
  relatedServices: string[];
  seo: { title: string; description: string };
}

const serviceRecords: ServiceRecord[] = [
  {
    slug: 'prenatal',
    heroImage: '/images/teesee-family-support.avif',
    heroImageAlt: 'Teesee Logan supporting a laboring parent with their partner nearby',
    number: '01',
    name: 'Prenatal Support',
    stage: 'During pregnancy',
    summary:
      'Prenatal planning sessions create space to talk through your preferences, questions, concerns, and the support that would feel useful to you.',
    focus:
      'Birth vision and preferences; The doula’s role and the role of your support team; Comfort measures, breathing, movement, and relaxation; Signs and stages of labor and preparing for the day; Postpartum recovery, feeding, and newborn questions.',
    benefit: 'Comfort measures, breathing, movement, and relaxation.',
    idealClient:
      'Prenatal planning sessions create space to talk through your preferences, questions, concerns, and the support that would feel useful to you.',
    detail:
      'Prenatal planning sessions create space to talk through your preferences, questions, concerns, and the support that would feel useful to you.',
  },
  {
    slug: 'birth',
    heroImage: '/images/teesee-family-support.avif',
    heroImageAlt: 'Teesee Logan supporting a laboring parent with their partner nearby',
    number: '02',
    name: 'Labor & Birth Support',
    stage: 'Labor and birth',
    summary:
      'Birth doula care offers continuous emotional, physical, and informational support through labor and birth, wherever you plan to give birth.',
    focus:
      'Labor texts, calls, and preparation support; Continuous labor and birth support; Comfort measures such as counter-pressure, massage, breathing, and position changes; Support for your partner and communication of your preferences; Time after birth to settle in and begin bonding and feeding.',
    benefit: 'Continuous labor and birth support',
    idealClient:
      'Birth doula care offers continuous emotional, physical, and informational support through labor and birth, wherever you plan to give birth.',
    detail:
      'Birth doula care offers continuous emotional, physical, and informational support through labor and birth, wherever you plan to give birth.',
  },
  {
    slug: 'postpartum',
    heroImage: '/images/client-postpartum-family.avif',
    heroImageAlt: 'A parent holding their newborn during a quiet postpartum moment',
    number: '03',
    name: 'Postpartum Care',
    stage: 'After birth',
    summary:
      'Postpartum support is centered on caring for the parent while helping the family settle into life with a new baby.',
    focus:
      'Daytime or overnight shifts, depending on the selected package; Practical newborn care and parent education; Help with baby laundry, bottle and pump sterilization, and simple meal preparation; Time for the parent to rest, shower, eat, or take a break; Feeding and latch support within the doula’s educator role.',
    benefit: 'Time for the parent to rest, shower, eat, or take a break.',
    idealClient:
      'Postpartum support is centered on caring for the parent while helping the family settle into life with a new baby.',
    detail:
      'Postpartum support is centered on caring for the parent while helping the family settle into life with a new baby.',
  },
  {
    slug: 'breastfeeding',
    heroImage: '/images/doula-newborn-support.avif',
    heroImageAlt: 'Teesee offering gentle newborn care at a family’s home',
    number: '04',
    name: 'Breastfeeding Education',
    stage: 'Feeding support',
    summary:
      'Teesee describes her role as a breastfeeding educator, offering practical support as families learn about nursing, pumping, and bottle feeding.',
    focus:
      'Discussing comfortable feeding positions; Education about latch and feeding routines; Support with pumping and bottle feeding questions; Help connecting with a licensed lactation or medical professional when a concern is outside doula scope.',
    benefit: 'Education about latch and feeding routines.',
    idealClient:
      'Teesee describes her role as a breastfeeding educator, offering practical support as families learn about nursing, pumping, and bottle feeding.',
    detail:
      'Teesee describes her role as a breastfeeding educator, offering practical support as families learn about nursing, pumping, and bottle feeding.',
  },
  {
    slug: 'newborn-care',
    heroImage: '/images/doula-newborn-support.avif',
    heroImageAlt: 'Teesee offering gentle newborn care at a family’s home',
    number: '05',
    name: 'Newborn Care',
    stage: 'Newborn care',
    summary:
      'Newborn care support helps parents learn everyday infant care and find a rhythm during the first months at home.',
    focus:
      'Basic baby care and parent education; Support with bathing, diapering, and soothing routines; Baby care while parents rest or take care of everyday needs; Baby laundry and pump or bottle sterilization; Fresh-air walks and age-appropriate play with the family’s direction.',
    benefit: 'Baby care while parents rest or take care of everyday needs.',
    idealClient:
      'Newborn care support helps parents learn everyday infant care and find a rhythm during the first months at home.',
    detail:
      'Newborn care support helps parents learn everyday infant care and find a rhythm during the first months at home.',
  },
];

export const serviceFaqs = [
  {
    question: 'What does a birth doula do?',
    answer:
      'A birth doula offers continuous emotional, physical, and informational support through labor and birth. Preparation can include talking through your preferences, comfort measures, and questions. Doula care is non-medical and works alongside your clinical team.',
  },
  {
    question: 'What might we cover in a prenatal planning session?',
    answer:
      'You can talk through birth preferences, your support team, comfort measures, labor, relaxation and breathing, movement, communication, feeding, and newborn questions. The conversation makes room for what matters to you.',
  },
  {
    question: 'What does postpartum doula support include?',
    answer:
      'Support is shaped around your family and can include time to rest, practical newborn care, feeding education, parent education, and help with everyday tasks at home. It is nonmedical care.',
  },
  {
    question: 'What does a Newborn Care Specialist help with?',
    answer:
      'A Newborn Care Specialist offers practical support with everyday care such as bathing, diapering, soothing, and routines, along with parent education. Support follows your family’s direction and does not replace your baby’s healthcare team.',
  },
  {
    question: 'What can a breastfeeding educator help with?',
    answer:
      'A breastfeeding educator offers practical education about nursing, pumping, and bottle feeding, including feeding positions and latch. For clinical feeding or health concerns, contact a licensed clinician or lactation professional.',
  },
  {
    question: 'Can I talk through my options before deciding?',
    answer:
      'A complimentary 30-minute consultation gives you space to discuss what your family needs and review service details. Availability is confirmed together.',
  },
];

const serviceQuestions: Record<string, Service['faqs']> = {
  prenatal: [
    serviceFaqs[1],
    serviceFaqs[5],
    {
      question: 'Can a doula make decisions for me?',
      answer:
        'No. Teesee shares information and supports your choices; decisions remain yours and your clinical team’s.',
    },
  ],
  birth: [
    serviceFaqs[0],
    {
      question: 'Can I have doula support in a hospital or with an epidural?',
      answer:
        'Doula support can complement different birth settings and choices. Discuss your plans during a consultation; your birth location sets its own policies.',
    },
    {
      question: 'Can a doula tell me when to go to the hospital?',
      answer:
        'A doula does not assess labor or make medical decisions. Follow guidance from your clinician or birth location.',
    },
  ],
  postpartum: [
    serviceFaqs[2],
    serviceFaqs[5],
    {
      question: 'Can I book postpartum care on its own?',
      answer: 'Yes. You can ask about postpartum support without arranging birth doula care.',
    },
  ],
  breastfeeding: [
    serviceFaqs[4],
    {
      question: 'Can you help with pumping or bottle feeding?',
      answer: 'Yes. Practical education can include pumping and bottle-feeding questions, shaped around your goals.',
    },
    {
      question: 'Does this include clinical lactation care?',
      answer:
        'No. Clinical concerns that need assessment or treatment should go to a licensed lactation or medical professional.',
    },
  ],
  'newborn-care': [
    serviceFaqs[3],
    {
      question: 'Do I need to hire a birth doula first?',
      answer: 'No. Newborn care can be discussed as a separate service.',
    },
    {
      question: 'Does newborn care include medical advice?',
      answer: 'No. Teesee provides practical care and parent education, not diagnosis or treatment.',
    },
  ],
};

const processSteps = [
  {
    title: 'Talk through your needs',
    description:
      'Use a complimentary consultation to share your questions, timing, and the support you are considering.',
  },
  {
    title: 'Shape the support',
    description: 'If the service feels like a fit, discuss priorities and the practical details together.',
  },
  {
    title: 'Adjust as needed',
    description: 'Support follows your family’s needs and preferences within the service scope.',
  },
];

export const services: Service[] = serviceRecords.map((service, index) => {
  const inclusionItems = service.focus
    .split(';')
    .map((item) => item.trim())
    .filter(Boolean);
  return {
    ...service,
    title: service.name,
    description: service.summary,
    introduction: service.detail,
    inclusions: inclusionItems,
    benefits: [
      service.benefit,
      'Space to ask questions and discuss preferences',
      'Support shaped around your family’s direction',
    ],
    process: processSteps,
    faqs: serviceQuestions[service.slug],
    relatedServices: [serviceRecords[(index + 1) % serviceRecords.length].slug],
    seo: { title: `${service.name} in Orange County | Grit + Grace Doula`, description: service.summary },
  };
});
