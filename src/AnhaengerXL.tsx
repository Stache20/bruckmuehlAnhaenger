import {createStyles, Accordion, rem, ThemeIcon, List, Card, Text, Button, useMantineTheme } from '@mantine/core';
import Main from './Main'
import { IconCaravan, IconPlus } from '@tabler/icons-react';
import ContactIcons from './Contact';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const anhaenger = [
  {
    title: 'S-Anhänger',
    descriptionOne:
      'Allzweckanhänger mit Plane.',
      descriptionTwo: 'Zulässiges Gesamtgewicht: 0,75 t, ohne Bremse.',
      descriptionThree: 'Nutzmaße: 2500 x 1300 x1600 mm.',
      descriptionFour: 'Max. Zuladung: 530 kg.',
      priceOne: '1 - 5  Std. - 23,- € ',
      priceTwo: '6 - 24 Std. - 30,- €',
      priceThree: 'Wochenende (Fr 15:00 Uhr - Mo 9:00 Uhr)  - 60,- €',
      priceFour: '1 Woche     - 150,- €',
      link: '/anhaengerS',
  },
  {
      title: 'M-Anhänger',
    descriptionOne:
      'Allzweckanhänger mit Plane.',
      descriptionTwo: 'Zulässiges Gesamtgewicht: 1.3 t, mit Bremse.',
      descriptionThree: 'Nutzmaße: 2500 x 1300 x1600 mm.',
      descriptionFour: 'Max. Zuladung: 1000 kg.',
      priceOne: '1 - 5  Std. - 25,- € ',
      priceTwo: '6 - 24 Std. - 35,- €',
      priceThree: 'Wochenende (Fr 15:00 Uhr - Mo 9:00 Uhr)  - 70,- €',
      priceFour: '1 Woche     - 175,- €',
      link: '/anhaengerM',
    },
    {
      title: 'L-Anhänger',
    descriptionOne:
      'Allzweckanhänger ohne Plane.',
      descriptionTwo: 'Zulässiges Gesamtgewicht: 2 t, mit Bremse.',
      descriptionThree: 'Nutzmaße: 3000 x 1500 x400 mm.',
      descriptionFour: 'Max. Zuladung: 1620 kg.',
      priceOne: '1 - 5  Std. - 25,- € ',
      priceTwo: '6 - 24 Std. - 35,- €',
      priceThree: 'Wochenende (Fr 15:00 Uhr - Mo 9:00 Uhr)  - 70,- €',
      priceFour: '1 Woche     - 175,- €',
      link: '/anhaengerL',
    },
    {
      
      title: 'XL-Anhänger',
    descriptionOne:
      'Allzweckanhänger mit Plane.',
      descriptionTwo: 'Zulässiges Gesamtgewicht: 2.5 t, mit Bremse.',
      descriptionThree: 'Nutzmaße: 4100 x 1850 x2000 mm.',
      descriptionFour: 'Max. Zuladung: 1845 kg.',
      priceOne: '1 - 5  Std. - 35,- € ',
      priceTwo: '6 - 24 Std. - 50,- €',
      priceThree: 'Wochenende (Fr 15:00 Uhr - Mo 9:00 Uhr)  - 100,- €',
      priceFour: '1 Woche     - 250,- €',
      link: '/anhaengerXL',
    },
    {
      
      title: 'AT-Anhänger',
    descriptionOne:
      'AutoTransporter.',
      descriptionTwo: 'Zulässiges Gesamtgewicht: 2.5 t, mit Bremse.',
      descriptionThree: 'Nutzmaße: 4300 x 2100 x120 mm.',
      descriptionFour: 'Max. Zuladung: 1590 kg.',
      priceOne: '1 - 5  Std. - 35,- € ',
      priceTwo: '6 - 24 Std. - 50,- €',
      priceThree: 'Wochenende (Fr 15:00 Uhr - Mo 9:00 Uhr)  - 100,- €',
      priceFour: '1 Woche     - 250,- €',
      link: '/anhaengerAT',
    },

];

const useStyles = createStyles(() => ({

  cardStyle :{
    maxWidth:'600px',
    width: '90%',
     margin: 'auto'
  }

}))



