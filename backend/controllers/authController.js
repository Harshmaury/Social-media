exports.login = (req, res) => {
  res.status(200).json({ message: "Login successful" });
};

exports.signup = (req, res) => {
  res.status(201).json({ message: "Signup successful" });
};
