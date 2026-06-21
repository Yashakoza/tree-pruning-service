import { ImageResponse } from "next/og"
import { readFile } from "node:fs/promises"
import { join } from "node:path"

export const alt = "עץ תמיר - גיזום עצים מקצועי ובטוח"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

// Load a Hebrew-capable font from Google Fonts for the given text.
async function loadHebrewFont(text: string, weight: number) {
  const url = `https://fonts.googleapis.com/css2?family=Heebo:wght@${weight}&text=${encodeURIComponent(
    text,
  )}`
  const css = await (await fetch(url)).text()
  const fontUrl = css.match(/src: url\((.+?)\) format\(/)?.[1]
  if (!fontUrl) throw new Error("Failed to resolve Heebo font URL")
  return (await fetch(fontUrl)).arrayBuffer()
}

export default async function OpengraphImage() {
  const title = "עץ תמיר"
  const tagline = "גיזום עצים מקצועי, בטוח ונקי"
  const sub = "בתים פרטיים · בניינים · עסקים — לקבלת הצעת מחיר מהירה"
  const allText = `${title}${tagline}${sub}`

  const [heroData, fontBold, fontRegular] = await Promise.all([
    readFile(join(process.cwd(), "public/images/hero-arborist.png")),
    loadHebrewFont(allText, 800),
    loadHebrewFont(allText, 500),
  ])

  const heroSrc = `data:image/png;base64,${Buffer.from(heroData).toString("base64")}`

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          position: "relative",
          fontFamily: "Heebo",
          backgroundColor: "#1f3d2b",
        }}
      >
        <img
          src={heroSrc || "/placeholder.svg"}
          alt=""
          width={1200}
          height={630}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            background:
              "linear-gradient(90deg, rgba(20,40,28,0.92) 0%, rgba(20,40,28,0.75) 45%, rgba(20,40,28,0.15) 100%)",
          }}
        />
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-end",
            textAlign: "right",
            padding: "72px 80px",
            width: "100%",
            color: "#f4f7f2",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              fontSize: 40,
              fontWeight: 800,
              color: "#cfe3c9",
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: 76,
              fontWeight: 800,
              lineHeight: 1.1,
              marginTop: 18,
              letterSpacing: "-1px",
            }}
          >
            {tagline}
          </div>
          <div
            style={{
              fontSize: 34,
              fontWeight: 500,
              marginTop: 26,
              color: "#dbe6d6",
              maxWidth: 820,
            }}
          >
            {sub}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Heebo", data: fontBold, weight: 800, style: "normal" },
        { name: "Heebo", data: fontRegular, weight: 500, style: "normal" },
      ],
    },
  )
}
