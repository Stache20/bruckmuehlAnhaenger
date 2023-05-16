import { Card, Text } from '@mantine/core';

function Datenschutzerklärung() {
  return (
    <Card
      shadow="sm"
      padding="xl"
    >

      <Text weight={500} size="lg" mt="md">
        Datenschutz
      </Text>

      <Text mt="xs" color="dimmed" size="sm">
      Diese Website verwendet Cookies, um Ihre Benutzererfahrung zu verbessern und relevante Inhalte und Werbung anzubieten. Sie sind kleine Textdateien, die von Ihrem Browser gespeichert werden, wenn Sie eine Website besuchen. Wir verwenden Cookies, um Informationen über die Nutzung der Website zu sammeln und zu analysieren, um unsere Dienste zu verbessern und zu personalisieren.

Einige der Cookies, die wir verwenden, sind unbedingt erforderlich, damit die Website ordnungsgemäß funktioniert, während andere optional sind und uns helfen, Ihre Benutzererfahrung zu verbessern. Sie können jederzeit die Einstellungen Ihres Browsers ändern, um Cookies zu blockieren oder zu löschen. Bitte beachten Sie jedoch, dass dies die Funktionalität unserer Website beeinträchtigen und einige Funktionen möglicherweise nicht verfügbar sein werden.

Durch die Nutzung unserer Website stimmen Sie der Verwendung von Cookies gemäß den Bestimmungen in unserer Datenschutzrichtlinie zu. Wenn Sie Ihre Einwilligung widerrufen möchten, können Sie dies jederzeit tun, indem Sie Ihre Browser-Einstellungen ändern oder uns kontaktieren.
      
      </Text>
    </Card>
  );
}


export default Datenschutzerklärung