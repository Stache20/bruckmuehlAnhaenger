import {
    createStyles,
    Title,
    Text,
    Card,
    SimpleGrid,
    Container,
    rem,
    Button,
  } from '@mantine/core';
  
  const mockdata = [
    {
      title: 'S - Anhänger',
      description:
        'Allzweckanhänger mit Plane. Nutzmaße: 2500 x 1300 x 1600 mm.',
        price: 'Ab 23,00 € ',
        link: '/anhaengerS',
    },
    {
      title: 'M - Anhänger',
      description:
        'Allzweckanhänger mit Plane. Nutzmaße: 2500 x 1300 x 1600 mm',
        price: 'Ab 25,00 € ',
        link: '/anhaengerM',
    },
    {
      title: 'L - Anhänger',
      description:
        'Allzweckanhänger ohne Plane. Nutzmaße: 3000 x 1500 x 400 mm.',
      price: 'Ab 25,00 € ',
      link: '/anhaengerL',
    
      },
    {
      title: 'XL - Anhänger',
      description:
        'Allyweckanhänger mit Plane. Nutzmaße: 4100 x 1850 x 2000 mm',
        price: 'Ab 35,00 € ',
        link: '/anhaengerXL',
    },
    {
      title: 'Autoanhänger',
      description:
        'Autotransportanhänger. Nutzmaße: 4300 x 2100 x 120 mm',
        price: 'Ab 35,00 € ',
        link: '/anhaengerAT',
    },
  ];
  
  const useStyles = createStyles((theme) => ({
    title: {
      fontSize: rem(34),
      fontWeight: 900,
  
      [theme.fn.smallerThan('sm')]: {
        fontSize: rem(24),
      },
    },
  
    description: {
      maxWidth: 600,
      margin: 'auto',
  
      '&::after': {
        content: '""',
        display: 'block',
        backgroundColor: theme.fn.primaryColor(),
        width: rem(45),
        height: rem(2),
        marginTop: theme.spacing.sm,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
  
    card: {
      border: `${rem(1)} solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
      }`,
    },
  
    cardTitle: {
      '&::after': {
        content: '""',
        display: 'block',
        backgroundColor: 'green',
        width: rem(100),
        height: rem(2),
        marginTop: theme.spacing.sm,
      },
    },
  }));
  
  export function FeaturesCards() {
    const { classes } = useStyles();
    const features = mockdata.map((feature) => (
      <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
        <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
          {feature.title}
        </Text>
        <Text fz="sm" c="dimmed" mt="sm">
          {feature.description}
        </Text>
        <Button component="a" href={feature.link} variant="outline" color="teal.7" fullWidth mt="md" radius="md">
{feature.price}      </Button>

      </Card>
    ));
  
    return (
      <Container size="lg" pt={300} pb={300}>
      
  
        <Title id='mehrAnhaenger'order={2} className={classes.title} ta="center" mt="sm">
          Anhänger für jeden Bedarf
        </Title>
  
        <SimpleGrid cols={5} spacing="xl" mt={50} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
          {features}
        </SimpleGrid>
      </Container>
    );
  }

  export default FeaturesCards