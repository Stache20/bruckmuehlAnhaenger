import { Container, Title, Accordion, createStyles, rem, Text } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';


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
    // styles added to all items
    backgroundColor: 'white',
    border: `${rem(1)} solid #ededed`,

    // styles added to expanded item
    '&[data-active]': {
      backgroundColor: '#E6FCF5',
    },
  },

  chevron: {
    '&[data-rotate]': {
      transform: 'rotate(45deg)',
    },
  },


}));

const answerOne = 'Bitte Reservieren Sie telefonisch unter '
const answerTwo = 'Bitte Informieren Sie uns rechtzeitig sobald Sie wissen, dass Sie sich verspäten.'
const answerThree= 'Bitte Fragen Sie uns bezüglich langfristigen Tarifen, gerne auch telefonisch unter +49 (8062) 7187.'
const answerFour= 'Stonierungen sind bis zu 24 Stunden im Voraus möglich'
  

export function FaqSimple() {
  const { classes } = useStyles();
  return (
    <Container size="sm" className={classes.wrapper}>
      <Title align="center" className={classes.title}>
        Antworten auf alle Fragen
      </Title>

      <Accordion       chevron={<IconPlus size="1rem" />}
 variant="separated">
        <Accordion.Item className={classes.item} value="reset-password">
          <Accordion.Control>Wie kann ich Reservieren?</Accordion.Control>
          <Accordion.Panel>{answerOne}<Text component='a' href={'Tel:+4980627187'}>+49 (8062) 7187.</Text></Accordion.Panel>
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
          <Accordion.Panel >{answerFour}</Accordion.Panel>
        </Accordion.Item>

       
      </Accordion>
    </Container>
  );
}

export default FaqSimple