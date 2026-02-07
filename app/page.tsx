"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Triangle } from 'lucide-react';
import { BackgroundPaths } from '@/components/ui/BackgroundPaths';

const services = [

  { id: 1, name: 'ARCHITECTURE' },
  { id: 2, name: 'MOBILE DEVELOPMENT, FRONTEND' },
  { id: 4, name: 'AI SOLUTIONS' },
  { id: 3, name: 'DEVOPS' },
];

const companyName = 'NOVA_NET';
const websiteUrl = 'https://novanet.hu';
const logoUrl = `novanet-logo.svg`;  

export default function Home() {
  return (
      <div className="min-h-screen bg-black text-white font-mono">
        <div className="relative overflow-hidden cyber-grid">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-0" />
          
          {/* Background Animation */}
          <div className="absolute inset-0 z-[1] overflow-hidden">
            <div className="absolute inset-0 opacity-40">
              <BackgroundPaths />
            </div>
          </div>
  
          <div className="relative z-10 container mx-auto px-6">
            <div className="min-h-screen flex flex-col items-center justify-center py-24">
              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-16"
              >
              {logoUrl ? (
                <img 
                  src={logoUrl} 
                  alt={companyName} 
                  className="w-24 h-24 object-contain"
                />
              ) : (
                <Triangle className="w-24 h-24" />
              )}
              </motion.div>
  
              {/* Services List */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-4 mb-16 text-center"
              >
                {services.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
                    className="flex items-center space-x-4 text-lg"
                  >
                    <span className="text-white/60">{index + 1}.</span>
                    <span>{service.name}</span>
                  </motion.div>
                ))}
              </motion.div>
  
              {/* CTA Button */}
              <motion.a
                href={websiteUrl}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="group inline-flex items-center space-x-2 bg-white text-black px-8 py-4 hover:bg-neutral-200 transition-all duration-300"
              >
                <span className="tracking-wider">VISIT WEBSITE</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
  );
}