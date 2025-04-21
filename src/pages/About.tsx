import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-b from-white to-gray-50 py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">О нас</h1>
              <p className="mt-4 text-lg text-gray-600 md:text-xl">
                Мы создаем инновационные решения для образования, соединяя педагогов и родителей
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-12">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Наша миссия</h2>
                <Separator className="my-4" />
                <p className="mt-4 text-lg text-gray-600">
                  Мы стремимся создать эффективную и удобную платформу для коммуникации между учителями и родителями, 
                  чтобы обеспечить лучшее образование для детей. Мы верим, что открытый диалог и сотрудничество — 
                  ключевые элементы успешного образовательного процесса.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Наша история</h2>
                <Separator className="my-4" />
                <p className="mt-4 text-lg text-gray-600">
                  Проект "ПедагогЧат" был основан в 2023 году группой энтузиастов из сферы образования и IT. 
                  Столкнувшись с проблемами коммуникации в учебных заведениях, мы решили создать инструмент, 
                  который сделает общение между школой и семьей простым, безопасным и эффективным.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold tracking-tight text-center text-gray-900 sm:text-3xl mb-12">Наша команда</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg" alt="Фото" />
                      <AvatarFallback>ИВ</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle>Иван Васильев</CardTitle>
                      <CardDescription>Основатель, CEO</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    15+ лет опыта в образовательных технологиях, бывший директор школы и методист
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg" alt="Фото" />
                      <AvatarFallback>МК</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle>Мария Кузнецова</CardTitle>
                      <CardDescription>Руководитель разработки</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Full-stack разработчик с 10-летним опытом, специалист по образовательным платформам
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg" alt="Фото" />
                      <AvatarFallback>АС</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle>Александр Смирнов</CardTitle>
                      <CardDescription>UX/UI дизайнер</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Эксперт по дизайну интерфейсов с фокусом на доступность и удобство использования
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
