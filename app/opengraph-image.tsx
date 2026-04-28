import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "#080808",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Dot grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        {/* Glow */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(0,245,212,0.08) 0%, transparent 70%)",
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 24,
          }}
        >
          <div
            style={{
              padding: "6px 20px",
              borderRadius: 999,
              border: "1px solid rgba(0,245,212,0.3)",
              color: "#00f5d4",
              fontSize: 14,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            iOS &amp; Web Developer
          </div>

          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              color: "#ffffff",
              textAlign: "center",
              lineHeight: 1.1,
              letterSpacing: "-2px",
            }}
          >
            Jake Forcier
          </div>

          <div
            style={{
              fontSize: 24,
              color: "rgba(255,255,255,0.45)",
              textAlign: "center",
              maxWidth: 600,
              lineHeight: 1.5,
            }}
          >
            I build iOS apps &amp; websites that actually work.
          </div>

          <div
            style={{
              marginTop: 8,
              padding: "14px 40px",
              borderRadius: 999,
              background: "#00f5d4",
              color: "#080808",
              fontSize: 18,
              fontWeight: 700,
            }}
          >
            jakeforcier.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
