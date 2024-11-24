"use client";

import Link from "next/link";

// Page permet notefound si mauvaise localisation
export default function NotFound() {
  return (
    <html lang="en">
      <body>
        <div>Erreur de localisation</div>
        <Link href="/">
          <div>Retourner à l'accueil</div>
        </Link>
      </body>
    </html>
  );
}
