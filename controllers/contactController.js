export const contactFormHandler = (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  // Here you can add logic to save the contact form data to a database
  // or send an email notification

  return res
    .status(200)
    .json({ message: "Contact form submitted successfully" });
};
