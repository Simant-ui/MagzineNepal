import "./globals.css";

export const metadata = {
  title: "Magzine Memories | Personalized Magazine Gifts in Nepal",
  description: "Turn your memories into a beautiful, professionally designed magazine.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
