import { Button, Paper, Text, Group,  } from '@mantine/core';

export function Cookies() {
  return (
    <Paper withBorder p="lg" radius="md" shadow="md">
      <Group position="apart" mb="xs">
        <Text fz="md" fw={500}>
          Allow cookies
        </Text>
      </Group>
      <Text c="dimmed" fz="xs">
        So the deal is, we want to spy on you. We would like to know what did you have for todays
        breakfast, where do you live, how much do you earn and like 50 other things. To view our
        landing page you will have to accept all cookies. That&apos;s all, and remember that we are
        watching...
      </Text>
      <Group position="center" mt="md">
        <Button variant="outline" color='teal.7'size="xs">
          Cookies Akzeptieren
        </Button>
      </Group>
    </Paper>
  );
}

export default Cookies