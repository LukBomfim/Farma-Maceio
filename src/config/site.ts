export const site = {
  name: 'Farma Maceió',
  url: 'https://farmamaceio.com.br', // usado em astro.config.mjs, sitemap e Open Graph


  whatsapp: '5582987706387', // 55 + DDD + número, só dígitos
  phoneDisplay: '(82) 98770-6387', // como aparece escrito no site

  landline: '558221400693',
  landlineDisplay: '(82) 2140-0693',


  address: 'Rua Pastor Eurico Calheiros, 4F - Jacintinho, Maceió - AL',
  addressDetails: {
    street: 'Rua Pastor Eurico Calheiros, 4F',
    neighborhood: 'Jacintinho',
    city: 'Maceió',
    state: 'AL',
    postalCode: '57041-620',
  },
  hours: [
    { label: 'Segunda a Sábado', value: '07h às 21h' },
    { label: 'Domingos e Feriados', value: '07h às 13h' },
  ],
  services: [
    {
      icon: 'truck',
      title: 'Entrega Grátis',
      description: 'Entrega sem custo para o Jacintinho. Peça pelo WhatsApp e receba em casa.',
    },
    {
      icon: 'droplet',
      title: 'Teste de Glicemia',
      description: 'Acompanhamento rápido da sua glicemia aqui na farmácia.',
    },
    {
      icon: 'heart-pulse',
      title: 'Aferição de Pressão',
      description: 'Verifique sua pressão arterial de forma rápida e sem complicação.',
    },
  ],
  legal: {
    companyName: 'FARMA MACEIO LTDA',
    cnpj: '68.670.886/0001-14',
    crf: 'CRF/AL 0000',
    afe: '5.29027-8',
  },
};

const waMessage = 'Olá! Gostaria de fazer um pedido';

export const waLink = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(waMessage)}`;

export const telLink = `tel:+${site.landline}`;

export const mapsLink = `https://maps.app.goo.gl/6egjTtT61FuBhZqL9`;