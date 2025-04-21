import { MessageSquareText } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t py-8">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <MessageSquareText className="h-5 w-5 text-chat-purple" />
              <span className="text-lg font-semibold">ПедагогЧат</span>
            </div>
            <p className="text-sm text-gray-500">
              Платформа для эффективного общения между педагогами и родителями.
            </p>
          </div>
          <div className="space-y-3">
            <h4 className="font-medium">Компания</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a className="text-gray-500 hover:text-chat-purple transition-colors" href="#">
                  О нас
                </a>
              </li>
              <li>
                <a className="text-gray-500 hover:text-chat-purple transition-colors" href="#">
                  Команда
                </a>
              </li>
              <li>
                <a className="text-gray-500 hover:text-chat-purple transition-colors" href="#">
                  Карьера
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="font-medium">Ресурсы</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a className="text-gray-500 hover:text-chat-purple transition-colors" href="#">
                  Документация
                </a>
              </li>
              <li>
                <a className="text-gray-500 hover:text-chat-purple transition-colors" href="#">
                  Помощь
                </a>
              </li>
              <li>
                <a className="text-gray-500 hover:text-chat-purple transition-colors" href="#">
                  Обучение
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="font-medium">Контакты</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-500">info@pedagogchat.ru</li>
              <li className="text-gray-500">+7 (800) 123-45-67</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            © 2023 ПедагогЧат. Все права защищены.
          </p>
          <div className="flex gap-4">
            <a className="text-gray-500 hover:text-chat-purple transition-colors" href="#">
              Конфиденциальность
            </a>
            <a className="text-gray-500 hover:text-chat-purple transition-colors" href="#">
              Условия
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
