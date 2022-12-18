// Controller Signup
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");

const { UserModel } = require("../Models/user.model");

const signup = async (req, res) => {
  const { name, email, password } = req.body;
  const email_present = await UserModel.findOne({ email });
  if (email_present?.email) {
    res.send("Email Already Exist");
  } else {
    try {
      bcrypt.hash(password, 10, async (err, hash) => {
        const user = new UserModel({ name, email, password: hash });
        await user.save();
        res.send("Signup Successfully");
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: "stylenova1234@gmail.com",
            pass: "gkjvhyauwyutqszs",
          },
        });

        const mailoption = {
          from: "stylenova1234@gmail.com",
          to: `${email}`,
          subject: "Sign Up Successfull",
          text: `Hello ${name} From Style Nova I hope you are buy somthing for me`,
        };

        transporter.sendMail(mailoption, (err, info) => {
          if (err) {
            console.log(err);
          } else {
            console.log("Email Sent");
          }
        });
      });
    } catch (error) {
      console.log("Somthing Error in SingUp");
      console.log(error);
    }
  }
};

module.exports = signup;
