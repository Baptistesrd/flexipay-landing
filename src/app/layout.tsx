import "./globals.css";

export const metadata = {
  title: "Flexipay — Payez en 2x, boostez vos conversions",
  description:
    "Flexipay ajoute le paiement en 2 fois à votre checkout en quelques minutes. Widget intégrable, prélèvement automatique, reporting marchand.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
