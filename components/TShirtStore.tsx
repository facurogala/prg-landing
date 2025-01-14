'use client'

import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { toast } from 'react-hot-toast';
import { motion } from 'framer-motion';
import Image from 'next/image';

type TShirt = {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
};

const tshirts: TShirt[] = [
  { 
    id: 1, 
    name: "PRG AK-47 Tee", 
    price: 27900, 
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/remera.jpg-Kre1X248aviuEcosJq4nzbWDMka8Vj.jpeg",
    description: "Remera negra con logo PRG y AK-47 al frente, calavera con barras cruzadas en la espalda"
  },
  { 
    id: 2, 
    name: "PRG Classic Tee", 
    price: 24900, 
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Classic%20remera.jpg-Tm9cxv5iXLnjwmSmg9Bz8zMtmY7Tb8.jpeg",
    description: "Remera negra con logo PRG al frente y diseño de calavera con barras en la espalda" 
  },
];

export function TShirtStore() {
  const [cart, setCart] = useState<TShirt[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [whatsappLink, setWhatsappLink] = useState<string | null>(null);

  const addToCart = (tshirt: TShirt) => {
    setCart([...cart, tshirt]);
    toast.success(`${tshirt.name} agregada al carrito`);
  };

  const removeFromCart = (id: number) => {
    const itemToRemove = cart.find(item => item.id === id);
    setCart(cart.filter(item => item.id !== id));
    if (itemToRemove) {
      toast.success(`${itemToRemove.name} eliminada del carrito`);
    }
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  const handlePurchase = async () => {
    setIsProcessing(true);
    try {
      const response = await fetch('/api/purchase', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items: cart,
          total: getTotalPrice(),
        }),
      });

      const data = await response.json();

      if (data.success) {
        toast.success('Compra realizada con éxito. Usa el botón de WhatsApp para recibir los detalles de la transferencia.');
        setWhatsappLink(data.whatsappLink);
        setCart([]);
      } else {
        toast.error('Hubo un error al procesar tu compra. Por favor, intenta de nuevo.');
      }
    } catch (error) {
      console.error('Error al realizar la compra:', error);
      toast.error('Hubo un error al procesar tu compra. Por favor, intenta de nuevo.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-black text-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
        >
          PRG Coaching T-Shirts
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {tshirts.map((tshirt, index) => (
            <motion.div
              key={tshirt.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <Card className="bg-black backdrop-blur-md border border-white/10 hover:border-[#DBFF00]/30 transition-all duration-300 flex flex-col h-full">
                <CardHeader className="p-0">
                  <div className="relative w-full pt-[70%]">
                    <Image 
                      src={tshirt.image} 
                      alt={tshirt.name} 
                      fill
                      className="object-cover rounded-t-lg"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6 flex flex-col flex-grow">
                  <div className="flex-grow">
                    <CardTitle className="text-xl font-semibold mb-2 text-white group-hover:text-[#DBFF00] transition-colors">{tshirt.name}</CardTitle>
                    <CardDescription className="text-gray-400 mb-4">{tshirt.description}</CardDescription>
                  </div>
                  <div className="mt-auto">
                    <p className="text-[#DBFF00] text-lg font-bold mb-4">{tshirt.price.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })}</p>
                    <Button 
                      onClick={() => addToCart(tshirt)} 
                      className="w-full bg-[#DBFF00] hover:bg-[#DBFF00]/90 text-black font-semibold transition-all duration-300"
                    >
                      Agregar al Carrito
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        {cart.length > 0 && (
          <motion.div 
            className="mt-12 bg-black backdrop-blur-md border border-white/10 rounded-lg p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-[#DBFF00]">Carrito de Compras</h3>
            <div className="space-y-4">
              {cart.map((item, index) => (
                <div key={index} className="flex justify-between items-center pb-4 border-b border-white/10">
                  <div>
                    <h4 className="font-semibold text-white">{item.name}</h4>
                    <p className="text-[#DBFF00]">{item.price.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })}</p>
                  </div>
                  <Button 
                    variant="outline" 
                    onClick={() => removeFromCart(item.id)} 
                    className="border-[#DBFF00] text-[#DBFF00] hover:bg-[#DBFF00]/20 transition-all duration-300"
                  >
                    Eliminar
                  </Button>
                </div>
              ))}
              <div className="pt-4 flex justify-between items-center">
                <span className="text-xl font-bold text-white">Total:</span>
                <span className="text-xl font-bold text-[#DBFF00]">
                  {Number(getTotalPrice()).toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })}
                </span>
              </div>
              <Button 
                className="w-full mt-4 bg-[#DBFF00] hover:bg-[#DBFF00]/90 text-black font-semibold transition-all duration-300"
                onClick={handlePurchase}
                disabled={isProcessing}
              >
                {isProcessing ? 'Procesando...' : 'Finalizar Compra'}
              </Button>
            </div>
          </motion.div>
        )}
        
        {whatsappLink && (
          <motion.div 
            className="mt-6 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <p className="mb-4 text-lg text-gray-300">Haz clic en el botón de abajo para abrir WhatsApp y recibir los detalles de tu compra:</p>
            <a 
              href={whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-[#DBFF00] text-black font-semibold rounded-lg hover:bg-[#DBFF00]/90 transition-colors shadow-md"
            >
              Abrir WhatsApp
            </a>
            <p className="mt-4 text-sm text-gray-400">
              Nota: En el entorno de preview, este enlace no abrirá WhatsApp. En un entorno real, te llevaría directamente a la conversación de WhatsApp.
            </p>
          </motion.div>
        )}
      </div>
      {/* Sombra degradada al final de la sección */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
}

