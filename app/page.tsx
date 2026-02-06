"use client";

import { useState } from "react";

export default function Page() {
  const [note, setNote] = useState<string>("");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const email = String(fd.get("email") || "").trim();
    if (!email) return;
    setNote(`Thanks — we’ll notify ${email} when the site goes live.`);
    e.currentTarget.reset();
  }

  return (
    <main className="wrap">
      <section className="card" aria-label="Coming soon landing">
        <header className="header">
          <div className="brand">
            <div className="logo" aria-label="RoomPost Studio logo">
              {/* Put your logo at /public/logo.svg (or change to .png) */}
              <img src="/logo.svg" alt="RoomPost Studio" />
            </div>
            <div className="brandtext">
              <div className="name">RoomPost Studio</div>
              <div className="tag">Boutique post-production led by taste</div>
            </div>
          </div>
          <div className="pill">Coming soon</div>
        </header>

        <h1>Post-production, calm and precise.</h1>
        <p className="lead">
          We’re building a new home for selected work and a streamlined way to collaborate
          on editorial direction, post supervision, and finishing.
        </p>

        <form className="row" onSubmit={onSubmit} autoComplete="off">
          <input
            className="input"
            type="email"
            name="email"
            placeholder="Email for launch notice"
            required
          />
          <button className="btn" type="submit" aria-label="Notify me">
            Notify me <span aria-hidden="true">↗</span>
          </button>
        </form>

        {note ? (
          <div className="note" role="status" aria-live="polite">
            {note}
          </div>
        ) : null}

        <div className="meta">
          <div>
            Inquiries:{" "}
            <a
              href="mailto:hello@roompost.studio"
              style={{
                color: "rgba(255,255,255,.78)",
                borderBottom: "1px solid rgba(255,255,255,.18)",
                paddingBottom: 2
              }}
            >
              hello@roompost.studio
            </a>
          </div>

          <div className="links">
            {/* Replace with your real links */}
            <a href="https://instagram.com/roompoststudio" rel="noopener noreferrer" target="_blank">
              Instagram
            </a>
            <a href="https://linkedin.com" rel="noopener noreferrer" target="_blank">
              LinkedIn
            </a>
          </div>
        </div>

        <div className="footer">
          <div>© {new Date().getFullYear()} RoomPost Studio</div>
          <div>Los Angeles · Remote worldwide</div>
        </div>
      </section>
    </main>
  );
}