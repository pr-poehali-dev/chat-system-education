import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuietHoursIndicator, { isQuietHours } from "@/components/QuietHoursIndicator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { TabsContent, Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Send, Paperclip, Search, MoreVertical, Phone, Video, User, Bell, BellOff } from "lucide-react";
import { toast } from "sonner";

interface Contact {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  time: string;
  unread: number;
  status: "online" | "offline";
  role: "teacher" | "parent";
}

interface Message {
  id: string;
  sender: string;
  content: string;
  time: string;
  isOwn: boolean;
}

const Chats = () => {
  const [contacts] = useState<Contact[]>([
    {
      id: "1",
      name: "Ольга Петрова",
      avatar: "/placeholder.svg",
      lastMessage: "Добрый день! Хотела уточнить домашнее задание...",
      time: "10:42",
      unread: 2,
      status: "online",
      role: "parent"
    },
    {
      id: "2",
      name: "Елена Иванова",
      avatar: "/placeholder.svg",
      lastMessage: "Скажите, пожалуйста, когда следующее родительское собрание?",
      time: "Вчера",
      unread: 0,
      status: "offline",
      role: "parent"
    },
    {
      id: "3",
      name: "Анна Сидорова - 5А",
      avatar: "/placeholder.svg",
      lastMessage: "Планируем экскурсию на следующей неделе",
      time: "Вчера",
      unread: 0,
      status: "offline",
      role: "teacher"
    },
    {
      id: "4",
      name: "Мария Кузнецова",
      avatar: "/placeholder.svg",
      lastMessage: "Отправила вам результаты тестирования.",
      time: "12.03",
      unread: 0,
      status: "offline",
      role: "parent"
    },
    {
      id: "5",
      name: "Сергей Николаев - 7Б",
      avatar: "/placeholder.svg",
      lastMessage: "Коллеги, не забудьте про педсовет в четверг",
      time: "10.03",
      unread: 0,
      status: "online",
      role: "teacher"
    }
  ]);

  const [selectedContact, setSelectedContact] = useState<Contact | null>(contacts[0]);

  const [messages] = useState<Message[]>([
    {
      id: "m1",
      sender: "Ольга Петрова",
      content: "Добрый день! Хотела уточнить домашнее задание на завтра по математике. В дневнике не все записано.",
      time: "10:30",
      isOwn: false
    },
    {
      id: "m2",
      sender: "Вы",
      content: "Здравствуйте! Домашнее задание: стр. 45, упражнения 1-3. Также нужно подготовить проект по геометрии к следующей неделе.",
      time: "10:35",
      isOwn: true
    },
    {
      id: "m3",
      sender: "Ольга Петрова",
      content: "Спасибо большое за информацию! А можно подробнее про проект по геометрии?",
      time: "10:40",
      isOwn: false
    },
    {
      id: "m4",
      sender: "Ольга Петрова",
      content: "И еще вопрос по поводу экскурсии на следующей неделе. Нужно ли что-то подготовить?",
      time: "10:42",
      isOwn: false
    }
  ]);

  const [newMessage, setNewMessage] = useState("");
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [quietHours, setQuietHours] = useState(isQuietHours());

  useEffect(() => {
    // Обновляем статус тихого часа каждую минуту
    const interval = setInterval(() => {
      setQuietHours(isQuietHours());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Логика отправки сообщения

      // Очищаем поле ввода
      setNewMessage("");

      // Уведомляем об отправке
      toast.success("Сообщение отправлено");
    }
  };

  const handleReceiveMessage = (message: any) => {
    // В реальном приложении здесь была бы логика получения сообщения
    // и добавления его в состояние

    // Уведомление будет показано только если уведомления включены
    // и сейчас не "тихий час"
    if (notificationsEnabled && !quietHours) {
      toast.info(`Новое сообщение от ${message.sender}`);
      // В реальном приложении здесь был бы звуковой сигнал
    } else {
      // В тихий час или при выключенных уведомлениях
      // просто добавляем сообщение без звука
      console.log("Сообщение получено без звукового уведомления");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 container py-6">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden border flex h-[calc(100vh-12rem)]">
          {/* Sidebar - Contacts */}
          <div className="w-full max-w-xs border-r flex flex-col">
            <div className="p-4 border-b">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Поиск контактов..." 
                  className="pl-8"
                />
              </div>
            </div>
            
            <Tabs defaultValue="all" className="px-4 pt-4">
              <TabsList className="grid grid-cols-3 mb-2">
                <TabsTrigger value="all">Все</TabsTrigger>
                <TabsTrigger value="teachers">Учителя</TabsTrigger>
                <TabsTrigger value="parents">Родители</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="mt-0">
                <ScrollArea className="h-[calc(100vh-16rem)]">
                  <div className="space-y-1 pr-2">
                    {contacts.map(contact => (
                      <Card 
                        key={contact.id}
                        className={`cursor-pointer hover:bg-gray-50 ${selectedContact?.id === contact.id ? 'bg-gray-100' : ''}`}
                        onClick={() => setSelectedContact(contact)}
                      >
                        <CardContent className="p-3 flex items-start gap-3">
                          <div className="relative">
                            <Avatar className="h-10 w-10">
                              <img src={contact.avatar} alt={contact.name} />
                            </Avatar>
                            {contact.status === "online" && (
                              <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-white"></span>
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-start">
                              <h3 className="font-medium text-sm truncate">{contact.name}</h3>
                              <p className="text-xs text-muted-foreground">{contact.time}</p>
                            </div>
                            <p className="text-xs text-muted-foreground truncate">{contact.lastMessage}</p>
                          </div>
                          {contact.unread > 0 && (
                            <Badge variant="secondary" className="bg-chat-purple text-white rounded-full text-xs h-5 min-w-5 flex items-center justify-center ml-auto">
                              {contact.unread}
                            </Badge>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </ScrollArea>
              </TabsContent>
              
              <TabsContent value="teachers" className="mt-0">
                <ScrollArea className="h-[calc(100vh-16rem)]">
                  <div className="space-y-1 pr-2">
                    {contacts.filter(c => c.role === "teacher").map(contact => (
                      <Card 
                        key={contact.id}
                        className={`cursor-pointer hover:bg-gray-50 ${selectedContact?.id === contact.id ? 'bg-gray-100' : ''}`}
                        onClick={() => setSelectedContact(contact)}
                      >
                        {/* Same card content as above */}
                        <CardContent className="p-3 flex items-start gap-3">
                          <div className="relative">
                            <Avatar className="h-10 w-10">
                              <img src={contact.avatar} alt={contact.name} />
                            </Avatar>
                            {contact.status === "online" && (
                              <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-white"></span>
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-start">
                              <h3 className="font-medium text-sm truncate">{contact.name}</h3>
                              <p className="text-xs text-muted-foreground">{contact.time}</p>
                            </div>
                            <p className="text-xs text-muted-foreground truncate">{contact.lastMessage}</p>
                          </div>
                          {contact.unread > 0 && (
                            <Badge variant="secondary" className="bg-chat-purple text-white rounded-full text-xs h-5 min-w-5 flex items-center justify-center ml-auto">
                              {contact.unread}
                            </Badge>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </ScrollArea>
              </TabsContent>
              
              <TabsContent value="parents" className="mt-0">
                <ScrollArea className="h-[calc(100vh-16rem)]">
                  <div className="space-y-1 pr-2">
                    {contacts.filter(c => c.role === "parent").map(contact => (
                      <Card 
                        key={contact.id}
                        className={`cursor-pointer hover:bg-gray-50 ${selectedContact?.id === contact.id ? 'bg-gray-100' : ''}`}
                        onClick={() => setSelectedContact(contact)}
                      >
                        {/* Same card content as above */}
                        <CardContent className="p-3 flex items-start gap-3">
                          <div className="relative">
                            <Avatar className="h-10 w-10">
                              <img src={contact.avatar} alt={contact.name} />
                            </Avatar>
                            {contact.status === "online" && (
                              <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-white"></span>
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-start">
                              <h3 className="font-medium text-sm truncate">{contact.name}</h3>
                              <p className="text-xs text-muted-foreground">{contact.time}</p>
                            </div>
                            <p className="text-xs text-muted-foreground truncate">{contact.lastMessage}</p>
                          </div>
                          {contact.unread > 0 && (
                            <Badge variant="secondary" className="bg-chat-purple text-white rounded-full text-xs h-5 min-w-5 flex items-center justify-center ml-auto">
                              {contact.unread}
                            </Badge>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </ScrollArea>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Chat Area */}
          {selectedContact ? (
            <div className="flex-1 flex flex-col">
              {/* Chat Header */}
              <div className="p-4 border-b flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Avatar className="h-10 w-10">
                      <img src={selectedContact.avatar} alt={selectedContact.name} />
                    </Avatar>
                    {selectedContact.status === "online" && (
                      <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-white"></span>
                    )}
                  </div>
                  <div className="flex items-center">
                    <h2 className="font-medium">{selectedContact.name}</h2>
                    <QuietHoursIndicator />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {selectedContact.status === "online" ? "В сети" : "Не в сети"}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <Button variant="ghost" size="icon" className="text-muted-foreground">
                    <Phone className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-muted-foreground">
                    <Video className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-muted-foreground">
                    <User className="h-5 w-5" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="text-muted-foreground"
                    onClick={() => setNotificationsEnabled(!notificationsEnabled)}
                  >
                    {notificationsEnabled ? (
                      <Bell className="h-5 w-5" />
                    ) : (
                      <BellOff className="h-5 w-5" />
                    )}
                  </Button>
                  <Button variant="ghost" size="icon" className="text-muted-foreground">
                    <MoreVertical className="h-5 w-5" />
                  </Button>
                </div>
              </div>
              
              {/* Messages Area */}
              <ScrollArea className="flex-1 p-4">
                <div className="space-y-4">
                  {messages.map(message => (
                    <div 
                      key={message.id} 
                      className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}
                    >
                      <div 
                        className={`max-w-[70%] rounded-lg p-3 ${
                          message.isOwn 
                            ? 'bg-chat-purple text-white' 
                            : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        <p className="text-sm">{message.content}</p>
                        <p className={`text-xs mt-1 text-right ${
                          message.isOwn ? 'text-gray-200' : 'text-gray-500'
                        }`}>
                          {message.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
              
              {/* Message Input */}
              <div className="p-4 border-t">
                {quietHours && (
                  <div className="mb-2 px-3 py-1.5 bg-amber-50 text-amber-800 rounded-md text-sm flex items-center">
                    <AlertCircle className="h-4 w-4 mr-2" />
                    <span>Сейчас действует "тихий час" (20:00-7:00). Получатель не получит звуковых уведомлений о сообщении.</span>
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" className="text-muted-foreground">
                    <Paperclip className="h-5 w-5" />
                  </Button>
                  <Input 
                    placeholder="Введите сообщение..." 
                    className="flex-1"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && newMessage.trim()) {
                        handleSendMessage();
                      }
                    }}
                  />
                  <Button 
                    className="bg-chat-purple hover:bg-chat-dark"
                    size="icon"
                    onClick={handleSendMessage}
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <h2 className="text-xl font-semibold mb-2">Выберите чат</h2>
                <p className="text-muted-foreground">Выберите контакт из списка слева, чтобы начать общение</p>
                {quietHours && (
                  <div className="mt-4 p-3 bg-amber-50 text-amber-800 rounded-md inline-flex items-center gap-2">
                    <AlertCircle className="h-5 w-5" />
                    <div className="text-left">
                      <p className="font-medium">Сейчас действует "тихий час" (20:00-7:00)</p>
                      <p className="text-sm">Все входящие сообщения будут получены без звуковых уведомлений</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Chats;
