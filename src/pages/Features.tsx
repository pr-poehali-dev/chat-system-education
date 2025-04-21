import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Calendar, Bell, Users, Shield, BarChart } from "lucide-react";

const Features = () => {
  const featuresList = [
    {
      icon: <MessageSquare className="h-10 w-10 text-chat-purple" />,
      title: "Быстрые сообщения",
      description: "Мгновенный обмен сообщениями между педагогами и родителями в защищенной среде"
    },
    {
      icon: <Calendar className="h-10 w-10 text-chat-purple" />,
      title: "Планирование встреч",
      description: "Удобное планирование родительских собраний и индивидуальных консультаций"
    },
    {
      icon: <Bell className="h-10 w-10 text-chat-purple" />,
      title: "Уведомления",
      description: "Своевременные уведомления о важных событиях, домашних заданиях и мероприятиях"
    },
    {
      icon: <Users className="h-10 w-10 text-chat-purple" />,
      title: "Групповые чаты",
      description: "Возможность создания групповых чатов для обсуждения классных вопросов"
    },
    {
      icon: <Shield className="h-10 w-10 text-chat-purple" />,
      title: "Безопасность данных",
      description: "Шифрование сообщений и соответствие требованиям защиты персональных данных"
    },
    {
      icon: <BarChart className="h-10 w-10 text-chat-purple" />,
      title: "Аналитика коммуникаций",
      description: "Статистика взаимодействия для улучшения качества коммуникации"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="py-12 md:py-20 bg-gray-50">
          <div className="container">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Возможности ПедагогЧат</h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Наша платформа предлагает широкий спектр функций для улучшения коммуникации 
                между педагогами и родителями
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuresList.map((feature, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="flex flex-col items-center text-center">
                    {feature.icon}
                    <CardTitle className="mt-4">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center text-gray-600">
                    {feature.description}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 container">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Как это работает?</h2>
              <p className="text-gray-600 mb-6">
                ПедагогЧат разработан с учетом потребностей как педагогов, так и родителей, 
                обеспечивая интуитивно понятный интерфейс и надежную защиту данных.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-chat-purple font-bold">1.</span>
                  <span>Регистрация в системе — простая и быстрая процедура</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-chat-purple font-bold">2.</span>
                  <span>Создание или присоединение к существующему классу/группе</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-chat-purple font-bold">3.</span>
                  <span>Настройка предпочтений и уведомлений</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-chat-purple font-bold">4.</span>
                  <span>Мгновенное начало общения в защищенной среде</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 h-80 flex items-center justify-center">
              <p className="text-gray-400 italic text-center">Иллюстрация интерфейса</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Features;
