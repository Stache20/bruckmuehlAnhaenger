import { createStyles, ThemeIcon, Text, SimpleGrid, Box, Stack } from '@mantine/core';
import { IconHome2, IconAppWindow, IconSun, IconPhone, IconMapPin, IconAt } from '@tabler/icons-react';


type ContactIconVariant = 'white' | 'gradient';

interface ContactIconStyles {
  variant: ContactIconVariant;
}

const useStyles = createStyles((theme, { variant }: ContactIconStyles) => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    color: theme.white,
  },

  icon: {
    marginRight: theme.spacing.md,
    backgroundImage:
      variant === 'gradient'
        ? `linear-gradient(135deg, ${theme.colors[theme.primaryColor][4]} 0%, ${
            theme.colors[theme.primaryColor][6]
          } 100%)`
        : 'none',
    backgroundColor: 'transparent',
  },

  title: {
    color: variant === 'gradient' ? theme.colors.gray[6] : theme.colors[theme.primaryColor][0],
  },

  description: {
    color: variant === 'gradient' ? theme.black : theme.white,
  },
}));

interface ContactIconProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  icon: React.FC<any>;
  title: React.ReactNode;
  description: React.ReactNode;
  variant?: ContactIconVariant;
  link:string;
}

function ContactIcon({
  icon: Icon,
  title,
  description,
  link,
  variant = 'gradient',
  className,
  ...others
}: ContactIconProps) {
  const { classes, cx } = useStyles({ variant });
  return (
    <div className={cx(classes.wrapper, className)} {...others}>
      {variant === 'gradient' ? (
        <ThemeIcon size={40} radius="md" className={classes.icon}>
          <Icon size="1.5rem" />
        </ThemeIcon>
      ) : (
        <Box mr="md">
          <Icon size="1.5rem" />
        </Box>
      )}

      <div>
        <Text size="xs" className={classes.title}>
          {title}
        </Text>
        <Text component='a' href={link} target='_blank' className={classes.description}>{description}</Text>
      </div>
    </div>
  );
}

interface ContactIconsListProps {
  data?: ContactIconProps[];
  variant?: ContactIconVariant;
}

const MOCKDATA = [
    { title: 'Esso Tankstelle Bruckmühl', description: 'Albert Stahuber e.K.', link:'./impressum', icon: IconHome2 },
    { title: 'Email', description: 'partner-7482@de.eg.group',link:'mailto:partner-7482@de.eg.group', icon: IconAt },
  { title: 'Telefon', description: '+49 (8062) 7187', link:'tel:+49 (8062) 7187',icon: IconPhone },
  { title: 'Addresse', description: 'Albert-Mayer-Straße 22, 83052 Bruckmühl',link:'./impressum', icon: IconMapPin },
  { title: 'Öffnungszeiten', description: '24 Stunden',link:'/', icon: IconSun },
  { title: 'Webseite', description: 'Hosting und Code dieser Seite <> von Webpretzel.ca bereitgestellt',link:'https://webpretzel.ca/', icon: IconAppWindow }

];

export function ContactIconsList({ data = MOCKDATA, variant }: ContactIconsListProps) {
  const items = data.map((item, index) => <ContactIcon key={index} variant={variant} {...item} />);
  return <Stack>{items}</Stack>;
}

export function ContactIcons() {
  return (
    <SimpleGrid  cols={1} breakpoints={[{ maxWidth: 755, cols: 1 }]}>
   

      <Box 
        sx={(theme) => ({
          padding: theme.spacing.xl,
          borderRadius: theme.radius.md,
          backgroundImage: `linear-gradient(135deg, ${theme.colors.green[9]} 0%, ${
            theme.colors.green[2]
          } 100%)`,
        })}
      >
        <ContactIconsList variant="white" />
      </Box>
      
    </SimpleGrid>
  );
}


export default ContactIcons
