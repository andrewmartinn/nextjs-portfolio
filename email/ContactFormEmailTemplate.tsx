import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/components";
import { ContactFormEmailTemplateProps } from "@/lib/types";

export default function ContactFormEmailTemplate({
  message,
  senderEmail,
}: ContactFormEmailTemplateProps) {
  return (
    <Html>
      <Head />
      <Preview>Message from Portfolio</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="borderBlack my-10 rounded-md bg-white px-10 py-4">
              <Heading className="leading-tight">
                New message from your portfolio site
              </Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>Contact Email: {senderEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
