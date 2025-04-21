import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, School, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <Features />
        
        <section className="py-16 container">
          <h2 className="text-3xl font-bold text-center mb-12">Кому подходит наша платформа</h2>
          
          <Tabs defaultValue="teachers" className="max-w-3xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="teachers" className="flex items-center gap-2">
                <School className="h-4 w-4" />
                <span>Педагогам</span>
              </TabsTrigger>
              <TabsTrigger value="parents" className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>Родителям</span>
              </TabsTrigger>
              <TabsTrigger value="schools" className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />
                <span>Учреждениям</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="teachers">
              <Card>
                <CardHeader>
                  <CardTitle>Для педагогов</CardTitle>
                  <CardDescription>
                    Оптимизируйте взаимодействие с родителями и сэкономьте время
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>ПедагогЧат помогает учителям:</p>
                  <ul className="space-y-2 list-disc list-inside text-gray-600">
                    <li>Быстро и удобно общаться с родителями учеников</li>
                    <li>Планировать родительские собрания и встречи</li>
                    <li>Отправлять важные уведомления всем родителям сразу</li>
                    <li>Хранить историю сообщений для документирования коммуникации</li>
                    <li>Сокращать время на административные задачи</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="parents">
              <Card>
                <CardHeader>
                  <CardTitle>Для родителей</CardTitle>
                  <CardDescription>
                    Будьте в курсе успехов ребенка и важных событий в школе
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>ПедагогЧат позволяет родителям:</p>
                  <ul className="space-y-2 list-disc list-inside text-gray-600">
                    <li>Поддерживать постоянную связь с учителями</li>
                    <li>Получать своевременные уведомления о событиях и достижениях</li>
                    <li>Задавать вопросы педагогам в удобное время</li>
                    <li>Участвовать в обсуждениях класса</li>
                    <li>Быть активным участником образовательного процесса</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="schools">
              <Card>
                <CardHeader>
                  <CardTitle>Для учебных заведений</CardTitle>
                  <CardDescription>
                    Улучшите коммуникацию между всеми участниками образовательного процесса
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>ПедагогЧат предлагает учебным заведениям:</p>
                  <ul className="space-y-2 list-disc list-inside text-gray-600">
                    <li>Единую платформу для коммуникации</li>
                    <li>Повышение родительской вовлеченности</li>
                    <li>Сокращение административной нагрузки на педагогов</li>
                    <li>Аналитику взаимодействия и отчеты</li>
                    <li>Безопасную среду для обмена информацией</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
