BOSSHEAD Barbershop Booking System

A real-world, responsive booking web application built for BOSSHEAD Barbershop Surabaya. The system replaces manual reservation notes with a structured online booking flow that customers can access directly from their phones.

Live Demo

Open the deployed website

The Problem

Previously, customers contacted the cashier through WhatsApp. The cashier then copied each reservation into a paper notebook, creating several operational risks:

booking details could be written incorrectly or forgotten;

two customers could request the same barber and time slot;

cancellations were difficult to track;

customer and reservation data was not stored in a structured system.

The Solution

This project turns that manual process into a mobile-friendly booking flow:

Service → Barber → Date → Time → Customer Details → Review → Confirmation

After confirmation, the reservation is saved in Supabase and the customer receives a booking code. WhatsApp remains available as a communication channel without being the system's only source of booking data.

Main Features

responsive BOSSHEAD-branded landing page;

service and price selection;

four barber slots, ready to use with real barber names;

calendar-based visit date selection;

available time slots from 11:00 to 21:00;

customer name, WhatsApp number, and optional notes;

booking review before submission;

Supabase database persistence;

unique booking confirmation code;

prevention of duplicate barber time slots;

booking cancellation flow so cancelled slots become available again;

WhatsApp confirmation message containing booking details;

mobile-friendly gallery, promotion, membership, location, and service sections.

Technology Stack

Layer

Technology

Frontend

React 19, TypeScript

Build tool

Vite

Styling

CSS, responsive layouts, animations

Database

Supabase PostgreSQL

Data client

@supabase/supabase-js

Deployment

Vercel

Version control

Git and GitHub

Booking Statuses

The database is designed to support operational booking states:

pending — reservation submitted and awaiting handling;

confirmed — reservation accepted;

completed — service finished;

cancelled — reservation cancelled and its slot can be booked again.

Security Notes

Supabase credentials are read from environment variables.

.env.local is ignored by Git and must never be committed.

Only the Supabase publishable key is used in the browser.

Database access should remain protected with Row Level Security policies.

The database password and service-role key must never be placed in frontend code.

Run Locally

Requirements

Node.js 20 or newer

npm

a Supabase project

Installation

git clone https://github.com/bioonahnuu-design/bosshead-barbershop--Real-Project-.git
cd bosshead-barbershop--Real-Project-
npm install

Create a .env.local file in the project root:

VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_publishable_key

Start the development server:

npm run dev

Create a production build:

npm run build

Project Structure

bosshead-booking/
├── public/ # Venue, promo, membership, and gallery assets
├── src/
│ ├── components/
│ │ └── booking/ # Booking steps, customer form, and confirmation
│ ├── lib/
│ │ └── supabase.ts # Supabase browser client
│ ├── App.tsx # Main page composition
│ ├── App.css # Main visual system
│ └── main.tsx # React entry point
├── .env.local # Local environment variables; never commit
├── package.json
└── README.md

Current Status

The customer booking MVP is live and connected to the database. The next major milestone is an authenticated admin dashboard where BOSSHEAD staff can view, confirm, complete, and cancel reservations without opening the Supabase dashboard.

Roadmap

BOSSHEAD-branded responsive website

Service and barber selection

Date and time selection

Customer form and booking review

Supabase booking persistence

Booking confirmation code

Slot conflict protection

Booking cancellation support

Vercel deployment

Staff authentication

Admin booking dashboard

Barber schedule management

Automatic WhatsApp chatbot integration

PWA installation support

Author

Nahnu RohmaniaInformatics Engineering student at Universitas 17 Agustus 1945 Surabaya.

This project was developed from a real operational problem with permission from BOSSHEAD Barbershop and is intended to become a system used in day-to-day work.
