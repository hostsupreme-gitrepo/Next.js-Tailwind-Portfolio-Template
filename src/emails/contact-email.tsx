import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

export type ContactEmailProps = {
  firstName: string;
  lastName: string;
  email: string;
  type: string;
  message: string;
};

export function ContactEmail({
  firstName,
  lastName,
  email,
  type,
  message,
}: ContactEmailProps) {
  const fullName = `${firstName} ${lastName}`.trim();

  return (
    <Html lang="en">
      <Head />
      <Preview>New contact form message from {fullName || email}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={heading}>New contact form submission</Heading>
          <Section>
            <Text style={label}>Name</Text>
            <Text style={value}>{fullName || "—"}</Text>
            <Text style={label}>Email</Text>
            <Text style={value}>{email}</Text>
            <Text style={label}>Interest</Text>
            <Text style={value}>{type}</Text>
            <Hr style={hr} />
            <Text style={label}>Message</Text>
            <Text style={messageText}>{message}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

export default ContactEmail;

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Ubuntu, sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "24px",
  maxWidth: "560px",
  borderRadius: "8px",
};

const heading = {
  fontSize: "24px",
  lineHeight: "1.3",
  fontWeight: "700",
  color: "#1a1a1a",
};

const label = {
  fontSize: "12px",
  fontWeight: "600",
  color: "#6b7280",
  textTransform: "uppercase" as const,
  margin: "16px 0 4px",
};

const value = {
  fontSize: "16px",
  lineHeight: "1.5",
  color: "#111827",
  margin: "0 0 8px",
};

const messageText = {
  fontSize: "16px",
  lineHeight: "1.6",
  color: "#111827",
  whiteSpace: "pre-wrap" as const,
  margin: "0",
};

const hr = {
  borderColor: "#e5e7eb",
  margin: "24px 0",
};
