import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Index = () => {
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [ceilingType, setCeilingType] = useState('matte');
  const [calculatedPrice, setCalculatedPrice] = useState<number | null>(null);

  const prices: Record<string, number> = {
    matte: 450,
    glossy: 550,
    satin: 500,
  };

  const calculatePrice = () => {
    const area = parseFloat(length) * parseFloat(width);
    if (!isNaN(area) && area > 0) {
      const pricePerSqm = prices[ceilingType];
      setCalculatedPrice(area * pricePerSqm);
    }
  };

  const catalogItems = [
    {
      id: 1,
      title: 'Матовые потолки',
      description: 'Классическое решение для любого интерьера. Скрывают неровности и не создают бликов.',
      price: '450 ₽/м²',
      icon: 'Square',
    },
    {
      id: 2,
      title: 'Глянцевые потолки',
      description: 'Визуально увеличивают пространство. Идеальны для небольших комнат.',
      price: '550 ₽/м²',
      icon: 'Sparkles',
    },
    {
      id: 3,
      title: 'Сатиновые потолки',
      description: 'Сочетают преимущества матовых и глянцевых. Элегантный шелковистый блеск.',
      price: '500 ₽/м²',
      icon: 'Gem',
    },
  ];

  const portfolioItems = [
    {
      id: 1,
      title: 'Гостиная 42 м²',
      type: 'Глянцевый белый',
      area: '42 м²',
      image: 'https://cdn.poehali.dev/projects/c022eb8e-d04d-4051-bd0d-83edca66e562/files/890dfda1-8ad0-4e5c-8daf-f4210598dbb9.jpg',
    },
    {
      id: 2,
      title: 'Спальня 18 м²',
      type: 'Матовый бежевый',
      area: '18 м²',
      image: 'https://cdn.poehali.dev/projects/c022eb8e-d04d-4051-bd0d-83edca66e562/files/69f10ab8-f7fb-426a-b5bf-7598109f1780.jpg',
    },
    {
      id: 3,
      title: 'Кухня 15 м²',
      type: 'Сатиновый серый',
      area: '15 м²',
      image: 'https://cdn.poehali.dev/projects/c022eb8e-d04d-4051-bd0d-83edca66e562/files/8f9c01b7-7571-4be5-b312-9b486a015044.jpg',
    },
    {
      id: 4,
      title: 'Офис 65 м²',
      type: 'Матовый белый',
      area: '65 м²',
      image: 'https://cdn.poehali.dev/projects/c022eb8e-d04d-4051-bd0d-83edca66e562/files/69f10ab8-f7fb-426a-b5bf-7598109f1780.jpg',
    },
  ];

  const services = [
    { icon: 'Ruler', title: 'Замер', description: 'Бесплатный выезд специалиста' },
    { icon: 'Palette', title: 'Дизайн', description: 'Подбор цвета и текстуры' },
    { icon: 'Settings', title: 'Монтаж', description: 'Установка за 4-6 часов' },
    { icon: 'Shield', title: 'Гарантия', description: '10 лет на материал и работу' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Натяжные Потолки</h1>
            <nav className="hidden md:flex gap-8">
              <a href="#catalog" className="text-sm hover:text-primary transition-colors">
                Каталог
              </a>
              <a href="#calculator" className="text-sm hover:text-primary transition-colors">
                Калькулятор
              </a>
              <a href="#portfolio" className="text-sm hover:text-primary transition-colors">
                Портфолио
              </a>
              <a href="#services" className="text-sm hover:text-primary transition-colors">
                Услуги
              </a>
              <a href="#contact" className="text-sm hover:text-primary transition-colors">
                Контакты
              </a>
            </nav>
            <Button>
              <Icon name="Phone" size={16} className="mr-2" />
              Заказать звонок
            </Button>
          </div>
        </div>
      </header>

      <section className="py-20 md:py-32 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Идеальные потолки
              <br />
              <span className="text-primary">для вашего дома</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Качественная установка натяжных потолков за 1 день. Гарантия 10 лет. Бесплатный замер по Москве и области.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-base">
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать стоимость
              </Button>
              <Button size="lg" variant="outline" className="text-base">
                <Icon name="Image" size={20} className="mr-2" />
                Смотреть работы
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Каталог потолков</h2>
            <p className="text-muted-foreground">Выберите идеальный вариант для вашего интерьера</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {catalogItems.map((item, index) => (
              <Card
                key={item.id}
                className="hover:shadow-lg transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={item.icon as any} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{item.price}</span>
                    <Button variant="outline" size="sm">
                      Подробнее
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="calculator" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="animate-scale-in">
              <CardHeader>
                <CardTitle className="text-3xl text-center">Онлайн-калькулятор</CardTitle>
                <CardDescription className="text-center">
                  Рассчитайте стоимость потолка за 30 секунд
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <Tabs defaultValue="matte" onValueChange={(value) => setCeilingType(value)}>
                  <Label className="text-base">Тип потолка</Label>
                  <TabsList className="grid w-full grid-cols-3 mt-2">
                    <TabsTrigger value="matte">Матовый</TabsTrigger>
                    <TabsTrigger value="glossy">Глянцевый</TabsTrigger>
                    <TabsTrigger value="satin">Сатиновый</TabsTrigger>
                  </TabsList>
                </Tabs>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="length">Длина комнаты (м)</Label>
                    <Input
                      id="length"
                      type="number"
                      placeholder="5"
                      value={length}
                      onChange={(e) => setLength(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="width">Ширина комнаты (м)</Label>
                    <Input
                      id="width"
                      type="number"
                      placeholder="4"
                      value={width}
                      onChange={(e) => setWidth(e.target.value)}
                    />
                  </div>
                </div>

                <Button onClick={calculatePrice} className="w-full" size="lg">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать стоимость
                </Button>

                {calculatedPrice !== null && (
                  <div className="p-6 bg-primary/10 rounded-lg text-center animate-scale-in">
                    <p className="text-sm text-muted-foreground mb-2">Приблизительная стоимость</p>
                    <p className="text-4xl font-bold text-primary">{calculatedPrice.toLocaleString('ru-RU')} ₽</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Площадь: {(parseFloat(length) * parseFloat(width)).toFixed(1)} м²
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши работы</h2>
            <p className="text-muted-foreground">Более 500 установленных потолков в 2024 году</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioItems.map((item, index) => (
              <Card
                key={item.id}
                className="overflow-hidden hover:shadow-lg transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <CardDescription>
                    {item.type}
                    <br />
                    <span className="text-primary font-semibold">{item.area}</span>
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Как мы работаем</h2>
            <p className="text-muted-foreground">Простой и понятный процесс от заявки до результата</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="text-center p-6 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name={service.icon as any} size={32} className="text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="animate-scale-in">
              <CardHeader>
                <CardTitle className="text-3xl text-center">Остались вопросы?</CardTitle>
                <CardDescription className="text-center">
                  Оставьте заявку и мы свяжемся с вами в течение 15 минут
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Ваше имя</Label>
                  <Input id="name" placeholder="Иван" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон</Label>
                  <Input id="phone" type="tel" placeholder="+7 (999) 123-45-67" />
                </div>
                <Button className="w-full" size="lg">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
                <p className="text-xs text-center text-muted-foreground">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Натяжные Потолки</h3>
              <p className="text-sm opacity-80">Качественные натяжные потолки с 2010 года</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm opacity-80">
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>info@potolki.ru</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  <span>Москва, ул. Примерная, 1</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Режим работы</h4>
              <p className="text-sm opacity-80">Ежедневно с 9:00 до 21:00</p>
            </div>
          </div>
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm opacity-60">
            <p>© 2024 Натяжные Потолки. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;