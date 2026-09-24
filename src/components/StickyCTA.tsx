import React from 'react';

interface StickyCTAProps {
  onOpenContact: () => void;
}

export default function StickyCTA({ onOpenContact }: StickyCTAProps) {
  // Entsprechend der Design-System Überarbeitung wird die StickyCTA für mehr Klarheit
  // und weniger visuelles Rauschen komplett geleert, da die Navbar bereits einen CTA hat.
  return null;
}
