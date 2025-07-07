
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Shield,
  Bell,
  CreditCard,
  FileText,
  Edit,
  Camera,
} from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";
import { toast } from "@/hooks/use-toast";

const Profile = () => {
  const [profileData, setProfileData] = useState({
    name: "Juan Pérez García",
    email: "juan.perez@email.com",
    phone: "+52 55 1234 5678",
    address: "Av. Reforma 123, Col. Centro, CDMX",
    birthDate: "1985-03-15",
    occupation: "Ingeniero de Software",
    monthlyIncome: "45000",
  });

  const [notifications, setNotifications] = useState({
    email: true,
    sms: true,
    push: true,
    marketing: false,
  });

  const [security, setSecurity] = useState({
    twoFactor: true,
    biometric: false,
    sessionTimeout: "30",
  });

  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Perfil actualizado",
      description: "Tus datos se han guardado correctamente.",
    });
  };

  const handleNotificationUpdate = () => {
    toast({
      title: "Configuración guardada",
      description: "Tus preferencias de notificaciones se han actualizado.",
    });
  };

  const handleSecurityUpdate = () => {
    toast({
      title: "Configuración de seguridad actualizada",
      description: "Los cambios de seguridad se han aplicado correctamente.",
    });
  };

  const accountSummary = {
    memberSince: "Marzo 2022",
    accountType: "Premium",
    verificationLevel: "Completamente Verificado",
    totalAccounts: 4,
    totalBalance: 73751.25,
  };

  return (
    <DashboardLayout>
      <div className="p-4 sm:p-6 lg:p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Mi Perfil</h2>
          <p className="text-gray-600">Gestiona tu información personal y configuraciones</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Profile Summary Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="relative inline-block">
                    <Avatar className="w-24 h-24 mx-auto mb-4">
                      <AvatarImage src="/placeholder.svg" alt="Juan Pérez" />
                      <AvatarFallback className="text-2xl">JP</AvatarFallback>
                    </Avatar>
                    <Button
                      size="sm"
                      variant="outline"
                      className="absolute -bottom-2 -right-2 rounded-full p-2 h-8 w-8"
                    >
                      <Camera className="h-3 w-3" />
                    </Button>
                  </div>
                  <h3 className="font-semibold text-lg">{profileData.name}</h3>
                  <p className="text-gray-500 text-sm mb-2">{profileData.email}</p>
                  <Badge className="mb-4">{accountSummary.accountType}</Badge>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Miembro desde</span>
                      <span className="font-medium">{accountSummary.memberSince}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Verificación</span>
                      <Badge variant="secondary" className="text-xs bg-green-100 text-green-800">
                        Verificado
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Cuentas</span>
                      <span className="font-medium">{accountSummary.totalAccounts}</span>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Balance Total</span>
                      <span className="font-semibold">${accountSummary.totalBalance.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="personal" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="personal">Personal</TabsTrigger>
                <TabsTrigger value="security">Seguridad</TabsTrigger>
                <TabsTrigger value="notifications">Notificaciones</TabsTrigger>
                <TabsTrigger value="documents">Documentos</TabsTrigger>
              </TabsList>

              <TabsContent value="personal">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <User className="h-5 w-5" />
                      <span>Información Personal</span>
                    </CardTitle>
                    <CardDescription>
                      Actualiza tu información básica y datos de contacto
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleProfileUpdate} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Nombre Completo</Label>
                          <Input
                            id="name"
                            value={profileData.name}
                            onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            type="email"
                            value={profileData.email}
                            onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Teléfono</Label>
                          <Input
                            id="phone"
                            value={profileData.phone}
                            onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="birthDate">Fecha de Nacimiento</Label>
                          <Input
                            id="birthDate"
                            type="date"
                            value={profileData.birthDate}
                            onChange={(e) => setProfileData({...profileData, birthDate: e.target.value})}
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="address">Dirección</Label>
                        <Textarea
                          id="address"
                          value={profileData.address}
                          onChange={(e) => setProfileData({...profileData, address: e.target.value})}
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="occupation">Ocupación</Label>
                          <Input
                            id="occupation"
                            value={profileData.occupation}
                            onChange={(e) => setProfileData({...profileData, occupation: e.target.value})}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="monthlyIncome">Ingresos Mensuales (MXN)</Label>
                          <Input
                            id="monthlyIncome"
                            type="number"
                            value={profileData.monthlyIncome}
                            onChange={(e) => setProfileData({...profileData, monthlyIncome: e.target.value})}
                          />
                        </div>
                      </div>
                      <Button type="submit" className="w-full md:w-auto">
                        Guardar Cambios
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="security">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Shield className="h-5 w-5" />
                      <span>Configuración de Seguridad</span>
                    </CardTitle>
                    <CardDescription>
                      Mantén tu cuenta segura con estas opciones
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Autenticación de Dos Factores</h4>
                        <p className="text-sm text-gray-500">Protege tu cuenta con verificación adicional</p>
                      </div>
                      <Switch
                        checked={security.twoFactor}
                        onCheckedChange={(checked) => setSecurity({...security, twoFactor: checked})}
                      />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Autenticación Biométrica</h4>
                        <p className="text-sm text-gray-500">Usa huella dactilar o reconocimiento facial</p>
                      </div>
                      <Switch
                        checked={security.biometric}
                        onCheckedChange={(checked) => setSecurity({...security, biometric: checked})}
                      />
                    </div>
                    <Separator />
                    <div className="space-y-2">
                      <Label htmlFor="sessionTimeout">Tiempo de Sesión (minutos)</Label>
                      <Input
                        id="sessionTimeout"
                        type="number"
                        value={security.sessionTimeout}
                        onChange={(e) => setSecurity({...security, sessionTimeout: e.target.value})}
                        min="5"
                        max="120"
                      />
                    </div>
                    <div className="space-y-4">
                      <Button variant="outline" className="w-full">
                        Cambiar Contraseña
                      </Button>
                      <Button variant="outline" className="w-full">
                        Descargar Códigos de Respaldo
                      </Button>
                    </div>
                    <Button onClick={handleSecurityUpdate} className="w-full md:w-auto">
                      Actualizar Configuración
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="notifications">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Bell className="h-5 w-5" />
                      <span>Preferencias de Notificación</span>
                    </CardTitle>
                    <CardDescription>
                      Controla cómo y cuándo recibes notificaciones
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Notificaciones por Email</h4>
                        <p className="text-sm text-gray-500">Recibe alertas importantes por correo</p>
                      </div>
                      <Switch
                        checked={notifications.email}
                        onCheckedChange={(checked) => setNotifications({...notifications, email: checked})}
                      />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Notificaciones SMS</h4>
                        <p className="text-sm text-gray-500">Recibe códigos de verificación y alertas</p>
                      </div>
                      <Switch
                        checked={notifications.sms}
                        onCheckedChange={(checked) => setNotifications({...notifications, sms: checked})}
                      />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Notificaciones Push</h4>
                        <p className="text-sm text-gray-500">Recibe notificaciones en tu dispositivo</p>
                      </div>
                      <Switch
                        checked={notifications.push}
                        onCheckedChange={(checked) => setNotifications({...notifications, push: checked})}
                      />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Marketing y Promociones</h4>
                        <p className="text-sm text-gray-500">Recibe ofertas especiales y novedades</p>
                      </div>
                      <Switch
                        checked={notifications.marketing}
                        onCheckedChange={(checked) => setNotifications({...notifications, marketing: checked})}
                      />
                    </div>
                    <Button onClick={handleNotificationUpdate} className="w-full md:w-auto">
                      Guardar Preferencias
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="documents">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <FileText className="h-5 w-5" />
                      <span>Documentos y Verificación</span>
                    </CardTitle>
                    <CardDescription>
                      Gestiona tus documentos de identidad y verificación
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Card>
                          <CardContent className="p-4">
                            <div className="flex items-center space-x-3">
                              <FileText className="h-8 w-8 text-green-600" />
                              <div>
                                <h4 className="font-medium">Identificación Oficial</h4>
                                <p className="text-sm text-gray-500">INE - Verificado</p>
                                <Badge className="mt-1 bg-green-100 text-green-800">Aprobado</Badge>
                              </div>
                            </div>
                          </CardContent>
                        </Card>

                        <Card>
                          <CardContent className="p-4">
                            <div className="flex items-center space-x-3">
                              <FileText className="h-8 w-8 text-green-600" />
                              <div>
                                <h4 className="font-medium">Comprobante de Ingresos</h4>
                                <p className="text-sm text-gray-500">Recibo de Nómina</p>
                                <Badge className="mt-1 bg-green-100 text-green-800">Aprobado</Badge>
                              </div>
                            </div>
                          </CardContent>
                        </Card>

                        <Card>
                          <CardContent className="p-4">
                            <div className="flex items-center space-x-3">
                              <FileText className="h-8 w-8 text-green-600" />
                              <div>
                                <h4 className="font-medium">Comprobante de Domicilio</h4>
                                <p className="text-sm text-gray-500">CFE - Reciente</p>
                                <Badge className="mt-1 bg-green-100 text-green-800">Aprobado</Badge>
                              </div>
                            </div>
                          </CardContent>
                        </Card>

                        <Card>
                          <CardContent className="p-4">
                            <div className="flex items-center space-x-3">
                              <FileText className="h-8 w-8 text-blue-600" />
                              <div>
                                <h4 className="font-medium">Estados de Cuenta</h4>
                                <p className="text-sm text-gray-500">Disponibles para descarga</p>
                                <Button size="sm" variant="outline" className="mt-2">
                                  Descargar
                                </Button>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>

                      <div className="mt-6">
                        <h4 className="font-medium mb-3">Subir Nuevo Documento</h4>
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                          <FileText className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                          <p className="text-sm text-gray-500 mb-2">
                            Arrastra y suelta archivos aquí, o haz clic para seleccionar
                          </p>
                          <Button variant="outline" size="sm">
                            Seleccionar Archivos
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Profile;
