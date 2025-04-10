import { Box, Button, TextField, Typography, Alert } from "@mui/material";
import { useState } from "react";
export const ContactForm = () => {
  const [status, setStatus] = useState(" ");
  const [isSuccess, setIsSuccess] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };
    const response = await fetch("https://formspree.io/f/mzzeyazj", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      setIsSuccess(true), setStatus("Message sent successfully"), form.reset();
    } else {
      setIsSuccess(false), setStatus("OOPS! Something went Wrong");
    }
  };
  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 500,
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        padding: 3,
        boxShadow: 3,
        borderRadius: 2,
        backgroundColor: "black",
      }}
    >
      <Typography variant="h5" textAlign="center" fontWeight={600}>
        Contact Me
      </Typography>
      <TextField name="name" label="Name" variant="outlined" required />
      <TextField
        name="email"
        label="Email"
        variant="outlined"
        type="email"
        required
      />
      <TextField
        name="message"
        label="Message"
        variant="outlined"
        multiline
        rows={4}
        required
      />

      <Button type="submit" variant="contained" color="primary">
        Send Message
      </Button>
      {status && (
        <Alert severity={isSuccess ? "success" : "error"}>{status}</Alert>
      )}
    </Box>
  );
};
