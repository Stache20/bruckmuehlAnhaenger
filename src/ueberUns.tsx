import { createStyles, Title, Text, Button, Container, rem } from '@mantine/core';
import { useScrollIntoView } from '@mantine/hooks';
import Main from './Main'

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    paddingTop: rem(120),
    paddingBottom: rem(80),

    [theme.fn.smallerThan('sm')]: {
      paddingTop: rem(80),
      paddingBottom: rem(60),
    },
  },

  inner: {
    position: 'relative',
    zIndex: 1,
  },

  dots: {
    position: 'absolute',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  dotsLeft: {
    left: 0,
    top: 0,
  },

  title: {
    textAlign: 'center',
    fontWeight: 800,
    fontSize: rem(40),
    letterSpacing: -1,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    marginBottom: theme.spacing.xs,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    [theme.fn.smallerThan('xs')]: {
      fontSize: rem(28),
      textAlign: 'left',
    },
  },

  highlight: {
    color: '#0CA678',
  },

  description: {
    textAlign: 'center',

    [theme.fn.smallerThan('xs')]: {
      textAlign: 'left',
      fontSize: theme.fontSizes.md,
    },
  },

  controls: {
    marginTop: theme.spacing.lg,
    display: 'flex',
    justifyContent: 'center',

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  control: {
    '&:not(:first-of-type)': {
      marginLeft: theme.spacing.md,
    },

    [theme.fn.smallerThan('xs')]: {
      height: rem(42),
      fontSize: theme.fontSizes.md,

      '&:not(:first-of-type)': {
        marginTop: theme.spacing.md,
        marginLeft: 0,
      },
    },
  },
}));

export function HeroText() {
  const { classes } = useStyles();


  const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({
    offset: 60,
  });


  return (
    <div>
    <Container className={classes.wrapper} size={1400}>
      

      <div className={classes.inner}>
        <Title ta='center' className={classes.title}>
          Ihr{' '}
          <Text ta='center' component="span" className={classes.highlight} inherit>
            AnhängerVerleih
          </Text>{' '}
          in Bruckmühl
        </Title>

        <Container p={0} size={600}>
          <Text ta='center' size="lg" color="dimmed" className={classes.description}>
Mieten Sie jetzt den perfekten Anhänger für jeden Bedarf - schnell, einfach und bequem! Unser Anhängerverleih bietet Ihnen eine große Auswahl an hochwertigen Anhängern. Egal ob für den Umzug, den Transport von Baumaterialien oder Autotransport - bei uns finden Sie garantiert den passenden Anhänger. 
          </Text>
        </Container>

        <div className={classes.controls}>
        
          <Button onClick={() =>
          scrollIntoView({
          })
        }
 variant="outline" color="teal.7" className={classes.control} size="lg">
            Zu den Anhängern
          </Button>
        </div>
      </div>
    </Container>
    <div ref={targetRef}>
      <Main/>
    </div>
    </div>
  );
}


export default HeroText