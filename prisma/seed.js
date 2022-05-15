const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main() {
  try {
    const Abulon = await prisma.fish.upsert({
      where: { name: 'Abulon' },
      update: {},
      create: {
        name: 'Abulon',
		year: '2011',
		tonnesPerYear: '464'
      },
    });

    const Algas = await prisma.fish.upsert({
        where: { name: 'Algas' },
        update: {},
        create: {
          name: 'Algas',
          year: '2011',
          tonnesPerYear: '5072'
        },
      });

      const Almeja = await prisma.fish.upsert({
        where: { name: 'Almeja' },
        update: {},
        create: {
          name: 'Almeja',
          year: '2011',
          tonnesPerYear: '27680'
        },
      });

      const Bagre = await prisma.fish.upsert({
        where: { name: 'Bagre' },
        update: {},
        create: {
          name: 'Bagre',
          year: '2011',
          tonnesPerYear: '4434'
        },
      });

      const Bandera = await prisma.fish.upsert({
        where: { name: 'Bandera' },
        update: {},
        create: {
          name: 'Bandera',
          year: '2011',
          tonnesPerYear: '7053'
        },
      });

      const Calamar = await prisma.fish.upsert({
        where: { name: 'Calamar' },
        update: {},
        create: {
          name: 'Calamar',
          year: '2011',
          tonnesPerYear: '34973'
        },
      });

      const Camaron = await prisma.fish.upsert({
        where: { name: 'Camaron' },
        update: {},
        create: {
          name: 'Camaron',
          year: '2011',
          tonnesPerYear: '184123'
        },
      });

      const Caracol = await prisma.fish.upsert({
        where: { name: 'Caracol' },
        update: {},
        create: {
          name: 'Caracol',
          year: '2011',
          tonnesPerYear: '7901'
        },
      });

      const Carpa = await prisma.fish.upsert({
        where: { name: 'Carpa' },
        update: {},
        create: {
          name: 'Carpa',
          year: '2011',
          tonnesPerYear: '23507'
        },
      });

      const Corvina = await prisma.fish.upsert({
        where: { name: 'Corvina' },
        update: {},
        create: {
          name: 'Corvina',
          year: '2011',
          tonnesPerYear: '7923'
        },
      });

      const Charal = await prisma.fish.upsert({
        where: { name: 'Charal' },
        update: {},
        create: {
          name: 'Charal',
          year: '2011',
          tonnesPerYear: '3381'
        },
      });

      const Erizo = await prisma.fish.upsert({
        where: { name: 'Erizo' },
        update: {},
        create: {
          name: 'Erizo',
          year: '2011',
          tonnesPerYear: '2964'
        },
      });

      const Guachinango = await prisma.fish.upsert({
        where: { name: 'Guachinango' },
        update: {},
        create: {
          name: 'Guachinango',
          year: '2011',
          tonnesPerYear: '6206'
        },
      });

      const Jaiba = await prisma.fish.upsert({
        where: { name: 'Jaiba' },
        update: {},
        create: {
          name: 'Jaiba',
          year: '2011',
          tonnesPerYear: '20262'
        },
      });

      const Jurel = await prisma.fish.upsert({
        where: { name: 'Jurel' },
        update: {},
        create: {
          name: 'Jurel',
          year: '2011',
          tonnesPerYear: '14323'
        },
      });

      const Langosta = await prisma.fish.upsert({
        where: { name: 'Langosta' },
        update: {},
        create: {
          name: 'Langosta',
          year: '2011',
          tonnesPerYear: '3228'
        },
      });

      const Langostino = await prisma.fish.upsert({
        where: { name: 'Langostino' },
        update: {},
        create: {
          name: 'Langostino',
          year: '2011',
          tonnesPerYear: '2945'
        },
      });

      const Lebrancha = await prisma.fish.upsert({
        where: { name: 'Lebrancha' },
        update: {},
        create: {
          name: 'Lebrancha',
          year: '2011',
          tonnesPerYear: '3985'
        },
      });

      const Lisa = await prisma.fish.upsert({
        where: { name: 'Lisa' },
        update: {},
        create: {
          name: 'Lisa',
          year: '2011',
          tonnesPerYear: '7311'
        },
      });

      const Lobina = await prisma.fish.upsert({
        where: { name: 'Lobina' },
        update: {},
        create: {
          name: 'Lobina',
          year: '2011',
          tonnesPerYear: '1095'
        },
      });

      const Macarela = await prisma.fish.upsert({
        where: { name: 'Macarela' },
        update: {},
        create: {
          name: 'Macarela',
          year: '2011',
          tonnesPerYear: '16663'
        },
      });

      const Mero = await prisma.fish.upsert({
        where: { name: 'Mero' },
        update: {},
        create: {
          name: 'Mero',
          year: '2011',
          tonnesPerYear: '8792'
        },
      });

      const Mojarra = await prisma.fish.upsert({
        where: { name: 'Mojarra' },
        update: {},
        create: {
          name: 'Mojarra',
          year: '2011',
          tonnesPerYear: '75927'
        },
      });

      const Ostion = await prisma.fish.upsert({
        where: { name: 'Ostion' },
        update: {},
        create: {
          name: 'Ostion',
          year: '2011',
          tonnesPerYear: '46851'
        },
      });

      const Pargo = await prisma.fish.upsert({
        where: { name: 'Pargo' },
        update: {},
        create: {
          name: 'Pargo',
          year: '2011',
          tonnesPerYear: '4272'
        },
      });

      const Peto = await prisma.fish.upsert({
        where: { name: 'Peto' },
        update: {},
        create: {
          name: 'Peto',
          year: '2011',
          tonnesPerYear: '3784'
        },
      });

      const Pulpo = await prisma.fish.upsert({
        where: { name: 'Pulpo' },
        update: {},
        create: {
          name: 'Pulpo',
          year: '2011',
          tonnesPerYear: '27541'
        },
      });

      const Robaldo = await prisma.fish.upsert({
        where: { name: 'Robaldo' },
        update: {},
        create: {
          name: 'Robaldo',
          year: '2011',
          tonnesPerYear: '7147'
        },
      });

      const Ronco = await prisma.fish.upsert({
        where: { name: 'Ronco' },
        update: {},
        create: {
          name: 'Ronco',
          year: '2011',
          tonnesPerYear: '2799'
        },
      });

      const Sardina = await prisma.fish.upsert({
        where: { name: 'Sardina' },
        update: {},
        create: {
          name: 'Sardina',
          year: '2011',
          tonnesPerYear: '684132'
        },
      });

      const Sargazo = await prisma.fish.upsert({
        where: { name: 'Sargazo' },
        update: {},
        create: {
          name: 'Sargazo',
          year: '2011',
          tonnesPerYear: '649'
        },
      });

      const Sierra = await prisma.fish.upsert({
        where: { name: 'Sierra' },
        update: {},
        create: {
          name: 'Sierra',
          year: '2011',
          tonnesPerYear: '13259'
        },
      });

      const Tiburon = await prisma.fish.upsert({
        where: { name: 'Tiburon' },
        update: {},
        create: {
          name: 'Tiburon',
          year: '2011',
          tonnesPerYear: '23866'
        },
      });

      const Trucha = await prisma.fish.upsert({
        where: { name: 'Trucha' },
        update: {},
        create: {
          name: 'Trucha',
          year: '2011',
          tonnesPerYear: '10486'
        },
      });

      const Tunidos = await prisma.fish.upsert({
        where: { name: 'Tunidos' },
        update: {},
        create: {
          name: 'Tunidos',
          year: '2011',
          tonnesPerYear: '133426'
        },
      });

      const Otras = await prisma.fish.upsert({
        where: { name: 'Otras' },
        update: {},
        create: {
          name: 'Otras',
          year: '2011',
          tonnesPerYear: '232049'
        },
      });



    console.log('Create fish');

  } catch(e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();