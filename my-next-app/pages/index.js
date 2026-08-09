
import Link from "next/link";
import { useSetAtom } from "jotai";
import { backendReadyAtom } from "./atoms/backendAtom";
import { useEffect } from "react";

export default function Home() {

  const setBackendReady = useSetAtom(backendReadyAtom);

  async function healthCheck() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/healthCheck`, {
            method: 'GET',
        });
        if (!res.ok) {
            const errorData = await res.json();
            throw new Error(errorData.message || "Failed health check");
        }
        const data = await res.json();
        setBackendReady(true);
        return data;
    } catch (error) {
        console.error("Error fetching appointments:", error);
        throw error; 
    }
}

  healthCheck();

  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f4f7fb",
        minHeight: "100vh",
        padding: "40px",
        color: "#333",
      }}
    >
      <section
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          background: "#fff",
          borderRadius: "10px",
          padding: "40px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <header
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "baseline",
            gap: "12px",
            marginBottom: "20px",
          }}
        >
            <h1
              style={{
              color: "#2563eb",
              margin: 0,
            }}
          >
            Keith Ru
            </h1>

          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: "400",
              color: "#555",
              margin: 0,
            }}
          >
            - Full Stack Developer
          </h2>
        </header>
        <br /><hr />

        <section>
          <Link href="/about" style={{ textDecoration: "none" }}>
            <h2 style={{ marginBottom: "15px", marginTop: "15px"}}>About Me</h2>
          </Link>
        </section>
        <hr />

        <section>
          <Link href="/tskills" style={{ textDecoration: "none" }}>
            <h2 style={{ marginBottom: "15px", marginTop: "15px" }}>Technical Skills</h2>
          </Link>
        </section>

        <hr />

        <section>
          <Link href="/projects" style={{ textDecoration: "none" }}>
            <h2 style={{ marginBottom: "15px", marginTop: "15px" }}>Projects</h2>
          </Link>
        </section>
        <hr />

        <section>
          <Link href="/interests" style={{ textDecoration: "none" }}>
            <h2 style={{ marginBottom: "15px", marginTop: "15px" }}>Interests</h2>
          </Link>
        </section>
        <hr />

        <section>
          <Link href="/hireme" style={{ textDecoration: "none" }}>
            <h2 style={{ marginBottom: "15px", marginTop: "15px" }}>Why Hire Me?</h2>
          </Link>
        </section>

        <hr />

        <section>
          <Link href="/messageForm" style={{ textDecoration: "none" }}>
            <h2 style={{ marginBottom: "15px", marginTop: "15px" }}>Leave a Message</h2>
          </Link>
        </section>
        <hr />

        <section>
          <Link href="/contact" style={{ textDecoration: "none" }}>
            <h2 style={{ marginBottom: "15px", marginTop: "15px" }}>Contact</h2>
          </Link>
        </section>
        <hr />
      </section>
    </main>
  );
}