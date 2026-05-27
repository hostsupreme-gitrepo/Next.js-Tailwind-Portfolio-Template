"use client";

import {
  Typography,
  Card,
  CardBody,
  Radio,
  Input,
  Textarea,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { EnvelopeIcon, PhoneIcon, TicketIcon } from "@heroicons/react/24/solid";
import { FormEvent, useState } from "react";

const INTEREST_OPTIONS = ["Commission", "Design", "Art Showing", "Other"] as const;

export function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState<string>(INTEREST_OPTIONS[0]);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, email, type, message }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error ?? "Something went wrong.");
      }

      setStatus("success");
      setFeedback("Your message was sent. We'll get back to you soon.");
      setFirstName("");
      setLastName("");
      setEmail("");
      setType(INTEREST_OPTIONS[0]);
      setMessage("");
    } catch (error) {
      setStatus("error");
      setFeedback(
        error instanceof Error ? error.message : "Failed to send message.",
      );
    }
  }

  return (
    <section id="contact" className="px-8 py-16">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h1" color="blue-gray" className="pt-20 mb-4">
          Contact Me
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full lg:w-5/12 !text-gray-500"
        >
          Ready to get started? Feel free to reach out through the contact form,
          and let&apos;s embark on a journey of innovation and success.
        </Typography>
      </div>
      <div>
        <Card shadow={true} className="container mx-auto border border-gray/50">
          <CardBody className="grid grid-cols-1 lg:grid-cols-7 md:gap-10">
            <div className="w-full col-span-3 rounded-lg h-full py-8 p-5 md:p-16 bg-gray-900">
              <Typography variant="h4" color="white" className="mb-2">
                Contact for Commission or Purchase
              </Typography>
              <Typography
                variant="lead"
                className="mx-auto mb-8 text-base !text-gray-500"
              >
                Fill out the form and our Team will get back to you within 24
                hours.
              </Typography>
              <div className="flex gap-5">
                <PhoneIcon className="h-6 w-6 text-white" />
                <Typography variant="h6" color="white" className="mb-2">
                  +1(352) 682 8771
                </Typography>
              </div>
              <div className="flex my-2 gap-5">
                <EnvelopeIcon className="h-6 w-6 text-white" />
                <Typography variant="h6" color="white" className="mb-2">
                  esm@elisaddiq.art
                </Typography>
              </div>
              <div className="flex hidden mb-10 gap-5">
                <TicketIcon className="h-6 w-6 text-white" />
                <Typography variant="h6" color="white" className="mb-2">
                  Open Support Ticket
                </Typography>
              </div>
              <div className="flex items-center gap-5">
                <IconButton variant="text" color="white">
                  <i className="fa-brands fa-facebook text-lg" />
                </IconButton>
                <IconButton variant="text" color="white">
                  <i className="fa-brands fa-instagram text-lg" />
                </IconButton>
                <IconButton variant="text" color="white">
                  <i className="fa-brands fa-github text-lg" />
                </IconButton>
              </div>
            </div>
            <div className="w-full mt-8 md:mt-0 md:px-10 col-span-4 h-full p-5">
              <form onSubmit={handleSubmit}>
                <div className="mb-8 grid gap-4 lg:grid-cols-2">
                  {/* @ts-ignore */}
                  <Input
                    color="gray"
                    size="lg"
                    variant="static"
                    label="First Name"
                    name="first-name"
                    placeholder="eg. John"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    containerProps={{
                      className: "!min-w-full mb-3 md:mb-0",
                    }}
                  />
                  {/* @ts-ignore */}
                  <Input
                    color="gray"
                    size="lg"
                    variant="static"
                    label="Last Name"
                    name="last-name"
                    placeholder="eg. Jones"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                    containerProps={{
                      className: "!min-w-full",
                    }}
                  />
                </div>
                {/* @ts-ignore */}
                <Input
                  color="gray"
                  size="lg"
                  variant="static"
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="eg. John.Jones@mail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  containerProps={{
                    className: "!min-w-full mb-8",
                  }}
                />
                <Typography
                  variant="lead"
                  className="!text-blue-gray-500 text-sm mb-2"
                >
                  What are you interested in?
                </Typography>
                <div className="-ml-3 mb-14 ">
                  {INTEREST_OPTIONS.map((option) => (
                    /* @ts-ignore */
                    <Radio
                      key={option}
                      color="gray"
                      name="type"
                      label={option}
                      checked={type === option}
                      onChange={() => setType(option)}
                    />
                  ))}
                </div>
                {/* @ts-ignore */}
                <Textarea
                  color="gray"
                  size="lg"
                  variant="static"
                  label="Your Message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  containerProps={{
                    className: "!min-w-full mb-8",
                  }}
                />
                {feedback ? (
                  <Typography
                    variant="small"
                    className={`mb-4 ${
                      status === "success" ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {feedback}
                  </Typography>
                ) : null}
                <div className="w-full flex justify-end">
                  <Button
                    type="submit"
                    className="w-full md:w-fit"
                    color="gray"
                    size="md"
                    disabled={status === "loading"}
                  >
                    {status === "loading" ? "Sending…" : "Send message"}
                  </Button>
                </div>
              </form>
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default ContactForm;
