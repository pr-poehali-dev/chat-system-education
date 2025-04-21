import { MessageSquare, Check, Users, Calendar, Shield, Bell } from "lucide-react";

const features = [
  {
    icon: <MessageSquare className="h-6 w-6 text-chat-purple" />,
    title: "Удобный чат",
    description: "Простой интерфейс для эффективного общения между педагогами и родителями"
  },
  {
    icon: <Users className="h-6 w-6 text-chat-purple" />,
    title: "Групповые обсуждения",
    description: "Возможность создавать группы для обсуждения вопросов класса или группы"
  },
  {
    icon: <Calendar className="h-6 w-6 text-chat-purple" />,
    title: "Расписание встреч",
    description: "Планирование и напоминания о родительских собраниях и консультациях"
  },
  {
    icon: <Shield className="h-6 w-6 text-chat-purple" />,
    title: "Безопасность",
    description: "Защищенный обмен сообщениями с шифрованием и контролем доступа"
  },
  {
    icon: <Bell className="h-6 w-6 text-chat-purple" />,
    title: "Уведомления",
    description: "Мгновенные оповещения о новых сообщениях и важных событиях"
  },
  {
    icon: <Check className="h-6 w-6 text-chat-purple" />,
    title: "Удобные отчеты",
    description: "Возможность отслеживать активность и историю общения"
  }
];

const Features = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Наши возможности</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
