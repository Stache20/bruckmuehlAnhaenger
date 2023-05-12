import React from 'react';
import {createStyles, Accordion, rem, ThemeIcon, List, Card, Text, Badge, Button, Group, useMantineTheme } from '@mantine/core';
import Main from './Main'
import { IconCaravan, IconPlus } from '@tabler/icons-react';
import ContactIcons from './Contact';
import { useScrollIntoView } from '@mantine/hooks';

const useStyles = createStyles(() => ({

  cardStyle :{
    maxWidth:'600px',
    width: '90%',
     margin: 'auto'
  }

}))


function AnhaengerM() {
  const { classes } = useStyles();

  const theme = useMantineTheme();

  const secondaryColor = theme.colorScheme === 'dark'
    ? theme.colors.dark[1]
    : theme.colors.gray[7];

        const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({
          offset: 60,
        });

  return (
    <div>
    <div className={classes.cardStyle}>
      <Card  shadow="sm" padding="lg">
      <Group position="apart" mt="xs" mb="xs">
        <Text align="center" size='xl' weight={700}>M-Anhänger</Text>
        <Badge color="pink" variant="light">
          Meist Verliehen
        </Badge>
        </Group>
        <Text align="center" size="m" style={{ color: secondaryColor, lineHeight: 2 }}>
        Allzweckanhänger mit Plane
        </Text>
        <Text align="center" size="m" style={{ color: secondaryColor, lineHeight: 2.5 }}>
        Zulässiges Gesamtgewicht: 1,3 t, mit Bremse.
        </Text>

        <Text align="center" size="m" style={{ color: secondaryColor, lineHeight: 2 }}>
        Nutzmaße: 2500 x 1300 x 1600 mm.
        </Text>
        <Text align="center" size="m" style={{ color: secondaryColor, lineHeight: 2 }}>
        Max. Zuladung: 1620 kg.        </Text>
        <List
      spacing="xl"
      size="sm"
      center
      icon={
        <ThemeIcon color="teal" size={24} radius="xl">
          <IconCaravan/>
        </ThemeIcon>
    
      }
      style={{ color: secondaryColor, lineHeight: 3 }}
      py='xl'
    > 
      <List.Item>1 - 5  Std. - 25,- €</List.Item>
      <List.Item>6 - 24 Std. - 35,- €</List.Item>
      <List.Item>Wochenende  - 70,- €</List.Item>
      <List.Item>1 Woche     - 175,- €</List.Item>
</List>
<Accordion

      chevron={<IconPlus size="1rem" />}
      styles={{

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
      }}
 >
      <Accordion.Item  value="customization">
        <Accordion.Control style={{ color: 'teal.7'}}>Geschäftsbedingungen</Accordion.Control>
        <Accordion.Panel>Alle Preise verstehen sich inkl. gesetzlicher Mwst. Änderung und Anpassungen vorbehalten. Alle früheren Preislisten sind ungültig. Wochenendtarif gilt von Fr. 15:00 Uhr bis 9:00 Uhr. Eine Anmietung ist nur bei Vorlage eines gültigen Personalausweises und Füherscheins möglich. Die Mietgebühr ist im Voraus zu zahlen. Eine Kaution in Höhe von 50 € (mit Adapterstück 60€) ist bei Übernahme des Anhängers zu hinterlegen.</Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item  value="contact">
        <Accordion.Control style={{ color: 'teal.7'}}>Jetzt Reservieren</Accordion.Control>
        <Accordion.Panel>Bitte Reservieren Sie telefonisch unter +49 (8062) 7187</Accordion.Panel>
      </Accordion.Item>
      </Accordion>

        <Button onClick={() =>
          scrollIntoView({
            alignment: 'center',
          })
        }
 variant="outline" color="teal.7" fullWidth style={{ marginTop: 14 }}>
          Mehr Anhänger
        </Button>

      </Card>
      
      </div>
      <div ref={targetRef}>
<Main />
</div>
<ContactIcons/>

      </div>
  );
}

export default AnhaengerM