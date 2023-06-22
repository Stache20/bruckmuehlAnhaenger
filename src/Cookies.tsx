import { Button, Paper, Text, Group,  } from '@mantine/core';

export function Cookies(props:any) {
  return (
    <Paper withBorder p="lg" radius="md" shadow="md">
      
      <Text c="dimmed" fz="xs">
      <div>

<h1>Sehr geehrte Besucher unserer Webseite,</h1>

<p>Wir nutzen Cookies auf unserer Website. Sie sind essenziell für die funktionalität der Website. Wenn Sie unter 16 Jahre alt sind und Ihre Zustimmung zu freiwilligen Diensten geben möchten, müssen Sie Ihre Erziehungsberechtigten um Erlaubnis bitten. Personenbezogene Daten können verarbeitet werden (z. B. IP-Adressen). Weitere Informationen über die Verwendung Ihrer Daten finden Sie in unserer Datenschutzerklärung. </p>
</div>
     </Text>
      <Group position="center" mt="md">
        <Button onClick={props.click} variant="outline" color='teal.7'size="xs">
          Akzeptieren
        </Button>
        <Button component="a" href={'/datenschutz'}  variant="outline" color='teal.7'size="xs">
          Datenschutzerklärung
        </Button>
      </Group>
    </Paper>
  );
}

export default Cookies