import { NextResponse } from 'next/server';

const YOUR_WHATSAPP_NUMBER = '5491139324671'; // Número de WhatsApp sin el '+'

export async function POST(request: Request) {
  const body = await request.json();
  const { items, total } = body;

  // Simulamos un pequeño retraso para imitar una llamada a la API real
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Creamos el mensaje para WhatsApp
  const message = `¡Hola! Gracias por tu compra en PRG Coaching. Aquí están los detalles:

${items.map((item: any) => `• ${item.name}: $${item.price.toFixed(2)}`).join('\n')}

Total: $${total}

Para completar tu compra, por favor realiza una transferencia al siguiente CBU:
[0000003100070231496718]

Una vez realizada la transferencia, envíanos el comprobante por este medio.

¡Gracias por tu compra!`;

  // Creamos el enlace de WhatsApp
  const whatsappLink = `https://wa.me/${YOUR_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  console.log('Enlace de WhatsApp generado:', whatsappLink);

  // Simulamos una respuesta exitosa
  return NextResponse.json({ 
    success: true, 
    whatsappLink: whatsappLink
  });
}
