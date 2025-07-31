import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const VisitExchange = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [surfTimer, setSurfTimer] = useState(30);
  const [isRegistered, setIsRegistered] = useState(false);
  const [userBalance, setUserBalance] = useState(150);

  const statisticsData = [
    { name: 'Пн', показы: 240, переходы: 45 },
    { name: 'Вт', показы: 320, переходы: 62 },
    { name: 'Ср', показы: 180, переходы: 38 },
    { name: 'Чт', показы: 290, переходы: 71 },
    { name: 'Пт', показы: 350, переходы: 89 },
    { name: 'Сб', показы: 400, переходы: 95 },
    { name: 'Вс', показы: 280, переходы: 55 }
  ];

  const conversionData = [
    { name: 'Янв', конверсия: 18.5 },
    { name: 'Фев', конверсия: 22.1 },
    { name: 'Мар', конверсия: 25.3 },
    { name: 'Апр', конверсия: 19.8 },
    { name: 'Май', конверсия: 28.7 }
  ];

  React.useEffect(() => {
    if (activeSection === 'surf' && surfTimer > 0) {
      const timer = setTimeout(() => setSurfTimer(surfTimer - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [surfTimer, activeSection]);

  const NavButton = ({ section, children, icon }: { section: string; children: React.ReactNode; icon: string }) => (
    <Button
      onClick={() => setActiveSection(section)}
      variant={activeSection === section ? 'default' : 'outline'}
      className={`flex items-center gap-2 transition-all duration-300 ${
        activeSection === section 
          ? 'bg-gradient-to-r from-coral to-purple text-white shadow-lg scale-105' 
          : 'hover:scale-105 hover:shadow-md'
      }`}
    >
      <Icon name={icon as any} size={16} />
      {children}
    </Button>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow/20 via-mint/10 to-purple/20">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Roboto:wght@300;400;500&display=swap');
        `}
      </style>
      
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md border-b sticky top-0 z-50 animate-fade-in">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-coral to-purple rounded-full flex items-center justify-center">
                <Icon name="Globe" className="text-white" size={20} />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-coral to-purple bg-clip-text text-transparent">
                VisitExchange
              </h1>
            </div>
            
            <nav className="flex gap-2">
              <NavButton section="home" icon="Home">Главная</NavButton>
              <NavButton section="register" icon="UserPlus">Регистрация</NavButton>
              <NavButton section="profile" icon="User">Профиль</NavButton>
              <NavButton section="ads" icon="Megaphone">Реклама</NavButton>
              <NavButton section="surf" icon="Mouse">Серфинг</NavButton>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Home Section */}
        {activeSection === 'home' && (
          <div className="space-y-8 animate-fade-in">
            {/* Hero */}
            <div className="text-center py-16 bg-gradient-to-r from-coral/10 via-mint/10 to-purple/10 rounded-3xl">
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-coral via-mint to-purple bg-clip-text text-transparent">
                Обмен Визитами
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Увеличивайте посещаемость вашего сайта с помощью системы взаимного обмена визитами
              </p>
              <div className="flex justify-center gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-coral to-purple hover:scale-105 transition-transform"
                  onClick={() => setActiveSection('register')}
                >
                  <Icon name="Rocket" size={20} className="mr-2" />
                  Начать сейчас
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => setActiveSection('surf')}
                >
                  <Icon name="Play" size={20} className="mr-2" />
                  Попробовать серфинг
                </Button>
              </div>
            </div>

            {/* Features */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="hover:scale-105 transition-transform duration-300 hover:shadow-xl">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-coral to-purple rounded-lg flex items-center justify-center mb-4">
                    <Icon name="TrendingUp" className="text-white" size={24} />
                  </div>
                  <CardTitle className="text-coral">Увеличение трафика</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Получайте реальных посетителей на ваш сайт через систему взаимного обмена</p>
                </CardContent>
              </Card>

              <Card className="hover:scale-105 transition-transform duration-300 hover:shadow-xl">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-mint to-purple rounded-lg flex items-center justify-center mb-4">
                    <Icon name="BarChart3" className="text-white" size={24} />
                  </div>
                  <CardTitle className="text-mint">Детальная статистика</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Отслеживайте показы, клики и конверсию в реальном времени</p>
                </CardContent>
              </Card>

              <Card className="hover:scale-105 transition-transform duration-300 hover:shadow-xl">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-purple to-coral rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Shield" className="text-white" size={24} />
                  </div>
                  <CardTitle className="text-purple">Качественный трафик</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Только живые пользователи, проверенные сайты и честная система обмена</p>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Registration Section */}
        {activeSection === 'register' && (
          <div className="max-w-md mx-auto animate-scale-in">
            <Card className="shadow-xl">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-coral">Регистрация</CardTitle>
                <p className="text-gray-600">Присоединитесь к сообществу</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input placeholder="Ваше имя" />
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Пароль" />
                <Input placeholder="URL вашего сайта" />
                <Button 
                  className="w-full bg-gradient-to-r from-coral to-purple"
                  onClick={() => {
                    setIsRegistered(true);
                    setActiveSection('profile');
                  }}
                >
                  <Icon name="UserCheck" size={16} className="mr-2" />
                  Зарегистрироваться
                </Button>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Profile Section */}
        {activeSection === 'profile' && (
          <div className="space-y-6 animate-fade-in">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="User" className="text-coral" />
                    Профиль пользователя
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-16 h-16 bg-gradient-to-br from-coral to-purple rounded-full flex items-center justify-center">
                      <Icon name="User" className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold">Иван Петров</h3>
                      <p className="text-gray-600">ivan@example.com</p>
                      <Badge variant="secondary" className="mt-1">Активный пользователь</Badge>
                    </div>
                  </div>
                  <div className="p-4 bg-gradient-to-r from-mint/20 to-purple/20 rounded-lg">
                    <p className="text-sm text-gray-600">Баланс визитов</p>
                    <p className="text-2xl font-bold text-mint">{userBalance}</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Globe" className="text-purple" />
                    Мои сайты
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">mysite.ru</p>
                        <p className="text-sm text-gray-600">Активный</p>
                      </div>
                      <Badge className="bg-green-100 text-green-800">Проверен</Badge>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    <Icon name="Plus" size={16} className="mr-2" />
                    Добавить сайт
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Ads Section */}
        {activeSection === 'ads' && (
          <div className="space-y-6 animate-fade-in">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Megaphone" className="text-coral" />
                    Разместить рекламу
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input placeholder="URL для рекламы" />
                  <Input placeholder="Заголовок объявления" />
                  <Input placeholder="Описание (до 100 символов)" />
                  <div className="flex gap-2">
                    <Input placeholder="Количество показов" type="number" />
                    <Input placeholder="Стоимость за клик" type="number" />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-coral to-purple">
                    <Icon name="Send" size={16} className="mr-2" />
                    Создать кампанию
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="BarChart3" className="text-mint" />
                    Активные кампании
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">Кампания #1</h4>
                      <Badge className="bg-green-100 text-green-800">Активна</Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">mysite.ru/promo</p>
                    <div className="flex justify-between text-sm">
                      <span>Показы: 1,245</span>
                      <span>Клики: 89</span>
                      <span>CTR: 7.1%</span>
                    </div>
                    <Progress value={65} className="mt-2" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Statistics Charts */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="TrendingUp" className="text-purple" />
                  Детальная статистика показов и переходов
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-4">Показы и переходы за неделю</h4>
                    <ResponsiveContainer width="100%" height={250}>
                      <AreaChart data={statisticsData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Area 
                          type="monotone" 
                          dataKey="показы" 
                          stackId="1" 
                          stroke="#FF6B6B" 
                          fill="#FF6B6B" 
                          fillOpacity={0.3} 
                        />
                        <Area 
                          type="monotone" 
                          dataKey="переходы" 
                          stackId="2" 
                          stroke="#4ECDC4" 
                          fill="#4ECDC4" 
                          fillOpacity={0.6} 
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-4">Конверсия по месяцам (%)</h4>
                    <ResponsiveContainer width="100%" height={250}>
                      <BarChart data={conversionData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar 
                          dataKey="конверсия" 
                          fill="url(#colorGradient)" 
                        />
                        <defs>
                          <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#9B87F5" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#9B87F5" stopOpacity={0.3}/>
                          </linearGradient>
                        </defs>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Surf Section */}
        {activeSection === 'surf' && (
          <div className="max-w-4xl mx-auto space-y-6 animate-scale-in">
            <Card className="shadow-xl">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-mint">Серфинг сайтов</CardTitle>
                <p className="text-gray-600">Посещайте сайты и зарабатывайте визиты</p>
              </CardHeader>
              <CardContent>
                {surfTimer > 0 ? (
                  <div className="text-center space-y-6">
                    <div className="w-32 h-32 mx-auto bg-gradient-to-br from-mint to-purple rounded-full flex items-center justify-center">
                      <span className="text-4xl font-bold text-white">{surfTimer}</span>
                    </div>
                    <p className="text-lg">Просматривайте сайт: <strong>example.com</strong></p>
                    <Progress value={(30 - surfTimer) / 30 * 100} className="max-w-md mx-auto" />
                  </div>
                ) : (
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center">
                      <Icon name="Check" className="text-green-600" size={32} />
                    </div>
                    <p className="text-lg text-green-600 font-medium">Визит засчитан! +1 кредит</p>
                    <Button 
                      onClick={() => {
                        setSurfTimer(30);
                        setUserBalance(userBalance + 1);
                      }}
                      className="bg-gradient-to-r from-mint to-purple"
                    >
                      <Icon name="RefreshCw" size={16} className="mr-2" />
                      Следующий сайт
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-4">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-2xl font-bold text-coral">{userBalance}</div>
                  <p className="text-sm text-gray-600">Ваш баланс</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-2xl font-bold text-mint">47</div>
                  <p className="text-sm text-gray-600">Сегодня посещено</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-2xl font-bold text-purple">1,234</div>
                  <p className="text-sm text-gray-600">Всего визитов</p>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="mt-16 bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-coral to-purple rounded-full flex items-center justify-center">
              <Icon name="Globe" className="text-white" size={16} />
            </div>
            <h3 className="text-xl font-bold">VisitExchange</h3>
          </div>
          <p className="text-gray-400">Увеличивайте трафик честно и эффективно</p>
        </div>
      </footer>
    </div>
  );
};

export default VisitExchange;