import { Button, Paper, Text, Group,  } from '@mantine/core';

export function Cookies(props:any) {
  return (
    <Paper withBorder p="lg" radius="md" shadow="md">
      <Group position="apart" mb="xs">
        <Text fz="md" fw={500}>
          Cookies Erlauben
        </Text>
      </Group>
      <Text c="dimmed" fz="xs">
      Diese Website verwendet Cookies, um Ihre Benutzererfahrung zu verbessern und relevante Inhalte und Werbung anzubieten. Sie sind kleine Textdateien, die von Ihrem Browser gespeichert werden, wenn Sie eine Website besuchen. Wir verwenden Cookies, um Informationen über die Nutzung der Website zu sammeln und zu analysieren, um unsere Dienste zu verbessern und zu personalisieren.

Einige der Cookies, die wir verwenden, sind unbedingt erforderlich, damit die Website ordnungsgemäß funktioniert, während andere optional sind und uns helfen, Ihre Benutzererfahrung zu verbessern. Sie können jederzeit die Einstellungen Ihres Browsers ändern, um Cookies zu blockieren oder zu löschen. Bitte beachten Sie jedoch, dass dies die Funktionalität unserer Website beeinträchtigen und einige Funktionen möglicherweise nicht verfügbar sein werden.

Durch die Nutzung unserer Website stimmen Sie der Verwendung von Cookies gemäß den Bestimmungen in unserer Datenschutzrichtlinie zu. Wenn Sie Ihre Einwilligung widerrufen möchten, können Sie dies jederzeit tun, indem Sie Ihre Browser-Einstellungen ändern oder uns kontaktieren.
      </Text>
      <Group position="center" mt="md">
        <Button onClick={props.click} variant="outline" color='teal.7'size="xs">
          Cookies Akzeptieren
        </Button>
        <Button component="a" href={'/impressum'}  variant="outline" color='teal.7'size="xs">
          Datenschutzerklärung
        </Button>
      </Group>
    </Paper>
  );
}

export default Cookies