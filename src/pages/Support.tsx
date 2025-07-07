
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import {
  Users,
  MessageSquare,
  Phone,
  Mail,
  FileText,
  Clock,
  CheckCircle,
  HelpCircle,
  Send,
} from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";
import { toast } from "@/hooks/use-toast";

const Support = () => {
  const [ticketData, setTicketData] = useState({
    subject: "",
    category: "",
    priority: "",
    message: "",
  });

  const tickets = [
    {
      id: "TK-001234",
      subject: "Problema con transferencia",
      category: "Pagos",
      status: "open",
      priority: "high",
      created: "2024-01-15 10:30",
      lastUpdate: "2024-01-15 14:22",
    },
    {
      id: "TK-001201",
      subject: "Consulta sobre intereses",
      category: "Cuentas",
      status: "resolved",
      priority: "medium",
      created: "2024-01-10 09:15",
      lastUpdate: "2024-01-12 16:45",
    },
    {
      id: "TK-001189",
      subject: "Actualización de datos",
      category: "Perfil",
      status: "closed",
      priority: "low",
      created: "2024-01-05 11:20",
      lastUpdate: "2024-01-08 13:30",
    },
  ];

  const faqs = [
    {
      category: "Cuentas y Saldos",
      questions: [
        {
          question: "¿Cómo puedo consultar mi saldo?",
          answer: "Puedes consultar tu saldo las 24 horas del día desde la app móvil, banca en línea, o llamando a nuestro centro de atención telefónica."
        },
        {
          question: "¿Cuál es el saldo mínimo requerido?",
          answer: "El saldo mínimo varía según el tipo de cuenta. Cuenta de ahorros: $500, Cuenta corriente: $1,000, Cuenta premium: $5,000."
        },
        {
          question: "¿Cómo abro una nueva cuenta?",
          answer: "Puedes abrir una cuenta nueva desde tu panel de control, proporcionando la información requerida y realizando el depósito inicial mínimo."
        }
      ]
    },
    {
      category: "Transferencias y Pagos",
      questions: [
        {
          question: "¿Cuánto tiempo tardan las transferencias?",
          answer: "Las transferencias a cuentas del mismo banco son inmediatas. A otros bancos pueden tardar de 1 a 3 días hábiles."
        },
        {
          question: "¿Cuáles son los límites de transferencia?",
          answer: "Los límites diarios son: Transferencias internas $100,000, Transferencias externas $50,000, Pagos de servicios $25,000."
        },
        {
          question: "¿Qué comisiones se cobran?",
          answer: "Las transferencias internas son gratuitas. Transferencias a otros bancos tienen una comisión de $15. Los pagos de servicios son gratuitos."
        }
      ]
    },
    {
      category: "Seguridad",
      questions: [
        {
          question: "¿Cómo mantengo mi cuenta segura?",
          answer: "Usa contraseñas fuertes, activa la autenticación de dos factores, no compartas tus datos de acceso, y revisa regularmente tus movimientos."
        },
        {
          question: "¿Qué hago si veo movimientos no reconocidos?",
          answer: "Reporta inmediatamente cualquier movimiento sospechoso llamando a nuestro centro de atención o desde la app móvil en la sección de reportes."
        },
        {
          question: "¿Cómo actualizo mi información de contacto?",
          answer: "Puedes actualizar tu información desde la sección Mi Perfil en tu panel de control, o visitando cualquiera de nuestras sucursales."
        }
      ]
    }
  ];

  const handleSubmitTicket = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Ticket creado exitosamente",
      description: "Te contactaremos pronto para resolver tu consulta.",
    });
    setTicketData({ subject: "", category: "", priority: "", message: "" });
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "open":
        return <Badge className="bg-blue-100 text-blue-800">Abierto</Badge>;
      case "resolved":
        return <Badge className="bg-green-100 text-green-800">Resuelto</Badge>;
      case "closed":
        return <Badge className="bg-gray-100 text-gray-800">Cerrado</Badge>;
      default:
        return null;
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "high":
        return <Badge variant="destructive">Alta</Badge>;
      case "medium":
        return <Badge className="bg-yellow-100 text-yellow-800">Media</Badge>;
      case "low":
        return <Badge variant="secondary">Baja</Badge>;
      default:
        return null;
    }
  };

  return (
    <DashboardLayout>
      <div className="p-4 sm:p-6 lg:p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Centro de Soporte</h2>
          <p className="text-gray-600">Estamos aquí para ayudarte con todas tus consultas</p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="text-center">
            <CardContent className="p-6">
              <Phone className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Teléfono</h3>
              <p className="text-sm text-gray-600 mb-3">Atención 24/7</p>
              <p className="font-medium">+52 800 123 4567</p>
              <Button size="sm" className="mt-3">Llamar Ahora</Button>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <MessageSquare className="h-8 w-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Chat en Vivo</h3>
              <p className="text-sm text-gray-600 mb-3">Respuesta inmediata</p>
              <p className="font-medium">Lun-Dom 6:00-24:00</p>
              <Button size="sm" className="mt-3">Iniciar Chat</Button>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <Mail className="h-8 w-8 text-purple-600 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-sm text-gray-600 mb-3">Respuesta en 24hrs</p>
              <p className="font-medium">soporte@bancosanandreas.com</p>
              <Button size="sm" className="mt-3">Enviar Email</Button>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="faq" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="faq">Preguntas Frecuentes</TabsTrigger>
            <TabsTrigger value="tickets">Mis Consultas</TabsTrigger>
            <TabsTrigger value="new-ticket">Nueva Consulta</TabsTrigger>
          </TabsList>

          <TabsContent value="faq">
            <div className="space-y-6">
              {faqs.map((category, categoryIndex) => (
                <Card key={categoryIndex}>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <HelpCircle className="h-5 w-5" />
                      <span>{category.category}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      {category.questions.map((faq, faqIndex) => (
                        <AccordionItem key={faqIndex} value={`item-${categoryIndex}-${faqIndex}`}>
                          <AccordionTrigger className="text-left">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-gray-600">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="tickets">
            <Card>
              <CardHeader>
                <CardTitle>Mis Consultas</CardTitle>
                <CardDescription>
                  Historial de tus solicitudes de soporte
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {tickets.map((ticket) => (
                    <div key={ticket.id} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <FileText className="h-5 w-5 text-gray-400" />
                          <div>
                            <h4 className="font-medium">{ticket.subject}</h4>
                            <p className="text-sm text-gray-500">#{ticket.id}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          {getStatusBadge(ticket.status)}
                          {getPriorityBadge(ticket.priority)}
                        </div>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <span className="text-gray-500">Categoría:</span>
                          <p className="font-medium">{ticket.category}</p>
                        </div>
                        <div>
                          <span className="text-gray-500">Creado:</span>
                          <p className="font-medium">{ticket.created}</p>
                        </div>
                        <div>
                          <span className="text-gray-500">Actualizado:</span>
                          <p className="font-medium">{ticket.lastUpdate}</p>
                        </div>
                        <div>
                          <Button size="sm" variant="outline">Ver Detalles</Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="new-ticket">
            <Card>
              <CardHeader>
                <CardTitle>Nueva Consulta</CardTitle>
                <CardDescription>
                  Describe tu problema y te ayudaremos a resolverlo
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmitTicket} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="subject">Asunto</Label>
                      <Input
                        id="subject"
                        placeholder="Describe brevemente tu consulta"
                        value={ticketData.subject}
                        onChange={(e) => setTicketData({...ticketData, subject: e.target.value})}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="category">Categoría</Label>
                      <select
                        id="category"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        value={ticketData.category}
                        onChange={(e) => setTicketData({...ticketData, category: e.target.value})}
                        required
                      >
                        <option value="">Selecciona una categoría</option>
                        <option value="accounts">Cuentas y Saldos</option>
                        <option value="payments">Transferencias y Pagos</option>
                        <option value="cards">Tarjetas</option>
                        <option value="security">Seguridad</option>
                        <option value="technical">Problemas Técnicos</option>
                        <option value="other">Otros</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="priority">Prioridad</Label>
                    <select
                      id="priority"
                      className="w-full p-2 border border-gray-300 rounded-md"
                      value={ticketData.priority}
                      onChange={(e) => setTicketData({...ticketData, priority: e.target.value})}
                      required
                    >
                      <option value="">Selecciona la prioridad</option>
                      <option value="low">Baja - Consulta general</option>
                      <option value="medium">Media - Necesito ayuda</option>
                      <option value="high">Alta - Problema urgente</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Mensaje</Label>
                    <Textarea
                      id="message"
                      placeholder="Describe detalladamente tu consulta o problema..."
                      rows={6}
                      value={ticketData.message}
                      onChange={(e) => setTicketData({...ticketData, message: e.target.value})}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full md:w-auto">
                    <Send className="h-4 w-4 mr-2" />
                    Enviar Consulta
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Support;
