import { Card, Text } from '@mantine/core';

function Geschäftsbedingungen() {
  return (
    <Card
      shadow="sm"
      padding="xl"
    >

      <Text weight={500} size="lg" mt="md">
        Geschäftsbedingungen
      </Text>

      <Text mt="xs" color="dimmed" size="sm">
      Alle Preise verstehen sich inkl. gesetzlicher Mwst. Änderung und Anpassungen vorbehalten. Alle früheren Preislisten sind ungültig. Wochenendtarif gilt von Fr. 15:00 Uhr bis 9:00 Uhr. Eine Anmietung ist nur bei Vorlage eines gültigen Personalausweises und Füherscheins möglich. Die Mietgebühr ist im Voraus zu zahlen. Eine Kaution in Höhe von 50 € (mit Adapterstück 60€) ist bei Übernahme des Anhängers zu hinterlegen.
      </Text>
    </Card>
  );
}


export default Geschäftsbedingungen