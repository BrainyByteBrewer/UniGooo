import React, { useState } from "react";
import { motion } from "framer-motion";

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setMessage("New password and confirm password do not match.");
      return;
    }

    // Here you would typically make an API call to update the password.
    console.log("Current Password:", currentPassword);
    console.log("New Password:", newPassword);

    setMessage("Password changed successfully!");
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  const InputGroup = ({ label, type, value, onChange }) => (
    <div className="mb-4">
      <label htmlFor={label} className="block font-medium text-gray-700">
        {label}
      </label>
      <input
        type={type}
        id={label}
        value={value}
        onChange={onChange}
        className="mt-1 border-none block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-200 sm:text-sm px-3 py-2 bg-white"
        required
      />
    </div>
  );

  return (
    // This is the crucial return statement!
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="container mx-auto  mt-12 p-6 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg shadow-md"
    >
      <h1 className="text-4xl font-bold mb-6 text-purple-700 text-center">
        Change Password
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <InputGroup
          label="Current Password"
          type="password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
        />
        <InputGroup
          label="New Password"
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <InputGroup
          label="Confirm New Password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        {message && (
          <p
            className={
              message.startsWith("Password changed")
                ? "text-green-500"
                : "text-red-500"
            }
          >
            {message}
          </p>
        )}

        <motion.button
          type="submit"
          whileHover={{ scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="w-full bg-purple-500 hover:bg-purple-700 text-white font-bold py-3 rounded-lg shadow-md"
        >
          Change Password
        </motion.button>
      </form>
    </motion.div>
  );
};

export default ChangePassword;
