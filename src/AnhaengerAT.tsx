import React from 'react';
import {Accordion, rem, ThemeIcon, List, Card, Image, Text, Badge, Button, Group, useMantineTheme } from '@mantine/core';
import Main from './Main'
import { IconCaravan, IconPlus } from '@tabler/icons-react';
import ContactIcons from './Contact';
import { useScrollIntoView } from '@mantine/hooks';




function AnhaengerAT() {
  const theme = useMantineTheme();

  const secondaryColor = theme.colorScheme === 'dark'
    ? theme.colors.dark[1]
    : theme.colors.gray[7];

        const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({
          offset: 60,
        });

  return (
    <div>
    <div style={{ width: 600, margin: 'auto' }}>
      <Card  shadow="sm" padding="lg">
        <Text align="center" size='xl' weight={700}>AutoTransporter</Text>
        <Text align="center" size="m" style={{ color: secondaryColor, lineHeight: 2 }}>
        Allzweckanhänger mit Plane
        </Text>
        <Text align="center" size="m" style={{ color: secondaryColor, lineHeight: 2.5 }}>
        Zulässiges Gesamtgewicht: 2,5 t, mit Bremse.
        </Text>

        <Text align="center" size="m" style={{ color: secondaryColor, lineHeight: 2 }}>
        Nutzmaße: 4300 x 2100 x 120 mm.
        </Text>
        <Text align="center" size="m" style={{ color: secondaryColor, lineHeight: 2 }}>
        Max. Zuladung: 1590 kg.        </Text>
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
      <List.Item>1 - 5  Std. - 35,- €</List.Item>
      <List.Item>6 - 24 Std. - 50,- €</List.Item>
      <List.Item>Wochenende  - 100,- €</List.Item>
      <List.Item>1 Woche     - 250,- €</List.Item>
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

export default AnhaengerAT