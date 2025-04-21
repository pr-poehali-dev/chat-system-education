import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MessageSquareText } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b bg-white shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <MessageSquareText className="h-6 w-6 text-chat-purple" />
          <span className="text-xl font-semibold">ПедагогЧат</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link to="/" className="font-medium transition-colors hover:text-chat-purple">
            Главная
          </Link>
          <Link to="/features" className="font-medium transition-colors hover:text-chat-purple">
            Возможности
          </Link>
          <Link to="/about" className="font-medium transition-colors hover:text-chat-purple">
            О нас
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="hidden md:flex">
            Войти
          </Button>
          <Button className="bg-chat-purple hover:bg-chat-dark">
            Регистрация
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
