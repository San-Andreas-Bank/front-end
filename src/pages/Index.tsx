
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Banknote, CreditCard, DollarSign, Users, Wallet, FileText } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Banknote className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">Banco San Andreas</h1>
            </div>
            <div className="flex space-x-4">
              <Link to="/login">
                <Button variant="outline">Iniciar Sesión</Button>
              </Link>
              <Link to="/login">
                <Button className="bg-blue-600 hover:bg-blue-700">Abrir Cuenta</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Tu banco digital de confianza
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Experiencia bancaria moderna con tecnología de microservicios. 
            Gestiona tus finanzas de manera segura y eficiente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/login">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-3">
                Comenzar Ahora
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="px-8 py-3">
              Conocer Más
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Nuestros Servicios
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Wallet className="h-10 w-10 text-blue-600 mb-2" />
                <CardTitle>Cuentas Digitales</CardTitle>
                <CardDescription>
                  Maneja múltiples cuentas con facilidad
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Cuentas de ahorro, corriente y de inversión con acceso 24/7
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CreditCard className="h-10 w-10 text-green-600 mb-2" />
                <CardTitle>Pagos Instantáneos</CardTitle>
                <CardDescription>
                  Transfiere dinero al instante
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Pagos P2P, servicios y transferencias internacionales
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <FileText className="h-10 w-10 text-purple-600 mb-2" />
                <CardTitle>Historial Completo</CardTitle>
                <CardDescription>
                  Revisa todos tus movimientos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Análisis detallado de gastos e ingresos con reportes
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <DollarSign className="h-10 w-10 text-yellow-600 mb-2" />
                <CardTitle>Inversiones</CardTitle>
                <CardDescription>
                  Haz crecer tu dinero
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Fondos de inversión y productos financieros personalizados
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-10 w-10 text-red-600 mb-2" />
                <CardTitle>Soporte 24/7</CardTitle>
                <CardDescription>
                  Estamos aquí para ayudarte
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Chat en vivo, soporte telefónico y centro de ayuda
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Banknote className="h-10 w-10 text-indigo-600 mb-2" />
                <CardTitle>Seguridad Total</CardTitle>
                <CardDescription>
                  Tu dinero protegido
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Encriptación avanzada y autenticación de dos factores
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">
            Tecnología de Vanguardia
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Nuestra arquitectura de microservicios garantiza disponibilidad, seguridad y escalabilidad
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              Autenticación Segura
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              Gestión de Perfiles
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              Procesamiento de Pagos
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              Notificaciones en Tiempo Real
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              API Gateway
            </Badge>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Banknote className="h-6 w-6" />
                <span className="text-lg font-bold">Banco San Andreas</span>
              </div>
              <p className="text-gray-400">
                El banco digital que revoluciona tus finanzas personales.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Servicios</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Cuentas Digitales</li>
                <li>Tarjetas de Crédito</li>
                <li>Inversiones</li>
                <li>Préstamos</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Soporte</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Centro de Ayuda</li>
                <li>Chat en Vivo</li>
                <li>Contacto</li>
                <li>Términos</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+1 (555) 123-4567</li>
                <li>soporte@bancosanandreas.com</li>
                <li>San Andreas, CA</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Banco San Andreas. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
