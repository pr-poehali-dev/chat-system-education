import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-white to-chat-light">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Улучшите общение между педагогами и родителями
            </h1>
            <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Наша платформа создана для удобного, безопасного и эффективного взаимодействия учителей с родителями. 
              Общайтесь, планируйте встречи и делитесь информацией в одном месте.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button className="bg-chat-purple hover:bg-chat-dark">
                Попробовать бесплатно
              </Button>
              <Button variant="outline">
                Узнать больше
              </Button>
            </div>
          </div>
          <div className="mx-auto lg:ml-auto flex justify-center">
            <div className="relative">
              <div className="absolute -left-4 -top-4 h-72 w-72 rounded-lg bg-chat-purple/20 blur-xl" />
              <img
                alt="Демонстрация интерфейса чата"
                className="relative mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                height="310"
                src="/placeholder.svg"
                width="550"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
