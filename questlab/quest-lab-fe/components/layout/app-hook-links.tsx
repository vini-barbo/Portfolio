import { useState, useEffect } from "react";
import {
  Home,
  FileText,
  BookOpen,
  User,
  Settings,
  Paperclip,
} from "lucide-react";

export function useNavItems() {
  const [userRole, setUserRole] = useState("aluno");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUserRole = localStorage.getItem("userRole");
      if (storedUserRole) {
        setUserRole(storedUserRole);
      }
    }
  }, []);

  const commonNavItems = [
    { name: "Exams", href: "/prova", icon: <Paperclip /> },
  ];

  const navItems = [
    ...(userRole === "professor"
      ? [
        ...commonNavItems,
        { name: "Dashboard", href: "/dashboard", icon: <Home /> },
        { name: "Questions", href: "/questoes", icon: <FileText /> },
      ]
      : []),
    ...(userRole === "aluno"
      ? [...commonNavItems, { name: "Profile", href: "/perfil", icon: <User /> }]
      : []),
  ];

  return { navItems };
}
