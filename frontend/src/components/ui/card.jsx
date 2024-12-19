// src/components/ui/card/Card.jsx

import React from 'react';
import { CardHeader } from './CardHeader';
import { CardTitle } from './CardTitle';
import { CardDescription } from './CardDescription';
import { CardContent } from './CardContent';
import { CardFooter } from './CardFooter';

export function Card({ className, children }) {
  return (
    <div className={`bg-white shadow-lg rounded-lg overflow-hidden ${className}`}>
      {children}
    </div>
  );
}
export { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle };
Card.Header = CardHeader;
Card.Title = CardTitle;
Card.Description = CardDescription;
Card.Content = CardContent;
Card.Footer = CardFooter;
