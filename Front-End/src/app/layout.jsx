import "./globals.css";
import Navbar from "../Components/Header/Navbar";
import ThemeProvider from "../Context/ThemeContext/ThemeProvider";
import Tostify from "../Components/Tostify";
import { AuthProvider } from "../Context/AuthContext";
export const metadata = {
  title: "Next.js Course",
  description: "Next Course",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <AuthProvider>
            <Navbar />
            {children}
            <Tostify />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
