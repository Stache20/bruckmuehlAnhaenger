import { Container, Title, Accordion, createStyles, rem } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    minHeight: 650,
  },

  title: {
    marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
  },

  item: {
    borderRadius: theme.radius.md,
    marginBottom: theme.spacing.lg,
    border: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
}));

const answerOne = 'Übers Telefon! Bitte rufen Sie uns unter 19293 an '
const answerTwo = 'Bitte Informieren Sie uns rechtzeitig sobald Sie wissen dass Sie sich verspäten'
const answerThree= 'Bitte Fragen Sie uns bezüglich langfristigen '
const answerFour= 'Stonierungen sind bis zu 24 Stunden im Voraus möglich'
  

export function FaqSimple() {
  const { classes } = useStyles();
  return (
    <Container size="sm" className={classes.wrapper}>
      <Title align="center" className={classes.title}>
        Antworten auf alle Fragen
      </Title>

      <Accordion variant="separated">
        <Accordion.Item className={classes.item} value="reset-password">
          <Accordion.Control>Wie kann ich Reservieren?</Accordion.Control>
          <Accordion.Panel>{answerOne}</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="another-account">
          <Accordion.Control>Was wenn ich mich verspäte?</Accordion.Control>
          <Accordion.Panel>{answerTwo}</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="newsletter">
          <Accordion.Control>Gibt es längere vermietungen als die Tarife angegeben?</Accordion.Control>
          <Accordion.Panel>{answerThree}</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="credit-card">
          <Accordion.Control>Kann ich eine Reservierung stornieren?</Accordion.Control>
          <Accordion.Panel>{answerFour}</Accordion.Panel>
        </Accordion.Item>

       
      </Accordion>
    </Container>
  );
}

export default FaqSimple