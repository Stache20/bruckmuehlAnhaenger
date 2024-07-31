import Geschäftsbedingungen from "./Geschäftsbedingungen"
import { Text, Card} from "@mantine/core"

function Impressum() {

    return (<div>
         <Card
      shadow="sm"
      padding="xl"
    >
        <div>
            <Text mt="xs" color="dimmed"> <h1>Impressum</h1></Text>
        <Text mt="xs" color="dimmed" size="sm">
        <div>
      <p>Esso Tankstelle Bruckmühl</p>
      <p>Geschäftsführer Albert Stahuber</p>
      <p>Address: Gewerbegebiet Obere Eichpold, Albert-Mayer-Straße 22, 83052 Bruckmühl</p>
      <p>Email: de7482@partnernet.eurogarages.de</p>
      <p>Telefon: +49 8062 7187</p>
      <p>Fax: +49 8062 7189</p>
      <p>UST-ID: DE245901134 </p>
    </div>
            </Text>
        </div>
        </Card>

        <Geschäftsbedingungen/>
</div>)
}

export default Impressum