function AnhaengerXL() {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const navigate= useNavigate()
  
  const secondaryColor = theme.colorScheme === 'dark'
    ? theme.colors.dark[1]
    : theme.colors.gray[7];

        
        const [active, setActive] = useState(3);
            const features = anhaenger[active]
  return (
    <div>
    <div className={classes.cardStyle}>
      <Card  shadow="sm" padding="lg">
        <Text align="center" size='xl' weight={700}>{features.title}</Text>
        <Text align="center" size="m" style={{ color: secondaryColor, lineHeight: 2 }}>
{features.descriptionOne}        </Text>
        <Text align="center" size="m" style={{ color: secondaryColor, lineHeight: 2.5 }}>
{features.descriptionTwo}        </Text>

        <Text align="center" size="m" style={{ color: secondaryColor, lineHeight: 2 }}>
{features.descriptionThree}        </Text>
        <Text align="center" size="m" style={{ color: secondaryColor, lineHeight: 2 }}>
       {features.descriptionFour}      </Text>
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
      <List.Item>{features.priceOne}</List.Item>
      <List.Item>{features.priceTwo}</List.Item>
      <List.Item>{features.priceThree}</List.Item>
      <List.Item>{features.priceFour}</List.Item>
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
        <Accordion.Panel>Alle Preise verstehen sich inkl. gesetzlicher Mwst. Änderung und Anpassungen vorbehalten. Alle früheren Preislisten sind ungültig. Wochenendtarif gilt von Fr. 15:00 Uhr bis Mo. 9:00 Uhr. Eine Anmietung ist nur bei Vorlage eines gültigen Personalausweises und Füherscheins möglich. Die Mietgebühr ist im Voraus zu zahlen. Eine Kaution in Höhe von 50 € (mit Adapterstück 60€) ist bei Übernahme des Anhängers zu hinterlegen.</Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item  value="contact">
        <Accordion.Control style={{ color: 'teal.7'}}>Jetzt Reservieren</Accordion.Control>
        <Accordion.Panel>Bitte Reservieren Sie telefonisch unter <Text component='a' href={'Tel:+4980627187'}>+49 (8062) 7187.</Text></Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item  value="mehr">
        <Accordion.Control style={{ color: 'teal.7'}}>Mehr Anhänger</Accordion.Control>
        <Accordion.Panel>

        <Button component='a' href={'/anhaengerS'} onClick={(event) =>{
          setActive(0)
event.preventDefault()
navigate('/anhaengerS')
          }
        }
 variant="outline" color="teal.7" fullWidth style={{ marginTop: 14 }}>
          S-Anhaenger
        </Button>

        <Button component='a' href={'/anhaengerM'} onClick={(event) =>{
          setActive(1)
          event.preventDefault()
          navigate('/anhaengerM')
          
        }
        }
 variant="outline" color="teal.7" fullWidth style={{ marginTop: 14 }}>
          M-Anhaenger
        </Button>

        <Button component='a' href={'/anhaengerL'} onClick={(event) =>{
          setActive(2)
          event.preventDefault()
          navigate('/anhaengerL')
        }
        }
 variant="outline" color="teal.7" fullWidth style={{ marginTop: 14 }}>
          L-Anhaenger
        </Button>

        <Button component='a' href={'/anhaengerXL'} onClick={(event) =>{
          setActive(3)
          event.preventDefault()
          navigate('/anhaengerXL')
        }
        }
 variant="outline" color="teal.7" fullWidth style={{ marginTop: 14 }}>
          XL-Anhaenger
        </Button>

        <Button component='a' href={'/anhaengerAT'} onClick={(event) =>{
          setActive(1)
          event.preventDefault()
          navigate('/anhaengerAT')
        }
        }
 variant="outline" color="teal.7" fullWidth style={{ marginTop: 14 }}>
          Auto Transporter 
        </Button>




        </Accordion.Panel>
      </Accordion.Item>
      
      </Accordion>

      </Card>
     
      </div>
      <Main />

<ContactIcons/>

      </div>
  );
}

export default AnhaengerXL