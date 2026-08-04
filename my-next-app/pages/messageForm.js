"use client";

import { useState, useEffect } from "react";
import styles from "./message.module.css";

export default function MessagesPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([]);

  async function getMessages() {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/messages`
      );

      const data = await response.json();

      setMessages(data.data || []);

    } catch (error) {
      console.error("Failed to load messages:", error);
    }
  }

  useEffect(() => {
    getMessages();
  }, []);


  async function sendMessage(e) {
    e.preventDefault();

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/messages`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          email,
          message
        })
      }
    );

    const data = await response.json();

    console.log(data);

    if (response.ok) {
      alert("Message sent!");

      setName("");
      setEmail("");
      setMessage("");

      // Refresh messages after saving
      getMessages();
    }
  }


  return (
  <main className={styles.page}>

    {/* Leave message form */}
    <form className={styles.form} onSubmit={sendMessage}>
      <h1 className={styles.title}>
        Leave a Message
      </h1>

      <p className={styles.subtitle}>
        Send us a message and we will get back to you.
      </p>

      <input
        className={styles.input}
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        className={styles.input}
        placeholder="Your email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <textarea
        className={styles.textarea}
        placeholder="Your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />

      <button className={styles.button} type="submit">
        Send Message
      </button>
    </form>


    {/* Saved messages below */}
    <section className={styles.messages}>
      <h2>Previous Messages</h2>

      {messages.length === 0 ? (
        <p className={styles.noMessages}>
          No messages yet.
        </p>
      ) : (
        messages.map((item) => (
          <div
            className={styles.messageCard}
            key={item._id}
          >
            <h3>{item.name}</h3>
            <p>{item.email}</p>
            <p>{item.message}</p>
          </div>
        ))
      )}
    </section>

  </main>
)};